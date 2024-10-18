/**********************************************
 * Función dispararEscenas                    *
 **********************************************
 * Recibe un Nro de escena y dibuja           *
 * la escena correspondiente                  *
 **********************************************
*/
function dispararEscenas (numeroPantalla) {
  
  // escenas llega con valores 0 al 17
  
  image(backgroundImages[numeroPantalla], 0, 0);
  
  if (numeroPantalla == 0) {
    pantalla0 ();    
  } else if (numeroPantalla == 1) {
    pantalla1 ();     
  } else if (numeroPantalla == 2) {
    pantalla2 (estadosEscenaObstaculos);    
  } else if (numeroPantalla == 3) {
    pantalla3 ();    
  } else if (numeroPantalla == 4 || numeroPantalla == 5 || numeroPantalla == 6) {
    
    let indice, data;

    if (numeroPantalla == 4) {
      indice = 0;      
    } else if (numeroPantalla == 5) {
      indice = 1;
    } else if (numeroPantalla == 6) {
      indice = 2;
    }
    
    data = estadosEscenasComunes[indice];    
    pantallasListaDesafios(elementosImages, data, numeroPantalla);
    
  } else if (numeroPantalla == 7) {
    pantalla7 ();    
  } else if (numeroPantalla == 8) {
    pantalla8 (); 
  } else if (numeroPantalla == 9) {
    pantalla9 ();
  } else if (numeroPantalla == 10) {
    pantalla10 ();
  } else if (numeroPantalla == 11) {
    pantalla11 ();
  } else if (numeroPantalla == 12) {
    pantalla12 ();
  } else if (numeroPantalla == 13) {
    pantalla13 ();
  } else if (numeroPantalla == 14) {
    pantalla14 ();
  } else if (numeroPantalla == 15) {
    pantalla15 ();
  } else if (numeroPantalla == 16) {
    pantalla16 ();
  } else if (numeroPantalla == 17) {
    pantalla17 ();
  }
}


/**********************************************
 * Función pantalla0                          *
 **********************************************
 * Dibuja los elementos de la pantalla0       *
 **********************************************
*/
function pantalla0 () {
  // TODO: VER CALCULO DE DELAY COMO EN EL REPO DEL PROFE
  let tiempoActual = millis();
  
  // Si han pasado más de 2 segundos
  // Agrego un efecto para mostrar el logo
  
  if (tiempoActual - tiempoInicio > 2000) {
    //mostrar = true;
    tint(255, logoTransparencia);
    image(logoImage, 10, 290, logoAncho, logoAlto);
    
    // Incrementa la transparencia hasta que alcanza el máximo (255)
    if (logoTransparencia < 255) {
      logoTransparencia += velocidadFade;
    }
   
    // Posición y dimensiones del botón
    let posX = width / 2 - 280; // Centra el botón horizontalmente
    let posY = height / 2 - 50; // Centra el botón verticalmente
    let ancho = 150;
    let alto = 50;
    let radioBorde = 20;
    let colorRelleno = color(222, 125, 46);
    let colorSobre = color(227, 214, 195);
    let colorBorde = color(0, 0, 0);
    
    botonRectangular("Iniciar Juego", posX, posY, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    botonesVisibles[0] = true;
  }
}


/**********************************************
 * Función pantalla1                          *
 **********************************************
 * Dibuja los elementos de la pantalla1       *
 **********************************************
*/
function pantalla1 () {
  // Posición y dimensiones del botón
  let ancho = 150;
  let posX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
  let posY = height / 1.2; // Centra el botón verticalmente
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
  
  
  if (pergaminoFinEscribir == false ) {
    botonRectangular("Saltar intro", posX, posY, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    botonesVisibles[1] = true;
  }
   
  pergaminoFinEscribir = escribirDialogo (misTextos[0], 350, 450, 115, 100, color(255,255,255,0));
  
  if (pergaminoFinEscribir) {
    currentIndex = 0;
    displayedText = "";
    escena = 2;    
  } 
}


/**********************************************
 * Función pantalla2                          *
 **********************************************
 * Dibuja los elementos de la pantalla2       *
 * Recibe la "data" empaquetada en un arreglo *
 * (ver 
 **********************************************
*/
function pantalla2 (data) {
  
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
  
  let colorFondo = color(255,255,255,200);
  
  // obstaculosFinImprimir
  data[0] = escribirDialogo (misTextos[1], 150, 240, 360, 60, colorFondo);
  
  
  for (let i = 0; i < 4; i++) {
    botonCircular(  //x, y, relleno, sobre, borde, radio
      // data[1] son las posiciones
      data[1][i][0], // pos x
      data[1][i][1], // pos y
      data[3][i][0], // color relleno
      data[3][i][1], // color borde
      color(0,0,0,15), 
      data[1][i][2]  // Radio      
    );
  }
   
      
  // Si "clickeo" los 4 obstaculos, muestro el botón para continuar
  
  if (data[2][0] && data[2][1] && data[2][2] && data[2][3]) {   
    botonRectangular("Continuar", 25, height / 1.2, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    botonesVisibles[2] = true;    
  }
}


/**********************************************
 * Función pantalla3                          *
 **********************************************
 * Dibuja los elementos de la pantalla3       *
 **********************************************
*/
function pantalla3 () {
  let botonAncho = 150;
  let botonX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
  let botonY = height / 1.2; // Centra el botón verticalmente
  let botonAlto = 50;
  let borderRadius = 20;
  
  let colorRelleno = color(222, 125, 46, 100);
  let colorSobre = color(227, 214, 195, 100);
  let colorBorde = color(0, 0, 0, 0);
  let colorFondo = color(255,255,255,200);  

  tresPuertasFinEscribir = escribirDialogo (misTextos[2], 59, 550, 42, 400, colorFondo);
    
  botonCircular(125, 260, colorRelleno, colorSobre, colorBorde, 30)
  botonCircular(315, 260, colorRelleno, colorSobre, colorBorde, 30)
  botonCircular(510, 260, colorRelleno, colorSobre, colorBorde, 30)
}


/**********************************************
 * Función pantallasListaDesafios             *
 **********************************************
 * Dibuja los elementos de las pantallas      *
 * 4, 5 y 6.                                  *
 * Recibe las imágenes de los objetos y la    *
 * "data", un arreglo empaquetado             *
 * (ver estadosEscenasComunes. Recibe un      *
 * elemento de ese array (0, 1 o 2)           *
 **********************************************
*/
function pantallasListaDesafios(imagenesObjetos, data, pantalla) {
  // Defino las variables a usar
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorBorde = color(0, 0, 0);
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBoton = color(255, 255, 255, 0);
  
  // Color de fondo de la caja de texto superior
  let colorFondo = color(255,255,255,200);
  
  // Opacidad que se usa para los objetos (imágenes)
  tint(255, 200);
  
  // Evaluar si tengo que borrar las variables de texto que usa el prompter 
  if (tresPuertasFinEscribir) {
    currentIndex = 0;
    displayedText = ""; 
    
    tresPuertasFinEscribir = false;
  }
  
  // Escribir el diálogo en la pantalla
  // -- if finImprimir == false
  if (data[0] == false) {
    finEscribir = escribirDialogo (misTextos[3], 59, 550, 42, 30, colorFondo);
  }
  
  // Colocar los objetos a descubrir en la pantalla
  for (let i = 0; i < 4; i++) {

    image(imagenesObjetos[i], data[1][i][0], data[1][i][1], 82, 82);
    
    botonCircular(data[1][i][0] + 30, data[1][i][1] + 30, colorBoton, colorBoton, colorBoton, 40);
    
  }
  
  textSize(32); // Tamaño del texto
  if (data[2][0]) {
    fill (62,142,41);
  } else {
    fill(50);
  }
  text('ARCO', 41, 265); 
  
  if (data[2][1]) {
    fill (62,142,41);
  } else {
    fill(50);
  }
  text('MACHETE', 41, 305); 
  
  if (data[2][2]) {
    fill (62,142,41);
  } else {
    fill(50);
  }
  text('PISTOLA', 41, 345);  
  
  if (data[2][3]) {
    fill (62,142,41);
  } else {
    fill(50);
  }
  text('SOGA', 41, 385); 
  
  // Habilitar el botón para continuar
  // Si "clickeo" los 4 obstaculos, muestro el botón para continuar
  if (
    data[2][0] &&
    data[2][1] &&
    data[2][2] &&
    data[2][3]
  ) {
    
    botonRectangular("Continuar", width/2-75, height / 1.2, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    botonesVisibles[pantalla] = true;
    
  }
}


/**********************************************
 * Función pantalla7                          *
 **********************************************
 * Dibuja los elementos de la pantalla7       *
 **********************************************
*/
function pantalla7 () {
  
  let botonAncho = 170;
  let botonX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
  let botonY = height / 1.2; // Centra el botón verticalmente
  let botonAlto = 50;
  let borderRadius = 30;
  
  let colorRelleno = color(222, 125, 46, 0);
  //let colorSobre = color(0, 76, 158, 240);
  let colorBorde = color(0, 0, 0, 0);
  let colorFondo = color(255,255,255,200);  

  tresPuertasFinEscribir = escribirDialogo (misTextos[4], 59, 550, 42, 27, colorFondo);
    
  botonCircular(235, 232, colorRelleno, color(0, 76, 158, 180), colorBorde, 16)
  botonCircular(405, 232, colorRelleno, color(247, 123, 0, 180), colorBorde, 16)
  
}


/**********************************************
 * Función pantalla8                          *
 **********************************************
 * Dibuja los elementos de la pantalla8       *
 **********************************************
*/
function pantalla8 () {
 let botonAncho = 150;
  let botonX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
  let botonY = height / 1.2; // Centra el botón verticalmente
  let botonAlto = 50;
  let borderRadius = 20;
  
  let colorRelleno = color(222, 125, 46, 40);
  let colorSobre = color(227, 214, 195, 40);
  let colorBorde = color(0, 0, 0, 0);
  let colorFondo = color(255,255,255,200);  

  tresPuertasFinEscribir = escribirDialogo (misTextos[5], 59, 550, 42, 50, colorFondo);
    
  botonCircular(165, 310, colorRelleno, colorSobre, colorBorde, 50)
  botonCircular(475, 310, colorRelleno, colorSobre, colorBorde, 50)
} 
  

/**********************************************
 * Función pantalla9                          *
 **********************************************
 * Dibuja los elementos de la pantalla9       *
 **********************************************
*/
function pantalla9 () {
  let colorFondo = color(255,255,255,200);  
  
  tresPuertasFinEscribir = escribirDialogo (misTextos[6], 59, 550, 42, 390, colorFondo);
  
  
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
    
  botonRectangular("No corre las ramas", 20, 20, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);   
  botonRectangular("Corre las ramas", 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  botonesVisibles[9][0] = true;
  botonesVisibles[9][1] = true;
}


/**********************************************
 * Función pantalla10                         *
 **********************************************
 * Dibuja los elementos de la pantalla10      *
 **********************************************
*/
function pantalla10 () {
  let colorFondo = color(255,255,255,200);  
  
  tresPuertasFinEscribir = escribirDialogo (misTextos[7], 59, 550, 42, 390, colorFondo);
 
 
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
  
  botonRectangular("Escalar montaña", 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);  
  botonesVisibles[10] = true;
}
 

/**********************************************
 * Función pantalla11                         *
 **********************************************
 * Dibuja los elementos de la pantalla11      *
 **********************************************
*/
function pantalla11 () {
  let colorFondo = color(255,255,255,200);  
  
   tresPuertasFinEscribir = escribirDialogo (misTextos[10], 59, 550, 42, 390, colorFondo);
  
  
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
    
    botonRectangular("Está el talisman", 20, 20, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    
    botonRectangular("No está el talisman", 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    
    botonesVisibles[11][0] = true;
    botonesVisibles[11][1] = true;
    
}


/**********************************************
 * Función pantalla12                         *
 **********************************************
 * Dibuja los elementos de la pantalla12      *
 **********************************************
*/
function pantalla12 () {
 let colorFondo = color(255,255,255,200);  
  
   tresPuertasFinEscribir = escribirDialogo (misTextos[10], 59, 550, 42, 390, colorFondo);
  
  
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
    
    botonRectangular("Está el talisman", 20, 20, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    botonRectangular("No está el talisman", 20, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    
    botonesVisibles[12][0] = true;
    botonesVisibles[12][1] = true;
  
}


/**********************************************
 * Función pantalla13                         *
 **********************************************
 * Dibuja los elementos de la pantalla13      *
 **********************************************
*/
function pantalla13 () {
  let colorFondo = color(255,255,255,200);  
  
  tresPuertasFinEscribir = escribirDialogo (misTextos[9], 59, 550, 42, 390, colorFondo);
    
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
    
  botonRectangular("Reiniciar juego", 480, 20, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  botonRectangular("Créditos", 480, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  
  botonesVisibles[13][0] = true;
  botonesVisibles[13][1] = true;
  
}


/**********************************************
 * Función pantalla14                         *
 **********************************************
 * Dibuja los elementos de la pantalla14      *
 **********************************************
*/
function pantalla14 () {
  let colorFondo = color(255,255,255,200);  
  
  tresPuertasFinEscribir = escribirDialogo (misTextos[10], 59, 550, 42, 390, colorFondo);
 
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
    
  botonRectangular("Encuentra la llave", 480, 20, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  botonRectangular("No encuentra la llave", 480, 100, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  
  botonesVisibles[14][0] = true;
  botonesVisibles[14][1] = true;
  
  
}


/**********************************************
 * Función pantalla15                         *
 **********************************************
 * Dibuja los elementos de la pantalla15      *
 **********************************************
*/
function pantalla15 () {
  let colorFondo = color(255,255,255,200);  
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
  
  tresPuertasFinEscribir = escribirDialogo (misTextos[10], 59, 550, 42, 390, colorFondo);
 
  botonRectangular("Iniciar de nuevo", 480, 30, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);    
  botonRectangular("Créditos", 480, 120, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  
  botonesVisibles[15][0] = true;
  botonesVisibles[15][1] = true;
    
}


/**********************************************
 * Función pantalla16                         *
 **********************************************
 * Dibuja los elementos de la pantalla16      *
 **********************************************
*/
function pantalla16 () {
 let colorFondo = color(255,255,255,200);  
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
  
  tresPuertasFinEscribir = escribirDialogo (misTextos[12], 59, 550, 42, 390, colorFondo);
 
  botonRectangular("Iniciar de nuevo", 480, 30, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);    
  botonRectangular("Créditos", 480, 120, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  
  botonesVisibles[16][0] = true;
  botonesVisibles[16][1] = true;
     
}


/**********************************************
 * Función pantalla17                         *
 **********************************************
 * Dibuja los elementos de la pantalla17      *
 **********************************************
*/

function pantalla17 () {
  let colorFondo = color(255,255,255,200);  
  let ancho = 150;
  let alto = 50;
  let radioBorde = 20;
  let colorRelleno = color(222, 125, 46);
  let colorSobre = color(227, 214, 195);
  let colorBorde = color(0, 0, 0);
  
  tresPuertasFinEscribir = escribirDialogo (misTextos[12], 59, 550, 42, 390, colorFondo);
 
  botonRectangular("Iniciar de nuevo", 480, 30, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde); 
  botonesVisibles[17] = true;
}
