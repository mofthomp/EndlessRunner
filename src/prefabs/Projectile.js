class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'soft');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.add.overlap(
            this,
            scene.allObstacles,
            (object1, object2) => {
                object1.takeDamage();
                if(object2.destructable) {
                    object2.takeDamage();
                }
            }
        )

        const config = {
            tint: 0xaa11ff,
            lifespan: 250,
            maxParticles: 1000,
            frequency: 0,
            radial: true,
            angle: { min: -25, max: 25 },
            blendMode: Phaser.BlendModes.ADD,
            alpha: { start: 1, end: 0 },
            scale: { min: 0.25, max: 0.5, end: 1.0 },
            speed: { min: 128, max: 256 },
            follow: this
        }
        this.trails = scene.explodeParticles.createEmitter(config)

        this.scene = scene

        //change this to change speed
        this.setVelocityX(-500);
        this.body.allowGravity = false
        this.setImmovable();
        this.isFiring = false
    }

    update() {
        if (this.x < -100) {
            this.destroy();
        }
    }

    destroy () {
        super.destroy()
    }

    takeDamage () {
        this.trails.manager.emitters.remove(this.trails)
        makeExplodeParticles(this.x, this.y, this.scene.explodeParticles)
        this.destroy()
    }
}
