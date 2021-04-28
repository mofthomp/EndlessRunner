const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 750 },
      debug: false
    }
  },
  scene: [load, Menu, Play, Lose, Credits, Tutorial]
})

let keyQ, keyQ_dv, keyLeft, keyRight, keyJump, keyLeftArrow, keyRightArrow, keyUp, keyF, keyF_dv;
const playerMaxSpeed = 300;

/* Remove context menu. */
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})
