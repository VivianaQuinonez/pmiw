/*
COMISION 5
VIVIANA QUIÑONEZ LUGONES LEG 50880/9 y SABRINA QUIÑONEZ LEG 120357/6
ENLACE YOUTUBE: https://www.youtube.com/watch?v=9cjMI_y3zNs&ab_channel=vivianaqui%C3%B1onez
*/

let objJuego;

function preload() {
   // Precargamos los textos
   textos = loadStrings('data/TextosTombRaider.txt');
   
   // Precargamos los sonidos
   soundFormats('mp3');
   sonidoClickBoton = loadSound('data/ui-click-43196.mp3');
   sonidoAmbiental = loadSound('data/liberation-memorial-212171.mp3');
   
   // Precargamos las imágenes de fondo, sprites, etc
   precargarImagenes()  // Pestaña funciones
}


function setup() {
  createCanvas (640,480);
  objJuego = new Juego(10);
}

function draw() {
  background(200,200,120);
  objJuego.dibujar();
}

function mouseClicked() {
  // Gestionamos los eventos según la escena
  
  if (objJuego.obtenerNroEscena() == 0) {
    
    // Click en botón Iniciar juego
    if (objJuego.botones[0].clickeado()) {
      // Cambio la escena 
      objJuego.cambiarEscena(2);
      sonidoClickBoton.play();
      sonidoAmbiental.play();
    }
    
    // Click en botón Instrucciones
    if (objJuego.botones[1].clickeado()) {
      // Cambio la escena 
      objJuego.cambiarEscena(1);
      sonidoClickBoton.play();
    }
    
    // Click en botón Créditos
    if (objJuego.botones[2].clickeado()) {
      // Cambio la escena 
      objJuego.cambiarEscena(3);
      sonidoClickBoton.play();
    }
    
  } else if (objJuego.obtenerNroEscena() == 1) {
    if (objJuego.botones[3].clickeado()) {
       objJuego.cambiarEscena(2);
       sonidoClickBoton.play();
       sonidoAmbiental.play();
    }
    
  } else if (objJuego.obtenerNroEscena() == 2) {    // Escena jugable
    if (objJuego.botones[4].clickeado()) {
       objJuego.iniciar();
       sonidoClickBoton.play();
       sonidoAmbiental.stop();
    }
  } else if (objJuego.obtenerNroEscena() == 3) {    // Escena créditos
    if (objJuego.botones[5].clickeado()) {
      // Cambio la escena 
      objJuego.iniciar();
      sonidoClickBoton.play();
    }
  }
}
