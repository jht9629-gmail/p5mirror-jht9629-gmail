// https://editor.p5js.org/jht9629-gmail/sketches/fiaNTD9Nj
// mouse ellipse

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  createA('../rect','next')
}

function draw() {
  background(220,5);
  noStroke()
  fill(mouseX,mouseY,0)
  ellipse(width/2,height/2,mouseX, mouseY)
}