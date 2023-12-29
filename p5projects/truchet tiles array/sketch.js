// https://editor.p5js.org/jht9629-gmail/sketches/EfQDCJ5aR
// truchet tiles array

let a_len = 40;
let a_angle = 0;
let a_arr = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
  strokeWeight(4);
  for (let x = 0; x < width; x += a_len) {
    for (let y = 0; y < height; y += a_len) {
      let odd = random() > 0.5
      a_arr.push(odd)
    }
  }
}

let half;

function draw() {
  half = a_len / 2;
  background(220);
  let odd = false;
  let index = 0
  for (let x = 0; x < width; x += a_len) {
    for (let y = 0; y < height; y += a_len) {
      let odd = a_arr[index]
      if (odd) {
        drawLeft(x, y);
      } else {
        drawRight(x, y);
      }
      index++;
      // odd = ! odd;
    }
    // odd = ! odd;
  }
  if (a_angle < 360) {
    a_angle += 1;
  }
}

function drawLeft(x, y) {
  push();
  translate(x + half, y + half);
  rotate(a_angle);
  arc(-half + 0, -half + 0, a_len, a_len, 0, 90);
  arc(-half + a_len, -half + a_len, a_len, a_len, 180, 270);
  pop();
}

function drawRight(x, y) {
  push();
  noFill();
  translate(x + half, y + half);
  rotate(a_angle);
  arc(-half + a_len, -half + 0, a_len, a_len, 90, 180);
  arc(-half + 0, -half + a_len, a_len, a_len, 270, 360);
  pop();
}

// https://editor.p5js.org/jht9629-nyu/sketches/5TSs5XB6o
// truchet tiles rotate

// https://editor.p5js.org/jht9629-nyu/sketches/1CpIVSqp_d
// truchet tiles re-factored

// https://editor.p5js.org/jht9629-nyu/sketches/lBrb1cBQ7
// truchet tiles copy

// https://editor.p5js.org/ambikajo/sketches/cKu3Gn0Po
// truchet tiles by ambikajo
