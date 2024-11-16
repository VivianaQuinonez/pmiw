//comisión 5
// Sabrina Quiñonez, Viviana Quiñonez Lugones 
// ENLACE YOUTUBE: https://www.youtube.com/watch?v=_11F8D2yF5M&ab_channel=vivianaqui%C3%B1onez


function preload() {
  
  // Precarga los textos
  misTextos = loadStrings('data/TextosTombRaider.txt');
  
  // Sonidos
  soundFormats('mp3');
  sonidoClickBoton = loadSound('data/ui-click-43196.mp3');
  sonidoPuerta = loadSound('data/door-97917.mp3');
  SonidoPuertaMaravillosa = loadSound('data/fairy-dust-shimmer-1-175611.mp3');
  
  // Precarga de las imágenes de fondo. (Ver pestaña utils)
  precargarImagenesFondo()
  

  // Imagen del logo de la primer pantalla
  logoImage = loadImage('data/02_logo.png');
}


function setup() {
  createCanvas(width, height);
  background(255);
  inicializarVariables(); 
}


function draw() {  
  dispararEscenas(escena);
}


function mouseClicked() {
   detectarAcciones(); 
}
