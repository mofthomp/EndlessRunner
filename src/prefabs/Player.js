class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.jumping = false;
        this.body.useDamping = true;
        this.setDragX(0.1);
    }

    update() {
        this.setAccelerationX(0)
        if(keyLeft.isDown) {
            if(this.body.velocity.x > 0) {
                this.setVelocityX(0);
            }
            this.setAccelerationX(-100);
        }
        if(keyRight.isDown) {
            if(this.body.velocity.x < 0) {
                this.setVelocityX(0);
            }
            this.setAccelerationX(100);
        }
        if(keyJump.isDown && this.body.touching.down) {
            this.setVelocityY(-200);
        }
    }
}