class Tutorial_2 extends Phaser.Scene {
    constructor() {
        super('tutScene2');
    }

    create() {
        keyRightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        /*let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            fixedWidth: 0
        }
        this.add.text(
            game.config.width / 2, 
            game.config.height / 2, 
            'Press -> to Begin',
            menuConfig
        ).setOrigin(0.5);*/
        this.background = this.add.tileSprite(0, 0, 800, 600, 'tut2').setOrigin(0,0);
        
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyRightArrow)) {
            game.settings = {
                obstacleSpeed: 500
            }
            this.scene.start('playScene');
        }
    }

}