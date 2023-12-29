// https://editor.p5js.org/jht9629-gmail/sketches/3IubAIXOX
// mouse rect

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  createA('../ellipse','next')
}

function draw() {
  background(220,5);
  noStroke()
  fill(mouseX,0,mouseY)
  rect(width/2-mouseX/2,height/2-mouseY/2,mouseX, mouseY)
}