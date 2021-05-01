class Demon extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, 1100, game.config.height/2, 'demon');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene
        this.setDepth(10);

        //change this to change speed
        this.setVelocityX(-10);
        this.body.allowGravity = false
        this.setImmovable();
        /* Adjust physics size. */
        this.setSize(this.width-50, this.height)
    }
}
