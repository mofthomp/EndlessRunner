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

function formatTime (milliseconds) {
    const padNum = (x, amount) => x.toString().padStart(amount, '0')
    const minutes = Math.floor(milliseconds / (1000 * 60))
    const seconds = (milliseconds - minutes * 60 * 1000) / (1000)
    return padNum(minutes, 2) + ':' + padNum(seconds.toFixed(2), 5)
}

function stopwatch () {
    let time = 0
    let isStopped = false
    return {
        inSeconds () {
            return time / 1000
        },
        inMilliseconds () {
            return time
        },
        addSeconds (dt) {
            if (!isStopped) {
                time += dt * 1000
            }
        },
        addMilliseconds (dt) {
            if (!isStopped) {
                time += dt
            }
        },
        clear () {
            time = 0
        },
        inMinutes () {
            return time / (1000 * 60)
        },
        toString () {
            return formatTime(time)
        },
        stop () {
            isStopped = true
        },
        start () {
            isStopped = false
        }
    }
}

/**
 * Return the game data from local storage.
 */
function getGameData () {
    return JSON.parse(window.localStorage.getItem('gameData')) || {}
}

function setGameData (data) {
    window.localStorage.setItem('gameData', JSON.stringify(data))
}

function getHighScore () {
    return getGameData().highScore || 0
}

function setHighScore (score) {
    const gameData = getGameData()
    gameData.highScore = score
    setGameData(gameData)
}
