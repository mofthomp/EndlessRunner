class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        //temp player image
        this.load.image('player', './assets/player.png');
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

        this.player = new Player(
            this,
            game.config.width / 2,
            game.config.height / 2,
            'player',
            0
        )
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