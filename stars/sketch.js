let CX = 0, CY = 0;
let NP = 480, PI = Math.PI;
let M = 3, N = 4, K = 1;
let X, Y, L, A;

function setup() {
  INIT2(800);

  X = Array(M);
  Y = Array(M);
  L = Array(N - 1);
  A = Array(N - 1);
}

function draw() {
  background(255);
  //randomColor = color(random (255), random(255), random(255));
  fill(color(3, 157, 252)); 

  CX = mouseX;
  CY = mouseY;

  drawFractal();  
  TRACE2();       
}

function drawFractal() {
  X[0] = CX + 0;
  X[1] = CX + NP;
  X[2] = CX + NP * 0.5;
  X[3] = CX + 0;

  Y[0] = CY + sqrt(3) / 2 * NP;
  Y[1] = Y[0];
  Y[2] = CY + 0;
  Y[3] = Y[0];

  L[0] = 1 / 3;
  L[1] = L[0];
  L[2] = L[0];
  L[3] = L[0];

  A[0] = 0;
  A[1] = PI / 3;
  A[2] = -A[1];
  A[3] = 0;

  for (let II = 0; II <= M - 1; II++) {
    let XD = X[II], YD = Y[II], XA = X[II + 1], YA = Y[II + 1];
    let X0 = XD, Y0 = YD;
    let X1 = int(X0), Y1 = int(Y0);
    LPRINT(`M${X1},${Y1}`);
    let A0, L0;

    if (XA != XD)
      A0 = atan((YA - YD) / (XA - XD));
    else
      A0 = PI / 2 * SGN(YA - YD);

    if ((XA - XD) < 0)
      A0 += PI;

    L0 = sqrt(pow(XA - XD, 2) + pow(YA - YD, 2));

    for (let I = 0; I <= pow(N, K) - 1; I++) {
      let LL = L0, AA = A0, T1 = I;

      if (K == 0) {
        X0 += LL * cos(AA); X1 = int(X0);
        Y0 += LL * sin(AA); Y1 = int(Y0);
        LPRINT(`D${X1},${Y1}`);
      } else {
        for (let J = K - 1; J >= 0; J--) {
          let R = pow(N, J); let T2 = int(T1 / R);
          AA += A[T2]; LL *= L[T2];
          T1 -= T2 * R;
        }
        X0 += LL * cos(AA); X1 = int(X0);
        Y0 += LL * sin(AA); Y1 = int(Y0);
        LPRINT(`D${X1},${Y1}`);
      }
    }
  }
}
