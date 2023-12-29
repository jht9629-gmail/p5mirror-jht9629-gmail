// https://editor.p5js.org/jht9629-gmail/sketches/tI8IX029X
// pixel combo Next TIme millis aDelays

let drawers = [
  draw_random, //
  draw_paint,
  draw_bright,
  draw_paint,
];
let drawers_index = 0;
let aRun = true;
let aNextSecs = 0;
let aDelay = 5.0;
// let aDelays = [0.5, 1, 0.5, 1, 0.5, 4, 0.5, 4];
let aDelays = [1, 2, 3, 4];
let aDelayIndex = 0;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);

  setup_bright();
  setup_paint();

  createButton("Next").mousePressed(next_action);

  // checkbox time based running
  createCheckbox('Run', aRun).changed(function() {
    aRun = this.checked();
  });
  
  aNextSecs = millis() / 1000.0 + aDelays[0];
}

function draw() {
  let func = drawers[drawers_index];
  func();
  // if (aRun && frameCount % 60 == 0) {
  //   next_action()
  // }
  let now = millis() / 1000.0
  if (aRun && now > aNextSecs) {
    aDelayIndex = (aDelayIndex + 1) % aDelays.length;
    aDelay = aDelays[aDelayIndex]
    aNextSecs = now + aDelay;
    next_action();
  }
}

function next_action() {
  drawers_index = (drawers_index + 1) % drawers.length;
}

function draw_random() {
  background(51);

  // let w1 = int(width / 3);
  // let w2 = int(w1 * 2);

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      pixels[index + 0] = x;
      pixels[index + 1] = random(255);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}

let video;
let vScale = 16;

function setup_bright() {
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw_bright() {
  // background(51);
  video.loadPixels();

  let w1 = 0;
  let w2 = video.width;

  fill(51);
  rectMode(CORNER);
  rect(w1 * vScale, 0, w2 * vScale, height);

  for (let y = 0; y < video.height; y++) {
    for (let x = w1; x < w2; x++) {
      let index = (video.width - x + 1 + y * video.width) * 4;
      // console.log('rgb', r, g, b)
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let bright = (r + g + b) / 3;
      let w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
}

// https://editor.p5js.org/jht9629-gmail/sketches/PPU_1IFRa
// pixel combo Next TIme millis 

// https://editor.p5js.org/jht9629-gmail/sketches/4p4LPWvat
// pixel combo Next TIme frameCount

// https://editor.p5js.org/jht9629-gmail/sketches/b9tLAOHqq
// pixel combo v3
// Next drawing

// https://editor.p5js.org/jht9629-gmail/sketches/xvdjaQIhM
// pixel combo v2
// effects in bands

// https://editor.p5js.org/jht9629-gmail/sketches/_BoYAq-PI
// pixel combo

// https://editor.p5js.org/jht9629-nyu/sketches/1DfZ5dRU1

// https://editor.p5js.org/jht9629-nyu/sketches/a0HDzoroq

// https://editor.p5js.org/jht9629-nyu/sketches/sd8fP5xtL
