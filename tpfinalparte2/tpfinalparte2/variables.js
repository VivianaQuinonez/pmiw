/* ***************************************************
 * Variables generales para todo el proyecto         *
 *****************************************************
 * Se cargan antes porque en el index.html           * 
 * se incluye el archivo variables.js inmediatamente *
 * después de la librería p5.js                      *
 *****************************************************
*/

// Sonidos
let sonidoClickBoton;

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
