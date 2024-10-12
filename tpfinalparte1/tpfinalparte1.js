let width = 640, height = 480;

// Variables para controlar las escenas
let escena = 0;
let estadosEscena = {};

let currentIndex = 0; // Índice de caracteres mostrados
let displayedText = "";


// Variables para el botón de inicio
let botonX, botonY, botonAncho, botonAlto;
let botonPresionado = false;



let mostrar = false;
let tiempoInicio;


function preload() {
  // Precargo las imágenes de fondo.
  for (let i = 0; i < backgroundNames.length; i++) {
     backgroundImages[i] = loadImage(backgroundNames[i]); 
  }
  
  for (let i = 0; i < objetosAEncontrar.length; i++) {
     elementosImages[i] = loadImage(objetosAEncontrar[i]); 
  }

  logoImage = loadImage('data/02_logo.png');
}


function setup() {
  createCanvas(width, height);
  background(255);
  
  logoAncho = logoImage.width * logoEscala;
  logoAlto = logoImage.height * logoEscala;
  
  // Posición y dimensiones del botón
  botonX = width / 2 - 280; // Centra el botón horizontalmente
  botonY = height / 2 - 50; // Centra el botón verticalmente
  botonAncho = 150;
  botonAlto = 50;
  
  tiempoInicio = millis(); // Guarda el tiempo en que empieza el programa
  
  estadosEscena.e1_pergamino = false;
  estadosEscena.tres_puertas = false;
  estadosEscena.selva = false;
  
  // Genero posiciones aleatorias para los objetos a recolectar en escena selva
  estadosEscena.selvaObj = [
    [random(190, 521), random(90, 410)],
    [random(190, 521), random(90, 410)],
    [random(190, 521), random(90, 410)],
    [random(190, 521), random(90, 410)],
  ];
  
  // En esta variable global almacenaré 4 botones generados automáticamente
  estadosEscena.selvaBtns = [];
  
  // la variable para el estado del texto de obstaculos pantalla 3
  estadosEscena.obstaculosMsj = false;

  // Defino el color y over inicial de los 4 obstaculos del paisaje llano
  estadosEscena.obstaculos = [
    // --Color de relleno--       -- color de over --
    [color(128, 115, 125, 25), color(227, 214, 195, 25)],
    [color(128, 115, 125, 20), color(227, 214, 195, 25)],
    [color(128, 115, 125, 25), color(227, 214, 195, 25)],
    [color(128, 115, 125, 25), color(227, 214, 195, 25)],
  ];
  
  // Almaceno el estado de cada objeto clickeable en paisaje llano
  estadosEscena.obstaculosBtns = [false, false, false, false];
  
  // Genero posiciones aleatorias para los objetos de paisaje llano
  estadosEscena.obstaculosObj = [
    [random(25, 616), random(310, 421), random(15, 21)],
    [random(25, 616), random(310, 421), random(15, 21)],
    [random(25, 616), random(310, 421), random(15, 21)],
    [random(25, 616), random(310, 421), random(15, 21)],
  ];
  

}


function draw() {
  let tiempoActual = millis();
  image(backgroundImages[escena], 0, 0);
  
  // Si han pasado más de 2 segundos
  if (tiempoActual - tiempoInicio > 2000 && !mostrar) {
    mostrar = true;
  }
  
  switch (escena) {
    case 0:
      escena0();
      break;
      
    case 1:
      escena1();
      break;
      
    case 2: 
      escena2();    
      break;
      
    case 3: 
      escena3();    
      break;
      
    case 4:
      escena4();
      break;
      
    default:
      break;    
    
  }
}


// Detecta si el botón fue presionado
function mousePressed() {
  /*
  if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
    botonPresionado = true; // Marca el botón como presionado
  }
  */
  
  /*
  // Botón de saltar intro escena 1
  if (mouseX > 245 && 
      mouseX < 395 &&
      mouseY > (height / 1.2) &&
      mouseY < ((height / 1.2) + 50)
  ) {
     currentIndex = 0;
     displayedText = "";
     escena = 2;
  }
  */
}
