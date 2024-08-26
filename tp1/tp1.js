let img, BASE, alpha, desplazamiento, zoom;
let lila, amarillo, verde, rojo, azul, naranja;

function preload () {
 img = loadImage('data/crucestp3.jpg');  
}


function cuadrado( x, y, h, r, g, b, a) {
  noStroke();
  fill(r, g, b, a);
  rect(x, y, h, h);
}

function getColor ( i, j , desp, mc) {
  return mc[j % 15][(i + desp) % 10];
}


function setup() {
  createCanvas(800, 400);
  background(255);
  alpha = 0;
  desplazamiento = 6;
  zoom = 32.0; 
  
  BASE = width / zoom;
  
  lila = color(77, 39, 97);
  amarillo = color(246, 230, 1);
  verde = color(96, 138, 64);
  rojo = color(150, 52, 5);
  azul = color(79, 102, 206);
  naranja = color(200, 137, 2);
  
  matrizColores1 = [
  [azul, lila, verde, verde, verde, naranja, amarillo, rojo, rojo, rojo],
  [azul, azul, amarillo, verde, naranja, naranja, naranja, lila, rojo, azul],
  [azul, amarillo, amarillo, amarillo, rojo, naranja, lila, lila, lila, verde],
  [verde, naranja, amarillo, rojo, rojo, rojo, azul, lila, verde, verde],
  [naranja, naranja, naranja, lila, rojo, azul, azul, azul, amarillo, verde],
  [rojo, naranja, lila, lila, lila, verde, azul, amarillo, amarillo, amarillo],
  [rojo, rojo, azul, lila, verde, verde, verde, naranja, amarillo, rojo],
  [rojo, azul, azul, azul, amarillo, verde, naranja, naranja, naranja, lila],
  [lila, verde, azul, amarillo, amarillo, amarillo, rojo, naranja, lila, lila],
  [verde, verde, verde, naranja, amarillo, rojo, rojo, rojo, azul, lila],
  [amarillo, verde, naranja, naranja, naranja, lila, rojo, azul, azul, azul],
  [amarillo, amarillo, rojo, naranja, lila, lila, lila, verde, azul, amarillo],
  [amarillo, rojo, rojo, rojo, azul, lila, verde, verde, verde, naranja],
  [naranja, lila, rojo, azul, azul, azul, amarillo, verde, naranja, naranja],
  [lila, lila, lila, verde, azul, amarillo, amarillo, amarillo, rojo, naranja],
];
}

function draw() {
  background(255); // Asegurar que el fondo se limpie cada vez que se dibuje
  image(img, 0, 0, 400, 400);
  
  let x = 400;
  let y = 0;
 
  alpha = parseInt (map(mouseX, 0, width, 50, 255));
 
  BASE = width / zoom;
  
  for (let j = 0; j <= 23; j++) {
    for (let i = 0; i <= 30; i++) {
      let fondo = getColor( i, j, desplazamiento, matrizColores1); 
      let r = parseInt (red(fondo));
      let g = parseInt (green(fondo));
      let b = parseInt (blue(fondo));
      
      cuadrado(x, y, BASE, r, g, b, alpha);
      
      x += BASE;
    }
    
    x = 400;
    y += BASE;
  }
   
  push();
  fill(202,216,211);
  circle(width/4 + 2, height * 0.82  , 106);
  fill(0);
  circle(width/4, height * 0.82 , 100);
  fill(202,216,211);
  textSize(23);
  textAlign(CENTER, CENTER);
  text("Reiniciar", width/4, height * 0.82 );
  pop();
   
}

function keyPressed() {
  if (key >= '0' && key <= '9') {
    desplazamiento = key - '0'; 
  }

}

function mouseWheel(event) {
  let e = event.delta;
  let salto = 0.01 * e;
  
  zoom += salto; 
  
  if ((zoom + salto) <=16) {
    zoom = 16;
  } 
  
  if ((zoom + salto) >=48){
    zoom = 48;
  }
    
}

function mouseClicked() {
  if (dist(mouseX, mouseY, width/4, height * 0.82) < 50) {
    alpha = 0;
    desplazamiento = 6;
    zoom = 32.0; 
  }
}
