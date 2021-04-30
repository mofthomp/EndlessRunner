class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {
        this.playTime = stopwatch()

        this.anims.create({
            key: 'tentacles1',
            frames: this.anims.generateFrameNames('tentacles', {
                start: 1,
                end: 10,
                zeroPad: 2,
                prefix: 'tent1_'
            }),
            frameRate: 15,
            repeat: -1
        })

        this.anims.create({
            key: 'tentacles2',
            frames: this.anims.generateFrameNames('tentacles', {
                start: 1,
                end: 8,
                zeroPad: 2,
                prefix: 'tent2_'
            }),
            frameRate: 15,
            repeat: -1
        })

        this.anims.create({
            key: 'player_run',
            frames: this.anims.generateFrameNames('player', {
                start: 1,
                end: 6,
                prefix: 'run_'
            }),
            frameRate: 15,
            repeat: -1
        })

        this.sound.stopAll();
        this.playMusic = this.sound.add('bgm_play', {
            loop: true
        });
        this.playMusic.play();

        this.anims.create({
            key: 'player_jump',
            frames: this.anims.generateFrameNames('player', {
                start: 1,
                end: 3,
                prefix: 'jump_'
            }),
            frameRate: 15,
        })

        this.anims.create({
            key: 'player_fall',
            frames: this.anims.generateFrameNames('player', {
                start: 1,
                end: 2,
                prefix: 'fall_'
            }),
            frameRate: 15,
        })

        this.anims.create({
            key: 'demon_idle',
            frames: this.anims.generateFrameNames('demon', {
                start: 1,
                end: 25,
                prefix: 'sprite'
            }),
            frameRate: 15,
            repeat: -1
        })


        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyF_dv = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyJump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLeftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        this.background = this.add.tileSprite(
            0,
            0,
            game.config.width,
            game.config.height,
            'background'
        ).setOrigin(0, 0);

        this.foreground = this.add.tileSprite(
            0,
            0,
            game.config.width,
            game.config.height,
            'foreground'
        ).setOrigin(0, 0);

        //change to sprite if ground needs to be animated
        this.ground = this.physics.add.image(
            game.config.width / 2,
            game.config.height + 4,
            'ground'
        ).setOrigin(0.5,1.0);
        this.ground.body.allowGravity = false
        this.ground.setImmovable(true);
        
        // Add tile sprite in front of ground. Why is there no way to just add a
        // tile sprite? Idk
        this.groundSprite = this.add.tileSprite(
            game.config.width / 2,
            game.config.height,
            game.config.width,
            this.ground.height,
            'ground'
        ).setOrigin(0.5,1.0);

        this.player = new Player(
            this,
            game.config.width / 2,
            400,
            'player',
            0
        )

        this.pushTimer = 0;

        this.demon = new Demon(this);
        this.demon.play('demon_idle')

        this.physics.add.overlap(this.player, this.demon, () => {
            this.killPlayer()
        })

        this.physics.add.collider(this.ground, this.player);

        this.explodeParticles = this.add.particles('soft');

        this.allObstacles = this.add.group({
            runChildUpdate: true
        });

        this.allProjectiles = this.add.group({
            runChildUpdate: true
        })

        const addObstacleTimer = () => {
            const min = Math.max(1000 - this.playTime.inSeconds() * 8, 100)
            const scale = Math.max(2000 - this.playTime.inSeconds() * 8, 100)
            //console.log(min, scale)
            const e = this.time.addEvent({
                delay: Math.random() * scale + min,
                callback: () => {
                    this.generateObstacle()
                    addObstacleTimer()
                    this.time.removeEvent(e)
                }
            });
        }
        addObstacleTimer()
      
        //let timeScore = this.time.now; -- this is for changing difficulty later

        //display time
        let timeConfig = {
            fontFamily: 'monospace',
            fontSize: '32px',
            color: '#FFFFFF',
            align: 'center',
            fontStyle: 'bold',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 300
        }
        
        this.timeDisplay = this.add.text(
            game.config.width / 2,
            10,
            'Time: ' + this.playTime.toString(),
            timeConfig
        ).setOrigin(0.5, 0)
    }

    update(t, dt) {
        if(this.pushTimer > 0) {
            this.pushTimer -= 1;
            this.demon.setVelocityX(50);
        }else{
            this.demon.setVelocityX(-10);
        }

        this.player.update(t, dt);

        this.foreground.tilePositionX -= 7;
        this.background.tilePositionX -= 6;
        this.groundSprite.tilePositionX -= 5;

        // Kill the player if they go out of bounds.
        if (
            this.player.x > game.config.width + this.player.width / 2 ||
            this.player.x < -this.player.width / 2
        ) {
            this.killPlayer()
        }

        //update clock
        this.playTime.addMilliseconds(dt)
        this.timeDisplay.text = 'Time: ' + this.playTime.toString()
    }

    killPlayer () {
        this.scene.start('loseScene', {
            playTimeInMilliseconds: this.playTime.inMilliseconds()
        })
    }

    generateObstacle() {
        const obstacle = new Obstacle(this);
        this.physics.add.overlap(this.player, obstacle, () => {
            this.killPlayer()
        })
        this.allObstacles.add(obstacle);
    }
}
