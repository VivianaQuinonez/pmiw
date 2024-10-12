


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
  inicializarVariables(); 
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
    case 5: 
      escena5();
      break;
    case 6: 
      escena6();
      break;
    case 7:
      escena7();
      break;
    case 8:
      escena8();
      break;
    case 9:
      escena9();
      break;
    case 10:
      escena10;
      break;
    case 11:
      escena11();
      break;
    case 12:
      escena12();
      break;
    case 13:
      escena13();
      break;
    case 14:
      escena14();
      break;
    case 15:
      escena15();
      break;
      
    default:
      break;    
    
  }
}


// Detecta si el botón fue presionado
function mousePressed() {

}
