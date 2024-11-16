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


// Sonidos
let sonidoClickBoton, sonidoPuerta, SonidoPuertaMaravillosa;


// Variables para definir la escena a mostrar
let escena = 0;


let backgroundImages = [];
  

// Variables para setear el logo
let logoImage;
let logoEscala = 0.5;
let logoAlto, logoAncho;


// Algunos colores
let colorRelleno1, colorSobre1, colorBorde1;
let colorRelleno2, colorSobre2, colorBorde2;

// Colores para algunos botoncitos
let colorRellenoC1, colorSobreC1, colorBordeC1;
let colorRellenoC2, colorSobreC2, colorBordeC2;
let colorRellenoC3, colorSobreC3, colorBordeC3;


// Variables para el botón de inicio
let botonX, botonY, botonAncho, botonAlto;
let botonPresionado = false;


// Estados escenas comunes pantallas 4, 5, 6
let selvaFinImprimir, selvaPosiciones, selvaItems;
let antartidaFinImprimir, antartidaPosiciones, antartidaItems;
let desiertoFinImprimir, desiertoPosiciones, desiertoItems;
let estadosEscenasComunes = [];


function inicializarVariables() {

  logoAncho = logoImage.width * logoEscala;
  logoAlto = logoImage.height * logoEscala;
  
  // Para pantalla 3
  colorRelleno1 = color(222, 125, 46, 100);
  colorSobre1 =  color(227, 214, 195, 100);
  colorBorde1 = color(0, 0, 0, 0);
  
  colorRelleno2 = color(128, 115, 125, 25);
  colorSobre2 = color(227, 214, 195, 25);
  colorBorde2 = color(0, 0, 0, 0);
  
  colorRellenoC1 = colorRelleno1;
  colorSobreC1 = colorSobre1;
  colorBordeC1 = colorBorde1;
  
  colorRellenoC2 = colorRelleno1;
  colorSobreC2 = colorSobre1;
  colorBordeC2 = colorBorde1;
  
  colorRellenoC3 = colorRelleno1;
  colorSobreC3 = colorSobre1;
  colorBordeC3 = colorBorde1;

  
  // Posición y dimensiones del botón
  botonX = width / 2 - 280; // Centra el botón horizontalmente
  botonY = height / 2 - 50; // Centra el botón verticalmente
  botonAncho = 150;
  botonAlto = 50;  

}
