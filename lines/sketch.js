let DESSIN = "";
let AA = 0, RR;
let NP = 480, PI = Math.PI;
let X, Y;
let K = 1, AN = 6 * PI / 7, RA = 0.98;

function setup() {
  INIT();
  RR = 0.8 * NP;
  X = width / 2;
  Y = height / 2;
  background(0);
  stroke(255);
}

function draw() {
  if (frameCount % 10 === 0) {
    X = mouseX + RR * cos(AA);
    Y = mouseY + RR * sin(AA);
    line(width / 2, height / 2, X, Y);
    AA += AN;
    RR *= RA;
  }
}
