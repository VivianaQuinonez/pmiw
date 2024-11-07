let objJuego;

function setup() {
  createCanvas (640,480);
  objJuego = new Juego(10);
}

function draw() {
  background(200,200,120);
  objJuego.dibujar();
}

function keyPressed (){
    objJuego.teclaPresionada(keyCode);
}
