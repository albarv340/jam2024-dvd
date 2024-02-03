import init, { draw_rectangle } from "../pkg/webassembly_webgl_viewer.js";

const CANVAS_ID = "triangle";

let vx = 1.5;
let vy = 1.5;
const size = 200;
let x = size + Math.random() * (window.innerWidth - size * 2);
let y = size + Math.random() * (window.innerHeight - size * 2);
let color = [0.0, 1.0, 0.0, 1.0];

async function run() {
    await init();
    resizeCanvas();
    draw_rectangle(CANVAS_ID, color, size, x, y);
    setInterval(() => {
      draw_rectangle(CANVAS_ID, color, size, x, y);
      collisionCheck();
      x += vx;
      y += vy;
    }, 20);
}

function collisionCheck() {
  let collisionAmount = 0;
  if (x - size / 2 < 0) {
    x = size / 2;
    vx *= -1;
    color = [1.0, 1.0, 0.0, 1.0];
    collisionAmount++;
  }
  if (y - size / 2 < 0) {
    y = size / 2;
    vy *= -1;
    color = [0.0, 1.0, 0.0, 1.0];
    collisionAmount++;
  }
  if (x + size / 2 > window.innerWidth) {
    x = window.innerWidth - size / 2;
    vx *= -1;
    color = [1.0, 0.0, 0.0, 1.0];
    collisionAmount++;
  }
  if (y + size / 2 > window.innerHeight) {
    y = window.innerHeight - size / 2;
    vy *= -1;
    color = [0.0, 0.0, 1.0, 1.0];
    collisionAmount++;
  }
  if (collisionAmount === 2) {
    alert("COLLISION!")
  }
}

function resizeCanvas() {
    document.getElementById(CANVAS_ID).setAttribute("width", window.innerWidth);
    document.getElementById(CANVAS_ID).setAttribute("height", window.innerHeight);
}

window.addEventListener("resize", resizeCanvas);

// window.addEventListener("mousemove", (e) => {
//   const color = [1.0, 0.0, 0.0, 1.0];
//   draw_rectangle(CANVAS_ID, color, e.clientX, e.clientY);
// })

run();