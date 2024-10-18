// Precargo las imágenes de fondo.
function precargarImagenesFondo() {

  // Hago un ciclo for por la cantidad de elementos de backgroundNames
  for (let i = 0; i < backgroundNames.length; i++) {
    // Cargo la imagen como elemento del arreglo
    // en la posición i, para cada elemento del arreglo tengo
    // luego disponible la imagen lista para usar.
    backgroundImages[i] = loadImage(backgroundNames[i]); 
  }
}


// Precargo las imágens de los objetos a encontrar
function precargarObjetosAEncontrar() {
  
  // Hago un ciclo for por la cantidad de elementos del arreglo
  // objetosAEncontrar y en cargo la imagen al otro arreglo
  // elementosImages, para tener en cada posición la imagen
  // lista para usar.
  for (let i = 0; i < objetosAEncontrar.length; i++) {
       elementosImages[i] = loadImage(objetosAEncontrar[i]); 
    }
}


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
function dibujarBoton(texto, posX, posY, botonAncho, botonAlto, radioBorde) {
  
  fill(222, 125, 46); // Color de relleno (marroncito)
  stroke(0); // Borde de color negro
  strokeWeight(2); // Grosor del borde
  rect(posX, posY, botonAncho, botonAlto, radioBorde); // Dibuja el rectángulo con bordes redondeados (20 de radio)

  // Texto en el botón
  fill(0); // Color del texto (negro)
  noStroke(); // Quita el borde del texto
  textAlign(CENTER, CENTER); // Centra el texto en el botón
  textSize(18); // Tamaño del texto
  text(texto, posX + botonAncho / 2, posY + botonAlto / 2); // Dibuja el texto en el centro del botón
}
