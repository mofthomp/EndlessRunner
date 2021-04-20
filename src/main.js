const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
})

/* Remove context menu. */
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})
