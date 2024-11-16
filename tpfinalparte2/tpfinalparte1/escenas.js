/**********************************************
 * Función pantalla1Boton                     *
 **********************************************
 * Dibuja los elementos de una pantalla       *
 * con un mensaje y un botón                  *
 **********************************************
*/
function pantalla1BotonR(dlgTexto, dlgAlto, dlgAncho, dlgX, dlgY, dlgColor,
  btnTexto, btnX, btnY, btnRelleno, btnSobre, btnBorde, btnAlto, btnAncho, btnRadio
) {  
  
  // Dialogo
  dialogoEstatico(dlgTexto, dlgAlto, dlgAncho, dlgX, dlgY, dlgColor);
  
  // Boton 
  botonRectangular(btnTexto, btnX, btnY, btnRelleno, btnSobre, btnBorde, btnAlto, btnAncho, btnRadio);
}

/**********************************************
 * Función pantalla2BotonesRectangulares      *
 **********************************************
 * Dibuja los elementos de una pantalla       *
 * con un mensaje y dos botones rectangulares *
 **********************************************
*/
function pantalla2BotonesR(dlgTexto, dlgAlto, dlgAncho, dlgX, dlgY, dlgColor,
  btnTexto1, btnTexto2, btn1X, btn1Y, btn2X, btn2Y, btnRelleno, btnSobre, btnBorde, btnAlto, btnAncho, btnRadio
) {
  // Dialogo
  dialogoEstatico(dlgTexto, dlgAlto, dlgAncho, dlgX, dlgY, dlgColor);
  
  // Botones
  botonRectangular(btnTexto1, btn1X, btn1Y, btnRelleno, btnSobre, btnBorde, btnAlto, btnAncho, btnRadio);
  botonRectangular(btnTexto2, btn2X, btn2Y, btnRelleno, btnSobre, btnBorde, btnAlto, btnAncho, btnRadio);
}




/**********************************************
 * Función dispararEscenas                    *
 **********************************************
 * Recibe un Nro de escena y dibuja           *
 * la escena correspondiente                  *
 **********************************************
*/
function dispararEscenas (numeroPantalla) {
  
  let colorFondo = color(255,255,255,200); 
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
  let colorBoton = color(255, 255, 255, 0);
    
    
  // Fondo de pantalla. Setea según corresponde
  image(backgroundImages[numeroPantalla], 0, 0); 

  if (numeroPantalla == 0) {
    pantalla0 (numeroPantalla);  
    
  } else if (numeroPantalla == 1) {  
    pantalla1BotonR(misTextos[0], 350, 450, 115, 100,color(255,255,255,0),
      "Continuar", width / 2 - (botonAncho / 2), height / 1.2, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 2) {   
    pantalla1BotonR(misTextos[1], 150, 240, 360, 60, colorFondo,
      "Continuar", 25, height / 1.2, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
       
  } else if (numeroPantalla == 3) {
    pantalla3 (numeroPantalla); 
    
  } else if (numeroPantalla == 4 || numeroPantalla == 5 || numeroPantalla == 6) {
    pantalla1BotonR(misTextos[3], 59, 550, 42, 30, colorFondo, "Continuar", width/2-75, height / 1.2, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    
  } else if (numeroPantalla == 7) {
    pantalla7 (numeroPantalla);  
    
  } else if (numeroPantalla == 8) {
    pantalla8 (numeroPantalla); 
    
  } else if (numeroPantalla == 9) {
    pantalla2BotonesR(misTextos[6], 59, 550, 42, 390, colorFondo,
      "No corre las ramas", "Corre las ramas", 20, 20, 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 10) {
    pantalla1BotonR(misTextos[7], 59, 550, 42, 390, colorFondo, 
      "Escalar montaña", 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 11) {
    pantalla2BotonesR(misTextos[10], 59, 550, 42, 390, colorFondo,
      "Está el talisman", "No está el talisman", 20, 20, 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
          
  } else if (numeroPantalla == 12) {//
    pantalla2BotonesR(misTextos[10], 59, 550, 42, 390, colorFondo,
      "Está el talisman", "No está el talisman", 20, 20, 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 13) {
    pantalla2BotonesR(misTextos[9], 59, 550, 42, 390, colorFondo,
      "Reiniciar juego", "Créditos", 480, 20, 480, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 14) {
    pantalla2BotonesR(misTextos[10], 59, 550, 42, 390, colorFondo,
      "Encuentra", "No hay llave", 480, 20, 480, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 15) {
    pantalla2BotonesR(misTextos[10], 59, 550, 42, 390, colorFondo, 
      "Iniciar de nuevo", "Créditos", 480, 30, 480, 120, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 16) {
    pantalla2BotonesR(misTextos[12], 80, 550, 42, 390, colorFondo, 
      "Iniciar de nuevo", "Créditos", 480, 30, 480, 120, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  } else if (numeroPantalla == 17) {
    //pantalla17 (numeroPantalla);
    pantalla1BotonR(misTextos[13], 30, 510, 60, 430, colorFondo, 
      "Iniciar de nuevo", 480, 30, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
      
  }
}


/**********************************************
 * Función pantalla0                          *
 **********************************************
 * Dibuja los elementos de la pantalla0       *
 **********************************************
*/
function pantalla0 () {
   // Posición y dimensiones del botón
  let posX = width / 2 - 280; // Centra el botón horizontalmente
  let posY = height / 2 - 50; // Centra el botón verticalmente
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);

  
  // Logo de la aventura
  image(logoImage, 10, 290, logoAncho, logoAlto);
    
  botonRectangular("Iniciar Juego", posX, posY, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
}



/**********************************************
 * Función pantalla3                          *
 **********************************************
 * Dibuja los elementos de la pantalla3       *
 **********************************************
*/
function pantalla3 () {
  
  let colorRelleno = color(222, 125, 46, 100);
  let colorSobre = color(227, 214, 195, 100);
  let colorBorde = color(0, 0, 0, 0);
  let colorFondo = color(255,255,255,200);  
  
  dialogoEstatico(misTextos[2], 59, 550, 42, 400, colorFondo);
    
  botonCircular(125, 260, colorRellenoC1, colorSobreC1, colorBordeC1, 30)
  botonCircular(315, 260, colorRellenoC2, colorSobreC2, colorBordeC2, 30)
  botonCircular(510, 260, colorRellenoC3, colorSobreC3, colorBordeC3, 30)
}


/**********************************************
 * Función pantalla7                          *
 **********************************************
 * Dibuja los elementos de la pantalla7       *
 **********************************************
*/
function pantalla7 (numeroPantalla) {
 
  let colorRelleno = color(222, 125, 46, 0);
  let colorBorde = color(0, 0, 0, 0);
  let colorFondo = color(255,255,255,200);  
  
  //  Fondo
  image(backgroundImages[numeroPantalla], 0, 0);

  dialogoEstatico(misTextos[4], 59, 550, 42, 27, colorFondo);
    
  botonCircular(235, 232, colorRelleno, color(0, 76, 158, 180), colorBorde, 16)
  botonCircular(405, 232, colorRelleno, color(247, 123, 0, 180), colorBorde, 16)
  
}


/**********************************************
 * Función pantalla8                          *
 **********************************************
 * Dibuja los elementos de la pantalla8       *
 **********************************************
*/
function pantalla8 (numeroPantalla) {
  
  let colorRelleno = color(222, 125, 46, 40);
  let colorSobre = color(227, 214, 195, 40);
  let colorBorde = color(0, 0, 0, 0);
  let colorFondo = color(255,255,255,200);  
  
  // Fondo
  image(backgroundImages[numeroPantalla], 0, 0);

  dialogoEstatico(misTextos[5], 59, 550, 42, 50, colorFondo);
    
  botonCircular(165, 310, colorRelleno, colorSobre, colorBorde, 50)
  botonCircular(475, 310, colorRelleno, colorSobre, colorBorde, 50)
} 
