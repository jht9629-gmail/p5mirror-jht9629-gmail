// https://editor.p5js.org/jht9629-gmail/sketches/eYD39ApZp
// Youtube Player No API copy

// https://editor.p5js.org/jsy360/sketches/HJLiO_s1f

let base_url = "https://www.youtube.com/embed/psL_5RIBqnY?start=0";
// "https://www.youtube.com/embed/psL_5RIBqnY?autoplay=1&start=153&end=160";
let base_url1 = "https://www.youtube.com/embed/5IrAg8plb1o";
// "https://www.youtube.com/embed/5IrAg8plb1o?&start=142&end=152&autoplay=1";
var player;

function setup() {
  createCanvas(200, 200);
  background(0);
  //createVideo(base_url);
  player = select("#yt_video");

  player.attribute("src", base_url);
  player.position(0, 0);
}

function draw() {}

function mousePressed() {
  var iframes = document.querySelectorAll("iframe");
  //for (var i = 0; i < iframes.length; i++) {
  iframes[0].parentNode.removeChild(iframes[0]);
  //}
  //got code here: https://stackoverflow.com/questions/15103552/remove-iframe-with-javascript
  select("#yt_video2").attribute("src", base_url1);
  select("#yt_video2").position(0, 0);
}
