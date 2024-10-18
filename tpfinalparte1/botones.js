/**********************************************
 * funciones para manejar un "botón circular" *
 ********************************************** 
*/

// Función para determinar si el puntero del mouse está sobre un área circular
function mouseSobreCirculo(posX, posY, radio) {
  let distancia = dist(mouseX, mouseY, posX, posY);
  return distancia < radio;
}

// Función para dibujar un círculo y que cambie su color al pasar el mouse encima
function botonCircular(posX, posY, colorRelleno, colorSobre, colorBorde, radio) {

  // Relleno cambia si el mouse está sobre el boton para un efecto hover
  let relleno;
  
  if (mouseSobreCirculo(posX, posY, radio)) {
    relleno = colorSobre;
  } else {
    relleno = colorRelleno;
  }
    
  fill(relleno);
  stroke(colorBorde);
  strokeWeight(2);
  ellipse(posX, posY, radio * 2); 
}


/*************************************************
 * funciones para manejar un "botón rectangular" *
 ************************************************* 
*/

// Función para determinar si el puntero del mouse está sobre un área rectangular
function mouseSobreRectangulo(posX, posY, alto, ancho) {
  return mouseX > posX && 
    mouseX < posX + ancho &&
    mouseY > posY &&
    mouseY < posY + alto;
}

  
// Función para dibujar un rectángulo y que cambie su color al pasar el mouse encima
function botonRectangular(texto, posX, posY, colorRelleno, colorSobre, colorBorde, alto, ancho, bordeRedondeado) {
  
  if (mouseSobreRectangulo(posX, posY, alto, ancho)) {
    fill(colorSobre);
  } else {
    fill(colorRelleno);
  }
  
  stroke(colorBorde); // Borde de color negro
  strokeWeight(2); // Grosor del borde
  
  // Dibuja el rectángulo con bordes redondeados
  rect(posX, posY, ancho, alto, bordeRedondeado); 

  // Texto en el botón
  fill(0); // Color del texto (negro)
  noStroke(); // Quita el borde del texto
  textFont('Impact', 19);
  textAlign(CENTER, CENTER); // Centra el texto en el botón
  textSize(18); // Tamaño del texto
  
  // Dibuja el texto en el centro del botón
  text(texto, posX + ancho / 2, posY + alto / 2); 
}
