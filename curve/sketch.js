let DESSIN = "";
let NP = 480, PI = Math.PI;
let DX = NP / 2, DY = NP / 2;
let N = 2000;

function setup() {
  INIT({ svg: true });
  stroke_( "#000000" );
  noFill_();
  
  translate_(DX, DY);

  beginShape_();
  for (let t = 0; t < N; t++) {
    let a = 5, b = 4;
    let x = 200 * sin(a * t * 0.01 + PI / 2);
    let y = 200 * sin(b * t * 0.01);
    vertex_(x, y);
  }
  endShape_();
}
