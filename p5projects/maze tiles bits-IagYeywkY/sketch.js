// https://editor.p5js.org/jht9629-gmail/sketches/IagYeywkY
// maze tiles bits

let len = 40;
let a_angle = 0;
let a_now = [];
let a_next = [];
// {count: seconds,...}
// let a_pause_dict = { 0: 2.0, 90: 2.0, 180: 2.0, 270: 2.0  };
// let a_angle_max = 360;
let a_pause_dict = { 0: 2.0, 90: 2.0 };
let a_angle_max = 180;
let a_pause_start = -1;
let a_pause_lapse;
let a_strokeWeight = 8;
let a_fill_pending = 0;
let a_incr = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
  strokeWeight(a_strokeWeight);
  fill_now_zero();
  fill_next_random();
}

function fill_now_zero() {
  a_now = [];
  // Fill array a_arr with random true/false values
  let index = 0;
  for (let y = 0; y < height; y += len) {
    for (let x = 0; x < width; x += len) {
      a_now.push(0);
      index++;
    }
  }
}

function fill_next_incr() {
  a_next = [];
  for (let index = 0; index < a_now.length; index++) {
    a_next[index] = a_now[index]
  }
  for (let index = 0; index < a_now.length; index++) {
    let bit = a_now[index] + 1;
    if (bit == 1) {
      a_next[index] = 1;
      break;
    }
    a_next[index] = 0;
  }
}

function fill_now_next() {
  for (let index = 0; index < a_now.length; index++) {
    a_now[index] = a_next[index]
  }
}

function fill_next_random() {
  a_next = [];
  // Fill array a_arr with random true/false values
  let index = 0;
  for (let y = 0; y < height; y += len) {
    for (let x = 0; x < width; x += len) {
      let bit = random([0, 1]);
      a_next.push(bit);
      index++;
    }
  }
}

function draw() {
  let half = len / 2;
  background(220);
  let index = 0;
  for (let y = 0; y < height; y += len) {
    for (let x = 0; x < width; x += len) {
      let now = a_now[index];
      let target = a_next[index];
      let angle = now == target ? 0 : a_angle;
      if (now) {
        drawLeft(x, y, half, angle);
      } else {
        drawRight(x, y, half, angle);
      }
      index++;
    }
  }
  if (check_cycle()) {
    a_angle = (a_angle + 1) % a_angle_max;
  }
}

function mousePressed() {
  console.log("mousePressed");
  // fill_arr();
  a_fill_pending = 1;
}
// return true to advance cycle
// use a_angle to find seconds to pause in a_pause_dict
function check_cycle() {
  if (a_pause_start > 0) {
    let now = millis();
    if (now - a_pause_start > a_pause_lapse) {
      a_pause_start = 0;
      return true;
    } else {
      return false;
    }
  }
  let lapse = a_pause_dict[a_angle];
  if (lapse) {
    a_pause_start = millis();
    a_pause_lapse = lapse * 1000;

    if (a_angle % 90 == 0) {
      // console.log("a_angle", a_angle, "frameCount", frameCount);
      if (a_incr == 3) {
        // fill_now_next();
        // fill_next_random();
      }
    }
    console.log('a_angle', a_angle, 'a_incr', a_incr);
    console.log("a_now[0]", a_now[0], "a_next[0]", a_next[0]);

    if (a_angle == 0) {
      a_incr = (a_incr + 1) % 2
      // console.log('a_incr', a_incr, "frameCount", frameCount);
      if (a_incr == 0) {
        fill_next_incr();
      }
      // else if (a_incr == 2) {
      //   fill_now_next();
      //   fill_next_random();
      // }
      // else {
      //   fill_next_random();
      // }
    }

    return false;
  } else {
    return true;
  }
}

function drawLeft(x, y, half, angle) {
  push();
  translate(x + half, y + half);
  rotate(angle);
  line(-half + 0, -half + 0, -half + len, -half + len);
  pop();
}

function drawRight(x, y, half, angle) {
  push();
  noFill();
  translate(x + half, y + half);
  rotate(angle);
  line(-half + len, -half + 0, -half + 0, -half + len);
  pop();
}

function secsTime() {
  return millis() / 1000;
}


// https://editor.p5js.org/jht9629-gmail/sketches/abgeEnTyf
// maze tiles count

// https://editor.p5js.org/jht9629-gmail/sketches/i2hCaC36l
// maze tiles pause

// https://editor.p5js.org/jht9629-gmail/sketches/LnPplI2CR
// truchet tiles pause

// https://editor.p5js.org/jht9629-gmail/sketches/EfQDCJ5aR
// truchet tiles array

// https://editor.p5js.org/jht9629-nyu/sketches/5TSs5XB6o
// truchet tiles rotate

// https://editor.p5js.org/jht9629-nyu/sketches/1CpIVSqp_d
// truchet tiles re-factored

// https://editor.p5js.org/jht9629-nyu/sketches/lBrb1cBQ7
// truchet tiles copy

// https://editor.p5js.org/ambikajo/sketches/cKu3Gn0Po
// truchet tiles by ambikajo
