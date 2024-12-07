/*
COMISION 5
VIVIANA QUIÑONEZ LUGONES LEG 50880/9 y SABRINA QUIÑONEZ LEG 120357/6
ENLACE YOUTUBE: https://www.youtube.com/watch?v=9cjMI_y3zNs&ab_channel=vivianaqui%C3%B1onez
*/

// Sonidos
let sonidoClickBoton;
let sonidoAmbiental;
let sonidoGanar;
let sonidoPerder;

// Variables para definir la escena a mostrar
let escena = 0;

// Arreglo con los nombres de las imagenes
let backgroundNames = [
  'data/PANTALLA_0.png',
  'data/PANTALLA_1.jpg',
  'data/PANTALLA_2.png',
  'data/PANTALLA_3.png',
]

// Arreglo para las imágenes cargadas en memoria
let backgroundImages = [];

// Imágenes
let laraSpriteName = 'data/spritePersonaje.png';
let laraSprite;
let talismanSpriteName = 'data/talisman.png';
let talismanSprite;

// Textos
let textos = [];

// Objetos (de clases)
let principal;


function preload() {
  // Precargamos los textos
  textos = loadStrings('data/TextosTombRaider.txt');
   
  // Precargamos los sonidos
  soundFormats('mp3');
  sonidoClickBoton = loadSound('data/ui-click-43196.mp3');
  sonidoAmbiental = loadSound('data/liberation-memorial-212171.mp3');
  sonidoGanar = loadSound('data/juegoGanar.mp3');
  sonidoPerder = loadSound('data/juegoPerder.mp3');
  sonidoGanar.setLoop(false);
  sonidoPerder.setLoop(false);
   
  // Precargamos las imágenes de fondo, sprites, etc
  // Hago un ciclo for por la cantidad de elementos de backgroundNames
  for (let i = 0; i < backgroundNames.length; i++) {
    backgroundImages[i] = loadImage(backgroundNames[i]); 
  }
  
  laraSprite = loadImage(laraSpriteName);
  talismanSprite = loadImage(talismanSpriteName);
}


function setup() {
  createCanvas (640,480);
  principal = new Principal();
  
}

function draw() {
  background(200,200,120);
  principal.mostrarPantalla();
}

function mouseClicked() {
  principal.chequearClicks(); 
 
}
