class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, -128, 480, 'tentacles');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene

        //change this to change speed
        this.setVelocityX(300);
        this.body.allowGravity = false
        this.setImmovable();
        /* Adjust physics size. */
        this.setSize(this.width / 2, this.height - 4)

        this.animation = ['tentacles1', 'tentacles2'][Math.round(Math.random())]
    }

    update() {
        this.play(this.animation, true)
        //console.log(this.body.velocity.x);
        if(this.x > (game.config.width + this.width)) {
            this.destroy();
        }
    }

    takeDamage () {
        this.scene.pushTimer = 30;
        makeExplodeParticles(this.x, this.y, this.scene.explodeParticles)
        this.destroy()
    }
}
