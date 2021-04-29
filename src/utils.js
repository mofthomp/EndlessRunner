function makeExplodeParticles (x, y, particles) {
    const config = {
        tint: 0xaa11ff,
        lifespan: 250,
        maxParticles: 32,
        frequency: -1,
        radial: true,
        blendMode: Phaser.BlendModes.ADD,
        alpha: { start: 1, end: 0 },
        scale: { min: 0.5, max: 1, end: 2.0 },
        speed: { min: 200, max: 400 },
        deathCallback: () => {
            if (explosion.getAliveParticleCount() === 0) {
                explosion.manager.emitters.remove(explosion)
            }
        }
    }
    const explosion = particles.createEmitter(config)
    explosion.explode(
        config.maxParticles,
        x,
        y
    )
}

function stopwatch () {
    let time = 0
    return {
        inSeconds () {
            return time / 1000
        },
        inMilliseconds () {
            return time
        },
        addSeconds (dt) {
            time += dt * 1000
        },
        addMilliseconds (dt) {
            time += dt
        },
        clear () {
            time = 0
        }
    }
}
