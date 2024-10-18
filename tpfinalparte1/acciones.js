/* ***************************************************
 * Funciones para manejar las acciones               *
 *****************************************************
*/

function detectarAcciones() {
  
  let posX, posY, ancho, alto;
  
  if (escena == 0) {
    
    posX = width / 2 - 280; // Centra el botón horizontalmente
    posY = height / 2 - 50; // Centra el botón verticalmente
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena] && mouseSobreRectangulo(posX, posY, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 1;
    }
  } else if (escena == 1) {
    
    ancho = 150;
    posX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
    posY = height / 1.2; // Centra el botón verticalmente
    alto = 50;
    
    if (botonesVisibles[escena] && mouseSobreRectangulo(posX, posY, alto, ancho)) {
      sonidoClickBoton.play();
      currentIndex = 0;
      displayedText = "";
      escena = 2;
    }   
    
  } else if (escena == 2) {
    ancho = 150;
    alto = 50;
    
    // Cambio el color de cada botón circular si se le hizo click encima 
    for (let i = 0; i < 4; i++) {
      // Cambio el color de cada botón circular si se le hizo click encima 
      if (mouseSobreCirculo(
        estadosEscenaObstaculos[1][i][0], // pos x
        estadosEscenaObstaculos[1][i][1], // pos y
        estadosEscenaObstaculos[1][i][2]  // radio
      )) {
        estadosEscenaObstaculos[3][i] = [color(179, 168, 177), color(237, 230, 236)];
        estadosEscenaObstaculos[2][i] = true;
      } 
    }
    
    // si se hizo click sobre el botón Continuar
    if(botonesVisibles[escena] && mouseSobreRectangulo(25, height / 1.2, alto, ancho)) {
      
      sonidoClickBoton.play();
      currentIndex = 0;
      displayedText = "";
      escena = 3;
    }
    
  } else if (escena == 3) {
    if (mouseSobreCirculo(125, 260, 30)) {
      sonidoPuerta.play();
      currentIndex = 0;
      displayedText = "";
      escena = 4;
    }
  
    if (mouseSobreCirculo(315, 260, 30)) {
      sonidoPuerta.play();
      currentIndex = 0;
      displayedText = "";
      escena = 5;
    }
  
    if (mouseSobreCirculo(510, 260, 30)) {
      sonidoPuerta.play();
      currentIndex = 0;
      displayedText = "";
      escena = 6;
    }  
    
  } else if (escena == 4 || escena == 5 || escena == 6) {
    ancho = 150;
    alto = 50;
    
    let indice;
    if (escena == 4) {
      indice = 0;      
    } else if (escena == 5) {
      indice = 1;
    } else if (escena == 6) {
      indice = 2;
    }
    for (let i = 0; i < 4; i++) {
      if (mouseSobreCirculo(estadosEscenasComunes[indice][1][i][0] + 30, estadosEscenasComunes[indice][1][i][1] + 30, 40)) {
        // items
        estadosEscenasComunes[indice][2][i] = true;
      } 
      
    }
    
    // si se hizo click sobre el botón Continuar
    if(botonesVisibles[escena] && mouseSobreRectangulo(width/2-75, height / 1.2, alto, ancho)) {
     
      sonidoClickBoton.play();
      currentIndex = 0;
      displayedText = "";
      escena = 7;
    }
    
  } else if (escena == 7) {
    if (mouseSobreCirculo(235, 232, 16)) {
      SonidoPuertaMaravillosa.play();
      currentIndex = 0;
      displayedText = "";
      escena = 8;
    }
  
    if (mouseSobreCirculo(405, 232, 16)) {
      SonidoPuertaMaravillosa.play();
      currentIndex = 0;
      displayedText = "";
      escena = 9;
    }
    
  } else if (escena == 8) {
    if (mouseSobreCirculo(165, 310, 50)) {
      sonidoPuerta.play();
      currentIndex = 0;
      displayedText = "";
      escena = 11;
    }
  
    if (mouseSobreCirculo(475, 310, 50)) {
      sonidoPuerta.play();
      currentIndex = 0;
      displayedText = "";
      escena = 12;
    }
    
  } else if (escena == 9) {
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena][0] && mouseSobreRectangulo(20, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 10;
    }
    
    if (botonesVisibles[escena][1] && mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 13;
    }
    
  } else if (escena == 10) {
    
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena] && mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 14;
    }
    
  } else if (escena == 11) {
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena][0] && mouseSobreRectangulo(20, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 15;
    }
    
    if (botonesVisibles[escena][1] && mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 8;
    }
    
    
    
  } else if (escena == 12) { 
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena][0] && mouseSobreRectangulo(20, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 15;
    }
    
    if (botonesVisibles[escena][1] && mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 8;
    }
    
  } else if (escena == 13) {
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena][0] && mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }
    
    if (botonesVisibles[escena][1] && mouseSobreRectangulo(480, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 17;
    }
    
  } else if (escena == 14) {
    ancho = 150;
    alto = 50;
    
    // Primer boton
    if (botonesVisibles[escena][0] && mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 16;
    }
    
    if (botonesVisibles[escena][1] && mouseSobreRectangulo(480, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 10;
    }
    
  } else if (escena == 15) {
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena][0] && mouseSobreRectangulo(480, 30, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }
    
    if (botonesVisibles[escena][1] && mouseSobreRectangulo(480, 120, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 17;
    }
    
  } else if (escena == 16) {
    
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena][0] && mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }
    
    if (botonesVisibles[escena][1] && mouseSobreRectangulo(480, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 17;
    }
  } else if (escena == 17) {
    
    ancho = 150;
    alto = 50;
    
    if (botonesVisibles[escena] && mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }
    
  }
}
