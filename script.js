import { bfs } from './bfs.js'

let action = document.getElementById('action')
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let WIDTH = 300
let HEIGHT = 300

function draw4(ctx, lvl) {
  ctx.fillStyle = 'rgb(0, 150, 250)';
  for (let i = 0; i < lvl; i++) {
    ctx.fillRect(95, HEIGHT - (20 * (i + 1)), 50, 3)
  }
  ctx.fillStyle = 'rgb(0,0,0)'
  ctx.fillText('4-L Jug', 103, HEIGHT - 5)
}

function draw3(ctx, lvl) {
  ctx.fillStyle = 'rgb(0, 150, 250)';
  for (let i = 0; i < lvl; i++) {
    ctx.fillRect(155, HEIGHT - (20 * (i + 1)), 50, 3)
  }
  ctx.fillStyle = 'rgb(0,0,0)'
  ctx.fillText('3-L Jug', 163, HEIGHT - 5)
}



let goal = bfs()
let path = []
while (goal != null) {
  path.push(goal)
  goal = goal.parent
}
path.reverse()

function draw() {
  path.forEach((n, i) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT)
      draw4(ctx, n.x)
      draw3(ctx, n.y)
      action.innerText = 'Action: ' + n.action
    }, i * 1500)
  })
}

draw()