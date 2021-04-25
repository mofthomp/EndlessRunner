class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyQ_dv = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.QUOTES);
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            fixedWidth: 0
        }
        this.add.text(
            game.config.width / 2, 
            game.config.height / 2, 
            'This is a temp menu',
            menuConfig
        ).setOrigin(0.5);
        this.add.text(
            game.config.width / 2, 
            game.config.height / 2 + 50, 
            'Press Q to Start',
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
    }
}
// 