/* ***************************************************
 * Funciones para manejar las acciones               *
 *****************************************************
*/

function detectarAcciones() {
  
  let posX, posY;
  let ancho = 150, alto = 50;
  
  if (escena == 0) {
    
    posX = width / 2 - 280; // Centra el botón horizontalmente
    posY = height / 2 - 50; // Centra el botón verticalmente
    
    if (mouseSobreRectangulo(posX, posY, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 1;
    }
  } else if (escena == 1) {
    
    posX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
    posY = height / 1.2; // Centra el botón verticalmente

    
    if (mouseSobreRectangulo(posX, posY, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 2;
    }   
    
  } else if (escena == 2) {
        
    // si se hizo click sobre el botón Continuar
    if(mouseSobreRectangulo(25, height / 1.2, alto, ancho)) {
      
      sonidoClickBoton.play();
      escena = 3;
    }
    
  } else if (escena == 3) {
    
    if (mouseSobreCirculo(125, 260, 30)) {
      sonidoPuerta.play();
      // Cambio el color de fondo del circulo 1
      colorRellenoC1 = colorRelleno2;
      colorSobreC1 = colorBorde2;
      colorBordeC1 = colorBorde2;
      escena = 4;
    } else {
      colorRellenoC1 = colorRelleno1;
      colorSobreC1 = colorBorde1;
      colorBordeC1 = colorBorde1;
    }
  
    if (mouseSobreCirculo(315, 260, 30)) {
      sonidoPuerta.play();
      // cambio el color de fondo del circulo 2
      colorRellenoC2 = colorRelleno2;
      colorSobreC2 = colorBorde2;
      colorBordeC2 = colorBorde2;
      escena = 5;
    } else {
      colorRellenoC2 = colorRelleno1;
      colorSobreC2 = colorBorde1;
      colorBordeC2 = colorBorde1; 
    }
  
    if (mouseSobreCirculo(510, 260, 30)) {
      sonidoPuerta.play();
      // cambio el color de fondo del circulo 3
      colorRellenoC3 = colorRelleno2;
      colorSobreC3 = colorBorde2;
      colorBordeC3 = colorBorde2;
      escena = 6;
    }  else {
      colorRellenoC3 = colorRelleno1;
      colorSobreC3 = colorBorde1;
      colorBordeC3 = colorBorde1; 
    }
    
  } else if (escena == 4 || escena == 5 || escena == 6) {
      
    // si se hizo click sobre el botón Continuar
    if(mouseSobreRectangulo(width/2-75, height / 1.2, alto, ancho)) {
     
      sonidoClickBoton.play();
      escena = 7;
    }
    
  } else if (escena == 7) {
    if (mouseSobreCirculo(235, 232, 16)) {
      SonidoPuertaMaravillosa.play();
      escena = 8;
    }
  
    if (mouseSobreCirculo(405, 232, 16)) {
      SonidoPuertaMaravillosa.play();
      escena = 9;
    }
    
  } else if (escena == 8) {
    if (mouseSobreCirculo(165, 310, 50)) {
      sonidoPuerta.play();
      escena = 11;
    }
  
    if (mouseSobreCirculo(475, 310, 50)) {
      sonidoPuerta.play();
      escena = 12;
    }
    
  } else if (escena == 9) {
    
    if (mouseSobreRectangulo(20, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 10;
    }
    
    if (mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 13;
    }
    
  } else if (escena == 10) {
       
    if (mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 14;
    }
    
  } else if (escena == 11) {
    
    if (mouseSobreRectangulo(20, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 15;
    }
    
    if (mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 8;
    }    
    
  } else if (escena == 12) { 
    
    if (mouseSobreRectangulo(20, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 15;
    }
    
    if (mouseSobreRectangulo(20, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 8;
    }
    
  } else if (escena == 13) {
    
    if (mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }
    
    if (mouseSobreRectangulo(480, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 17;
    }
    
  } else if (escena == 14) {
    
    // Primer boton
    if (mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 16;
    }
    
    if (mouseSobreRectangulo(480, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 10;
    }
    
  } else if (escena == 15) {
    
    if (mouseSobreRectangulo(480, 30, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }
    
    if (mouseSobreRectangulo(480, 120, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 17;
    }
    
  } else if (escena == 16) {
    
    if (mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }
    
    if (mouseSobreRectangulo(480, 100, alto, ancho)) {
      sonidoClickBoton.play();
      escena = 17;
    }
  } else if (escena == 17) {
    
    if (mouseSobreRectangulo(480, 20, alto, ancho)) {
      sonidoClickBoton.play();
      inicializarVariables();
      escena = 0;
    }    
  }
}
