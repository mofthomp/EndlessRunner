/**
 * Endless Runner
 *  - Title: Hubris
 *  - Playable link: https://mofthomp.github.io/EndlessRunner/
 *  - Repo link: https://github.com/mofthomp/EndlessRunner
 *  - Collaborators: Molly Thompson, Jess Wake, Yuhong Li, Thomas Cannon
 *  - Team name: Cave Team Name: Mammoth
 *  - Date completed: 5/3/2021
 *  - Creative tilt: For our technical tilt, we added a significant amount of
 *    particle effects using Phaser's particle system, using additive blending
 *    that is available in WebGL. This creates a cool firey effect when you shoot
 *    magic fireballs. We also used the localStorage API to store the high score
 *    for the user. Lastly, we implemented a system of dynamic difficulty, where
 *    more obstacles spawn as time progresses. For our artistic tilt, we are
 *    particularly proud of the art style achieved by Molly using adobe animate,
 *    and the music created by Jess using FLStudio.
 */

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#747474',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 750 },
      debug: false
    }
  },
  scene: [load, Menu, Play, Lose, Credits, Tutorial_1, Tutorial_2]
})

let keyQ, keyQ_dv, keyLeft, keyRight, keyJump, keyLeftArrow, keyRightArrow, keyUp, keyF, keyF_dv;
const playerMaxSpeed = 300;

/* Remove context menu. */
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})
