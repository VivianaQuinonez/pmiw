function preload() {
  // Precargo los textos
  misTextos = loadStrings('data/TextosTombRaider.txt');
  
  // Sonidos
  soundFormats('mp3');
  sonidoClickBoton = loadSound('data/ui-click-43196.mp3');
  sonidoPuerta = loadSound('data/door-97917.mp3');
  SonidoPuertaMaravillosa = loadSound('data/fairy-dust-shimmer-1-175611.mp3');
  
  // Precargo las imágenes de fondo. (Ver pestaña utils)
  precargarImagenesFondo()
  
  // Precargo las imágenes de los objetos a encontrar (Ver pestaña utils)
  precargarObjetosAEncontrar()

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


// Detecta si el botón fue presionado
function mousePressed() {
  
}

function mouseClicked() {
   detectarAcciones(); 
}
