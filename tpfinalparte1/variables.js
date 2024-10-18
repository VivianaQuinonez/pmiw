/* ***************************************************
 * Variables generales para todo el proyecto         *
 *****************************************************
 * Se cargan antes porque en el index.html           * 
 * se incluye el archivo variables.js inmediatamente *
 * después de la librería p5.js                      *
 *****************************************************
*/

// Ancho y alto del canvas
let width = 640, height = 480;


// Textos
let misTextos


// Sonidos
let sonidoClickBoton;
let sonidoPuerta;


// Variables para definir la escena a mostrar
let escena = 0;


// Para controlar el texto que se muestra en el diálogo estilo máquina de escribir
let currentIndex = 0; // Índice de caracteres mostrados
let displayedText = "";


// Variables para el botón de inicio
let botonX, botonY, botonAncho, botonAlto;
let botonPresionado = false;


let mostrar = false;
let tiempoInicio;

// Variables de estado para los botones
// Cada elemento representa a cada pantalla. Si hay más de un botón,
// habrá un arreglo interior con la cantidad de elementos por botón.
let botonesVisibles = [];


// Estados para escena obstaculos
let obstaculosFinImprimir, obstaculosPosiciones, obstaculosItems;
let estadosEscenaObstaculos = [];


// Estados escena pergamino
let pergaminoFinEscribir;


// Estados escena tres puertas
let tresPuertasFinEscribir;


// Estados escenas comunes pantallas 4, 5, 6
let selvaFinImprimir, selvaPosiciones, selvaItems;
let antartidaFinImprimir, antartidaPosiciones, antartidaItems;
let desiertoFinImprimir, desiertoPosiciones, desiertoItems;
let estadosEscenasComunes = [];


// Función para devolver un arreglo con posiciones aleatorias para objetos:
// Devuelve un arreglo de 2 dimensiones, en las posiciones 0, 1, 2, 3 posee
// un arreglo, que a su vez en sus posiciones 0 y 1 guarda dos números
// aleatorios.
function generarPosicionesObjetos() { 
  return  [
    [random(190, 521), random(90, 410)],
    [random(190, 521), random(90, 410)],
    [random(190, 521), random(90, 410)],
    [random(190, 521), random(90, 410)]
  ];
}


// función para inicializar las variables al comienzo o reinicio
// (para ser llamado dentro de setup o al reiniciar la partida)
function inicializarVariables() {
  console.log("SE INICIALIZARON LAS VARIABLES");
  logoAncho = logoImage.width * logoEscala;
  logoAlto = logoImage.height * logoEscala;
  
  // Estado inicial de los botones
  botonesVisibles = [
    false,   // pantalla 0
    false,   // pantalla 1
    false,   // pantalla 2
    true,   // pantalla 3
    false,  // pantalla 4
    false,  // pantalla 5
    false,  // pantalla 6
    true,    // pantalla 7
    true,    // pantalla 8
    [false, false],  // pantalla 9, dos botones
    false,   // pantalla 10
    [false, false],  // pantalla 11
    [false, false],  // pantalla 12
    [false, false],  // pantalla 13
    [false, false],  // pantalla 14
    [false, false],  // pantalla 15
    [false, false],  // pantalla 16
    true,    // pantalla 17 
  ];
  
  // Posición y dimensiones del botón
  botonX = width / 2 - 280; // Centra el botón horizontalmente
  botonY = height / 2 - 50; // Centra el botón verticalmente
  botonAncho = 150;
  botonAlto = 50;
  
  tiempoInicio = millis(); // Guarda el tiempo en que empieza el programa
     
  pergaminoFinEscribir = false;
  tresPuertasFinEscribir = false;
      
  // Data para escenas comunes
  selvaFinImprimir = false;
  selvaPosiciones = generarPosicionesObjetos();
  selvaItems = [false, false, false, false];
  
  antartidaFinImprimir = false;
  antartidaPosiciones = generarPosicionesObjetos();
  antartidaItems = [false, false, false, false];
  
  desiertoFinImprimir = false;
  desiertoPosiciones = generarPosicionesObjetos();
  desiertoItems = [false, false, false, false];
  
  // "Empaqueto" las variables anteriores de las escenas comunes en
  // un arreglo para mandar toda la data junta y manejarla más fácilmente.
  estadosEscenasComunes = [
    [selvaFinImprimir, selvaPosiciones, selvaItems],
    [antartidaFinImprimir, antartidaPosiciones, antartidaItems],
    [desiertoFinImprimir, desiertoPosiciones, desiertoItems]  
  ]
   
      
  //estado inicial de los objetos a juntar sin colorcito de texto en pergamino
  // Almaceno el estado de cada objeto clickeable en paisaje llano
  obstaculosItems = [false, false, false, false];
  
  
  // la variable para el estado del texto de obstaculos pantalla 3
  obstaculosFinImprimir = false;


  // Defino el color y over inicial de los 4 obstaculos del paisaje llano:
  // Defino un arreglo de dos dimensiones, en las posiciones 0, 1, 2, y 3 
  // contiene un arreglo, que en sus posiciones 0 y 1 contiene dos colores.
  obstaculosColores = [
    // --Color de relleno--       -- color de over --
    [color(128, 115, 125, 25), color(227, 214, 195, 25)],
    [color(128, 115, 125, 20), color(227, 214, 195, 25)],
    [color(128, 115, 125, 25), color(227, 214, 195, 25)],
    [color(128, 115, 125, 25), color(227, 214, 195, 25)],
  ];
  
  
  // Genero posiciones aleatorias para los objetos de paisaje llano:
  // Defino un arreglo de dos dimensiones, que en sus posiciones 0, 1, 2 y 3
  // contiene a su vez otro arreglo, que en sus posiciones 0, 1 y 2 contiene
  // Valores aleatorios para la posición x, posición y, y tamaño de radio.
  obstaculosPosiciones = [
    [random(25, 616), random(310, 421), random(15, 21)],
    [random(25, 616), random(310, 421), random(15, 21)],
    [random(25, 616), random(310, 421), random(15, 21)],
    [random(25, 616), random(310, 421), random(15, 21)],
  ];
  
  // "Empaqueto" las variables anteriores en un vector para mandar toda la
  // info junta de la escena y manejarla más fácilmente.
  estadosEscenaObstaculos = [
    obstaculosFinImprimir, obstaculosPosiciones, obstaculosItems, obstaculosColores
  ];
}
