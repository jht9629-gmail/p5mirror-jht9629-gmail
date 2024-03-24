// https://editor.p5js.org/jht9629-gmail/sketches/-FuOH_EE4
// MazeSpin
// converted from p5VideoKit effects import style
//   to <script src=""> format used in p5VideoKit
//

let my = {
  // input: this.input,
  width: 300,
  height: 300,
  ncells: 9,
  strokeWeight: 0.5,
  delta: 1,
  step_period: 1,
  pause_period: 1,
  do_spiral: 1,
  do_cycle: 2,
  do_report: 0,
};
let mazeSpin;

function setup() {
  createCanvas(my.width, my.height);

  console.log("MazeSpin", MazeSpin);
  mazeSpin = new MazeSpin(my);
}

function draw() {
  background(220);
  mazeSpin.prepareOutput();
  image(mazeSpin.output, 0, 0);
}

// https://github.com/jht1493/p5VideoKit/blob/main/src/effects/maze_spin/MazeSpin.js
