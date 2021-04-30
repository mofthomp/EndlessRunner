class Lose extends Phaser.Scene {
    constructor() {
        super('loseScene');
    }

    create (data) {
        this.background = this.add.tileSprite(0, 0, 800, 600, 'deathscreen').setOrigin(0,0);
        const { playTimeInMilliseconds } = data
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyF_dv = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyQ_dv = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            fixedWidth: 0
        }

        this.sound.stopAll();
        this.sound.play('bgm_death');

        /* Update high score. */
        if (playTimeInMilliseconds > getHighScore()) {
            setHighScore(playTimeInMilliseconds)
        }

        this.add.text(
            game.config.width / 2, 
            game.config.height / 3 - 96, 
            'YOU HAVE MET YOUR DEMISE',
            {
                ...menuConfig,
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 3, 
            'Your score: ' + formatTime(playTimeInMilliseconds),
            menuConfig
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 3 + 32, 
            'Your best score: ' + formatTime(getHighScore()),
            menuConfig
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 3 + 96, 
            'Press Q to Restart',
            menuConfig
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 3 + 128, 
            'Press F for Menu',
            menuConfig
        ).setOrigin(0.5);
    }

    update() {
        
        if(Phaser.Input.Keyboard.JustDown(keyQ) || Phaser.Input.Keyboard.JustDown(keyQ_dv)) {
            
            game.settings = {
                obstacleSpeed: 500
            }
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(keyF) || Phaser.Input.Keyboard.JustDown(keyF_dv)) {
            this.scene.start('menuScene');
        }
        
    }
}
// 
