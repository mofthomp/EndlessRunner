function makeExplodeParticles (x, y, particles) {
    const config = {
        tint: 0xff1100,
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
