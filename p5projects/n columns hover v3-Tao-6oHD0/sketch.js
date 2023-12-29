// https://editor.p5js.org/jht9629-gmail/sketches/Tao-6oHD0
// n columns hover v3
// over hover n columns flips between white and red

let aw;
let clr = [];
let wasIn = [];
let n = 10; // TRY: 2 ... 10

function setup() {
  createCanvas(400, 400);
  aw = width / n;
  // col1 = 255;
  for (let index = 0; index < n; index++) {
    clr[index] = 255;
    wasIn[index] = false;
  }
}

function draw() {
  background(255);

  let x = 0;
  for (let index = 0; index < n; index++) {
    let isIn = mouseX > x && mouseX < x+aw;
    if (isIn) {
      if (wasIn[index]) {
        // still in column
      } else {
        // mouse moving into first colum
        // flip color
        clr[index] = clr[index] == "red" ? 255 : "red";
        // if (clr == 'red') clr = 255;
        // else clr = 'red'
      }
      // rect(0,0,aw,height)
    }
    wasIn[index] = isIn;

    fill(clr[index]);
    rect(x, 0, aw, height);
    x += aw;
  }
}

// https://editor.p5js.org/jht9629-gmail/sketches/-cX-O-25n
// three columns hover v2

// Change the behavior so that when you mouse over a column, you turn it red and it stays red until the next time you mouse over it again, at which point the column goes back to white. (Just get this working for one column.)

// https://editor.p5js.org/jht9629-gmail/sketches/hLi5Fdtxo
// three columns hover v1
