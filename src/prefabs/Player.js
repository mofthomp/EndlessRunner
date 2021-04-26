class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.cooldownIndicator = scene.add.text(x, y, '').setOrigin(0.5, 0.5)

        //this.setCollideWorldBounds(true);
        this.jumping = false;
        this.body.useDamping = true;
        this.setDragX(0.1);
        this.gameOver = false
        this.scene = scene

        /* How many milliseconds before you can shoot again. */
        this.maxCooldown = 5000
        this.cooldown = 0
    }

    update(t, dt) {
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

        // Add a slight amount of extra gravity as the player falls.
        if (this.body.velocity.y > 0) {
          this.body.velocity.y += 10
        }

        if (this.cooldown <= 0) {
            this.cooldownIndicator.visible = false
            if (Phaser.Input.Keyboard.JustDown(keyF)) {
                this.fire()
            }
        } else {
            this.cooldownIndicator.visible = true
            this.cooldown -= dt
            this.cooldownIndicator.text = (this.cooldown / 1000).toFixed(2)
        }
        this.cooldownIndicator.x = this.x
        this.cooldownIndicator.y = this.y - 64
    }

    checkVelo(veloX) {
        return (Math.abs(veloX) > 30) ? 30 : Math.abs(veloX);
    }

    fire () {
        new Projectile(this.scene, this.x, this.y)
        this.cooldown = this.maxCooldown
    }
}
