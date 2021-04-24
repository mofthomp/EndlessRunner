class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, -128, 460, ((Math.random() * 10) % 2) ? 'tentacle1' : 'tentacle2');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        //change this to change speed
        this.setVelocityX(300);
        this.setImmovable();
    }

    update() {
        //console.log(this.body.velocity.x);
        if(this.x > (game.config.width + this.width)) {
            this.destroy();
        }
    }
}