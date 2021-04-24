class load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        this.load.image('player', './assets/player.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('tentacle1', './assets/tentacle1.png');
        this.load.image('tentacle2', './assets/tentacle2.png');
        this.load.image('background', './assets/bg.png');
        this.load.image('foreground', './assets/foreground.png');
    }

    create() {
        this.scene.start('menuScene');
    }
}