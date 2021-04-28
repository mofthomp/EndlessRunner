class Lose extends Phaser.Scene {
    constructor() {
        super('loseScene');
    }

    create() {
        
        /*keyLeftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);*/
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

        this.add.text(
            game.config.width / 2, 
            game.config.height / 2, 
            'You died! :(',
            menuConfig
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 2 + 50, 
            'Press Q to Restart or F for Menu',
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
