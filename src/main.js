const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [load, Menu, Play]
})

let keyQ, keyLeft, keyRight, keyJump, keyLeftArrow, keyRightArrow, keyUp;

/* Remove context menu. */
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})
