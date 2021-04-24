class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        //this.setCollideWorldBounds(true);
        this.setGravityY(600);
        this.jumping = false;
        this.body.useDamping = true;
        this.setDragX(0.1);
        this.gameOver = false
    }

    update() {
        // Play the run animation. */
        if (this.body.touching.down) {
          this.play('player_run', true)
        } else if (this.body.velocity.y > 100) {
          this.play('player_fall')
        }

        this.setAccelerationX(0)
        if(keyLeft.isDown || keyLeftArrow.isDown) {
            if(this.body.velocity.x > 0) {
                this.body.velocity.x -= this.checkVelo(this.body.velocity.x);
            } else {
                if(Math.abs(this.body.velocity.x) < playerMaxSpeed) {
                    this.body.velocity.x -= 40;
                }
            }
        }
        if(keyRight.isDown || keyRightArrow.isDown) {
            if(this.body.velocity.x < 0) {
                this.body.velocity.x += this.checkVelo(this.body.velocity.x);
            } else {
                if(Math.abs(this.body.velocity.x) < playerMaxSpeed) {
                    this.body.velocity.x += 40;
                }
            }
        }
        if((keyJump.isDown || keyUp.isDown) && this.body.touching.down) {
            // Play jump animation.
            this.play('player_jump')
            this.setVelocityY(-500);
        }
    }

    checkVelo(veloX) {
        return (Math.abs(veloX) > 30) ? 30 : Math.abs(veloX);
    }
}
