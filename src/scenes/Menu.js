class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        this.load.audio('bgm_sting', './assets/intro_sting.mp3');
        this.load.audio('bgm_play', './assets/chase_theme.mp3');
        this.load.audio('bgm_death', './assets/death_jingle.mp3');
    }

    create() {
        keyLeftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            fixedWidth: 0
        }

        this.sound.stopAll();
        this.sound.play('bgm_sting');

        this.add.text(
            game.config.width / 2, 
            game.config.height / 2 - 128, 
            'HUBRIS',
            {
                ...menuConfig,
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 2, 
            'Press → to Start',
            menuConfig
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 2 + 64, 
            'Press ← for Credits',
            menuConfig
        ).setOrigin(0.5);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyRightArrow)) {
            /*game.settings = {
                obstacleSpeed: 500
            }*/
            this.scene.start('tutScene');
        }
        if(Phaser.Input.Keyboard.JustDown(keyLeftArrow)) {
            this.scene.start('creditScene');
        }
    }
}
// 
