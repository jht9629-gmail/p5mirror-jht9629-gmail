// https://editor.p5js.org/jht9629-gmail/sketches/hLi5Fdtxo
// three columns hover v1
// hover over three colums to see red

let aw;

function setup() {
  createCanvas(400, 400);
  aw = width / 3;
}

function draw() {
  background(255);
  
  let mx = mouseX;
  
  fill('red');
  if (mx > 0 && mx < aw) {
    rect(0,0,aw,height)
  }
  if (mx > aw && mx < aw * 2) {
    rect(aw,0,aw,height)
  }
  if (mx > aw*2 && mx < aw*3) {
    rect(aw*2,0,aw,height)
  }
}