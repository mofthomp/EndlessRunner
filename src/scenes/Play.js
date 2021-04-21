class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        //temp player image
        this.load.image('player', './assets/player.png');
        this.load.image('ground', './assets/ground.png')
    }

    create() {
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyJump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.add.text(
            game.config.width / 2, 
            20, 
            'This is the play scene'
        ).setOrigin(0.5);

        //change to sprite if ground needs to be animated
        this.ground = this.physics.add.image(
            game.config.width / 2,
            game.config.height,
            'ground'
        );
        this.ground.setCollideWorldBounds(true);

        this.player = new Player(
            this,
            game.config.width / 2,
            game.config.height / 2,
            'player',
            0
        )

        this.physics.add.collider(this.ground, this.player);
    }

    update() {
        this.player.update();
        // if(keyLeft.isDown) {
        //     console.log('pressing A');
        // }
        // if(keyRight.isDown) {
        //     console.log('pressing D');
        // }
        // if(keyJump.isDown) {
        //     console.log('pressing Jump');
        // }
    }
}