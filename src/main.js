const game = new Phaser.Game({
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [load, Menu, Play, Lose]
})

let keyQ, keyLeft, keyRight, keyJump, keyLeftArrow, keyRightArrow, keyUp;
const playerMaxSpeed = 300;

/* Remove context menu. */
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})
