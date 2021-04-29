class load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        this.load.atlas('player', 'assets/spritesheet.png', 'assets/spritesheet.json')
        this.load.image('soft', './assets/soft.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('screenedge', './assets/screenedge.png');
        this.load.atlas('tentacles', 'assets/tentacles.png', 'assets/tentacles.json')
        this.load.image('background', './assets/bg.png');
        this.load.image('foreground', './assets/foreground.png');
        this.load.image('tut', './assets/tut1.png');
    }

    create() {
        this.scene.start('menuScene');
    }
}
