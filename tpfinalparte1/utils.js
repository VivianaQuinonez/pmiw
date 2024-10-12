function dialogoEstatico(textoAImprimir, alto, ancho, X, Y, colorFondo) {
  textWrap(WORD); // Ajusta el texto por palabras para multilíneac
  textAlign(LEFT, TOP);
  fill (colorFondo);
  rect(X, Y, ancho, alto);
  
  fill(114, 66, 30);
  textFont('Courier New', 19);
  text(textoAImprimir, X, Y, ancho, alto); // Añade un margen pequeño al texto
}

/* 
  Función para escribir un diálogo en pantalla como 
  si se estuviera tipeando en tiempo real
*/
function escribirDialogo (textoAImprimir, alto, ancho, X, Y, colorFondo, continuar = true) {
  textWrap(WORD); // Ajusta el texto por palabras para multilínea
  textAlign(LEFT, TOP);
  
  // Simula escribir texto en tiempo real
  if (currentIndex < textoAImprimir.length && frameCount % 4 === 0 && continuar) {

    displayedText += textoAImprimir[currentIndex];
    currentIndex++;
     
  } 
  
  fill (colorFondo);
  
  // Dibuja el bloque de texto definido por boxWidth y boxHeight
  rect(X, Y, ancho, alto);
  
  
  // Muestra el texto dentro del bloque con límites de ancho y alto
  let clippedText = displayedText.split("\n");
  
  fill(114, 66, 30);
  textFont('Courier New', 19);
  text(displayedText, X, Y, ancho, alto); // Añade un margen pequeño al texto
  
  //console.log(displayedText.length, textoAImprimir.length);
  if (displayedText.length == textoAImprimir.length){
    continuar = false;
    return true;
  } return false;
  
}


// Función para dibujar el botón personalizado
function dibujarBoton(buttonText, botonX, botonY, botonAncho, botonAlto, borderRadius = 20) {
  
  fill(222, 125, 46); // Color de relleno (marroncito)
  stroke(0); // Borde de color negro
  strokeWeight(2); // Grosor del borde
  rect(botonX, botonY, botonAncho, botonAlto, borderRadius); // Dibuja el rectángulo con bordes redondeados (20 de radio)

  // Texto en el botón
  fill(0); // Color del texto (negro)
  noStroke(); // Quita el borde del texto
  textAlign(CENTER, CENTER); // Centra el texto en el botón
  textSize(18); // Tamaño del texto
  text(buttonText, botonX + botonAncho / 2, botonY + botonAlto / 2); // Dibuja el texto en el centro del botón
}


// Función para detectar si el mouse está sobre un rectángulo
function isMouseOverRect(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}


// Función para detectar si el mouse está sobre un círculo
function isMouseOverCircle(x, y, r) {
  let distance = dist(mouseX, mouseY, x, y); // Calcula la distancia entre el mouse y el centro del círculo
  return distance < r; // Devuelve true si el mouse está dentro del radio del círculo
}
