class load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        this.load.atlas('player', './assets/spritesheet.png', './assets/spritesheet.json')
        this.load.image('soft', './assets/soft.png');
        this.load.spritesheet('spinner', './assets/spinner.png', {
          frameWidth: 32,
          frameHeight: 32,
          startFrame: 0,
          endFrame: 63
        });
        this.load.image('ground', './assets/ground.png');
        this.load.image('screenedge', './assets/screenedge.png');
        this.load.atlas('tentacles', './assets/tentacles.png', './assets/tentacles.json')
        this.load.image('background', './assets/bg.png');
        this.load.image('foreground', './assets/foreground.png');
        this.load.image('tut1', './assets/tut1.png');
        this.load.image('tut2', './assets/tut2.png');
        this.load.atlas('demon', './assets/demon.png', './assets/demon.json');
        this.load.image('deathscreen', './assets/deathscreen.png');
        this.load.image('title', './assets/titlescreen.png')
        this.load.image('rock', './assets/rock.png')
    }

    create() {
        this.scene.start('menuScene');
    }
}
