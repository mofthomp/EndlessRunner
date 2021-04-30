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
        game.config.height / 3 - 64, 
        '~CREDITS~',
        {
            ...menuConfig,
            fontSize: '32px',
            fontStyle: 'bold'
        }
    ).setOrigin(0.5);

    this.add.text(
        game.config.width / 2, 
        game.config.height / 3, 
        'Programming: Thomas Cannon, Yuhong Li',
        {
            ...menuConfig,
            fontSize: '24px',
            
        }
    ).setOrigin(0.5);
    this.add.text(
        game.config.width / 2, 
        game.config.height / 3 + 64, 
        'Art & Add\'l Programming: Molly Thompson',
        {
            ...menuConfig,
            fontSize: '24px',
            
        }
    ).setOrigin(0.5);
    this.add.text(
        game.config.width / 2, 
        game.config.height / 3 + 128, 
        'Music, SFX, & Add\'l Programming: Jessica Wake',
        {
            ...menuConfig,
            fontSize: '24px',
            
        }
    ).setOrigin(0.5);
    this.add.text(
        game.config.width / 2, 
        game.config.height - game.config.height / 3 + 64, 
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
