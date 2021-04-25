class Lose extends Phaser.Scene {
    constructor() {
        super('loseScene');
    }

    create() {
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

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
            'Press Q to restart',
            menuConfig
        ).setOrigin(0.5);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyQ)) {
            game.settings = {
                obstacleSpeed: 500
            }
            this.scene.start('playScene');
        }
    }
}
// 
