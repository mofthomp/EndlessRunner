class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, -128, 480, Math.random() < 0.5 ? 'tentacle1' : 'tentacle2');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene

        //change this to change speed
        this.setVelocityX(300);
        this.body.allowGravity = false
        this.setImmovable();
    }

    update() {
        //console.log(this.body.velocity.x);
        if(this.x > (game.config.width + this.width)) {
            this.destroy();
        }
    }

    takeDamage () {
        makeExplodeParticles(this.x, this.y, this.scene.explodeParticles)
        this.destroy()
    }
}
