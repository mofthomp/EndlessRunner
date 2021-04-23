class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

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
        if(Phaser.Input.Keyboard.JustDown(keyQ)) {
            this.scene.start('playScene');
        }
    }
}
// 