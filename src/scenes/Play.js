class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {
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

        this.add.text(
            game.config.width / 2, 
            20, 
            'This is the play scene'
        ).setOrigin(0.5);

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

        this.physics.add.collider(this.ground, this.player);

        this.allObstacles = this.add.group({
            runChildUpdate: true
        });

        this.obstacleTimer = this.time.addEvent({
            delay: 1000,
            callback: () => {
                if (Math.random() < 0.25) {
                    this.generateObstacle()
                }
            },
            loop: true
        });
    }

    update() {
        this.player.update();

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
    }

    killPlayer () {
        this.scene.start('loseScene')
    }

    generateObstacle() {
        let obstacle = new Obstacle(this);

        //uncomment this so the player can collide with the obstacle
        //this.physics.add.collider(this.player, obstacle);
        this.physics.add.overlap(this.player, obstacle, () => {
            this.killPlayer()
        })
        this.allObstacles.add(obstacle);
        console.log(this.allObstacles);
    }
}
