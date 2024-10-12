/* ***************************************************
 * Variables generales para todo el proyecto
 *****************************************************
 * Se cargan antes porque en el index.html 
 * se incluye el archivo variables.js inmediatamente
 * después de la librería p5.js
 *****************************************************
*/

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


// función para inicializar las variables al comienzo o reinicio
// (para ser llamado dentro de setup)
function inicializarVariables() {
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
