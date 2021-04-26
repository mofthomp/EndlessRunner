class Credits extends Phaser.Scene {
    constructor() {
        super('creditScene');
    }



create() {
    keyLeftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        fixedWidth: 0
    }
    this.add.text(
        game.config.width / 2, 
        game.config.height / 2, 
        'this is where our credits go :)',
        menuConfig
    ).setOrigin(0.5);
    this.add.text(
        game.config.width / 2, 
        game.config.height / 2 + 50, 
        'Press -> to Start or <- for Menu',
        menuConfig
    ).setOrigin(0.5);
    
}

update() {
    if(Phaser.Input.Keyboard.JustDown(keyRightArrow)) {
        game.settings = {
            obstacleSpeed: 500
        }
        this.scene.start('playScene');
    }
    if(Phaser.Input.Keyboard.JustDown(keyLeftArrow)) {
        this.scene.start('menuScene');
    }
}
}
