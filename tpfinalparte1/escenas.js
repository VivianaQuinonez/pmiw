// MANEJADOR ESCENA 0
function escena0 () {
  
  // Agrego un efecto para mostrar el logo
  if (mostrar) {
    tint(255, logoTransparencia);
    image(logoImage, 10, 290, logoAncho, logoAlto);
    
    // Incrementa la transparencia hasta que alcanza el máximo (255)
    if (logoTransparencia < 255) {
      logoTransparencia += velocidadFade;
    }
   
    // Posición y dimensiones del botón
    let botonX = width / 2 - 280; // Centra el botón horizontalmente
    let botonY = height / 2 - 50; // Centra el botón verticalmente
    let botonAncho = 150;
    let botonAlto = 50;
    let borderRadius = 20;
    let relleno = color(222, 125, 46);
    let over = color(227, 214, 195);
    let stroke = color(0, 0, 0);
    
    let btnInicio = new BotonRectangular("Iniciar Juego", botonX, botonY, relleno, over, stroke, botonAlto, botonAncho, borderRadius);
    btnInicio.dibujar();
    
    if (btnInicio.chequearClick()) {
      escena = 1;
    }
    
    
    
  }
  
  /*
  // Disparo una acción cuando el botón es presionado.
  if (botonPresionado) {
    botonPresionado = false;  
    escena = 1; 
  } 
  */
  
}


// MANEJADOR ESCENA 1
function escena1 () {
  // Posición y dimensiones del botón
  let botonAncho = 150;
  let botonX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
  let botonY = height / 1.2; // Centra el botón verticalmente
  let botonAlto = 50;
  let borderRadius = 20;
  let relleno = color(222, 125, 46);
  let over = color(227, 214, 195);
  let stroke = color(0, 0, 0);
  
  
  if (estadosEscena.e1_pergamino == false ) {
    let btnSaltar = new BotonRectangular("Saltar intro", botonX, botonY, relleno, over, stroke, botonAlto, botonAncho, borderRadius);
    btnSaltar.dibujar();
     
    if (btnSaltar.chequearClick()) {
      currentIndex = 0;
      displayedText = "";
      escena = 2;
    }
  }
   
  let finEscribir = escribirDialogo (textosEscena1[0], 350, 450, 115, 100, color(255,255,255,0));
  
  if (finEscribir) {
    estadosEscena.el_pergamino = true;
    currentIndex = 0;
    displayedText = "";
    escena = 2;    
  } 
}

// MANEJADOR ESCENA 2
function escena2 () {
  
  let botonAncho = 150;
  let botonAlto = 50;
  let borderRadius = 20;
  let relleno = color(222, 125, 46);
  let over = color(227, 214, 195);
  let stroke = color(0, 0, 0);
  let colorFondo = color(255,255,255,200);
  
  estadosEscena.obstaculosMsj = escribirDialogo (textosEscena2[0], 150, 240, 360, 60, colorFondo);
  
  let btnCirc1 = new BotonCircular(
    estadosEscena.obstaculosObj[0][0], 
    estadosEscena.obstaculosObj[0][1], 
    estadosEscena.obstaculos[0][0], 
    estadosEscena.obstaculos[0][1], 
    color(0,0,0,0), 
    estadosEscena.obstaculosObj[0][2]
  );
  
  let btnCirc2 = new BotonCircular(
    estadosEscena.obstaculosObj[1][0], 
    estadosEscena.obstaculosObj[1][1], 
    estadosEscena.obstaculos[1][0], 
    estadosEscena.obstaculos[1][1], 
    color(0,0,0,0), 
    estadosEscena.obstaculosObj[0][2]
  );
  let btnCirc3 = new BotonCircular(
    estadosEscena.obstaculosObj[2][0], 
    estadosEscena.obstaculosObj[2][1], 
    estadosEscena.obstaculos[2][0], 
    estadosEscena.obstaculos[2][1], 
    color(0,0,0,0), 
    estadosEscena.obstaculosObj[2][2]
  ); 
  
  let btnCirc4 = new BotonCircular(
    estadosEscena.obstaculosObj[3][0], 
    estadosEscena.obstaculosObj[3][1], 
    estadosEscena.obstaculos[3][0], 
    estadosEscena.obstaculos[3][1], 
    color(0,0,0,0), 
    estadosEscena.obstaculosObj[3][2]
  ); 
  
  //Dibujamos los botones en pantalla
  btnCirc1.dibujar();
  btnCirc2.dibujar();
  btnCirc3.dibujar();
  btnCirc4.dibujar();
  
  // Modifico la variable global que contiene el color de fill y over (ver function setup)
  if (btnCirc1.chequearClick()) {
    estadosEscena.obstaculos[0] = [color(179, 168, 177), color(237, 230, 236)];
    estadosEscena.obstaculosBtns[0] = true;
  }
  
   if (btnCirc2.chequearClick()) {
    estadosEscena.obstaculos[1] = [color(179, 168, 177), color(237, 230, 236)];
    estadosEscena.obstaculosBtns[1] = true;
  }
  
   if (btnCirc3.chequearClick()) {
    estadosEscena.obstaculos[2] = [color(179, 168, 177), color(237, 230, 236)];
    estadosEscena.obstaculosBtns[2] = true;
  }
  
   if (btnCirc4.chequearClick()) {
    estadosEscena.obstaculos[3] = [color(179, 168, 177), color(237, 230, 236)];
    estadosEscena.obstaculosBtns[3] = true;
  }
  
  
  // Si "clickeo" los 4 obstaculos, muestro el botón para continuar
  if (
    estadosEscena.obstaculosBtns[0] &&
    estadosEscena.obstaculosBtns[1] &&
    estadosEscena.obstaculosBtns[2] &&
    estadosEscena.obstaculosBtns[3]
  ) {
    let btnContinuar = new BotonRectangular("Continuar", 25, height / 1.2, relleno, over, stroke, botonAlto, botonAncho, borderRadius);
    btnContinuar.dibujar();
    
    
    if(btnContinuar.chequearClick()) {
      // Si terminó de escribir el diálogo, reinicio el las variables que usa textos
      if (estadosEscena.obstaculosMsj) {
        currentIndex = 0;
        displayedText = "";
      }
      escena = 3;
    }
  }
 console.log (estadosEscena.obstaculosObj);
}

// MANEJADOR ESCENA 3
function escena3 () {
  let botonAncho = 150;
  let botonX = width / 2 - (botonAncho / 2); // Centra el botón horizontalmente
  let botonY = height / 1.2; // Centra el botón verticalmente
  let botonAlto = 50;
  let borderRadius = 20;
  
  let relleno = color(222, 125, 46, 100);
  let over = color(227, 214, 195, 100);
  let stroke = color(0, 0, 0, 0);
  let colorFondo = color(255,255,255,200);
  
  //let finEscribir = false;
  

  estadosEscena.tres_puertas = escribirDialogo (textosEscena3[0], 59, 550, 42, 400, colorFondo);
     
  let btnCirc1 = new BotonCircular(125, 260, relleno, over, stroke, 30);
  let btnCirc2 = new BotonCircular(315, 260, relleno, over, stroke, 30);
  let btnCirc3 = new BotonCircular(510, 260, relleno, over, stroke, 30);
  
  btnCirc1.dibujar();
  btnCirc2.dibujar();
  btnCirc3.dibujar();
  
  if (btnCirc1.chequearClick()) {
    escena = 4;
  }
  
  if (btnCirc2.chequearClick()) {
    escena = 4;
  }
  
  if (btnCirc3.chequearClick()) {
    escena = 4;
  }
  
}

function escena4 () {
  if (estadosEscena.tres_puertas) {
    currentIndex = 0;
    displayedText = ""; 
    
    estadosEscena.tres_puertas = false;
  }
  
  let colorFondo = color(255,255,255,200);
  if (estadosEscena.selva == false) {
    finEscribir = escribirDialogo (textosEscena4[0], 59, 550, 42, 30, colorFondo);
  }
  
  tint(255, 200);
  let colorBoton = color(255, 255, 255, 0);
  //posX, posY, fill, fillOver, stroke, radio

  for (let i = 0; i < elementosImages.length; i++) {
    image(elementosImages[i], estadosEscena.selvaObj[i][0], estadosEscena.selvaObj[i][1], 82, 82);
    estadosEscena.selvaBtns[i] = new BotonCircular(
      estadosEscena.selvaObj[i][0] + 30, 
      estadosEscena.selvaObj[i][1] + 30,
      colorBoton,
      colorBoton,
      colorBoton,
      40
    );
    
    estadosEscena.selvaBtns[i].dibujar();
    
    if (estadosEscena.selvaBtns[i].chequearClick()) {
      console.log("ENCONTRASTE UN OBJETO");
    } 
  }
}


function escena5 () {
  
}

function escena6 () {
  
}

function escena7 () {
  
}

function escena8 () {
  
}

function escena9 () {
  
}

function escena10 () {
  
}
function escena11 () {
  
}

function escena12 () {
  
}
function escena13 () {
  
}

function escena14 () {
  
}
function escena15 () {
  
}
