class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {
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
            game.config.height,
            'ground'
        ).setOrigin(0.5,1.0);
        this.ground.setImmovable(true);

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
            delay: 2000,
            callback: this.generateObstacle,
            callbackScope: this,
            loop: true
        });
    }

    update() {
        this.player.update();

        this.foreground.tilePositionX += 5;
        this.background.tilePositionX += 2;
        this.ground.tilePositionX += 2;
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
