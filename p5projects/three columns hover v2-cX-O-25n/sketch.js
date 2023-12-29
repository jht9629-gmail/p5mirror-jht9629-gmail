// https://editor.p5js.org/jht9629-gmail/sketches/-cX-O-25n
// three columns hover v2

// Change the behavior so that when you mouse over a column, you turn it red and it stays red until the next time you mouse over it again, at which point the column goes back to white. (Just get this working for one column.)

let aw;
let clr = 255;
let wasIn = false;

function setup() {
  createCanvas(400, 400);
  aw = width / 3;
}

function draw() {
  background(255);
  
  let isIn1 = mouseX > 0 && mouseX < aw
  if (isIn1) {
    if (wasIn) {
      // still in first column
    }
    else {
      // mouse moving into first colum
      // flip color
      clr = (clr == 'red') ? 255 : 'red'
      // if (clr == 'red') clr = 255;
      // else ckr = 'red'
    }
    // rect(0,0,aw,height)
  }
  wasIn = isIn1;
  
  fill(clr);
  rect(0,0,aw,height)

  // Lets not get distracted by other columns
  // if (mx > aw && mx < aw * 2) {
  //   rect(aw,0,aw,height)
  // }
  // if (mx > aw*2 && mx < aw*3) {
  //   rect(aw*2,0,aw,height)
  // }
}

// https://editor.p5js.org/jht9629-gmail/sketches/hLi5Fdtxo
// three columns hover v1

