// Arreglo para almacenar las imágenes cargadas.
let backgroundImages = [];


let backgroundNames = [
  'data/01_inicio.png',
  'data/PANTALLA_2.jpg',
  'data/PANTALLA3.png', 
  'data/PANTALLA_3B.jpg', 
  'data/PANTALLA_5.jpg',
];

// Objetos a encontrar
let elementosImages = [];
let objetosAEncontrar = [
  'data/objetoArcoYFlecha.png',
  'data/objetoMachete.png',
  'data/objetoPistola.png',
  'data/objetoSoga.png',
];

// Variables para setear el logo
let logoImage;
let logoEscala = 0.5;
let logoAlto, logoAncho;
let logoTransparencia = 0;
let velocidadFade = 2;
