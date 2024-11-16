// Precargo las imágenes de fondo.
function precargarImagenes() {

  // Hago un ciclo for por la cantidad de elementos de backgroundNames
  for (let i = 0; i < backgroundNames.length; i++) {
    // Cargo la imagen como elemento del arreglo
    // en la posición i, para cada elemento del arreglo tengo
    // luego disponible la imagen lista para usar.
    backgroundImages[i] = loadImage(backgroundNames[i]); 
  }
  
  laraSprite = loadImage(laraSpriteName);
  talismanSprite = loadImage(talismanSpriteName);
}


// Función para escribir texto en pantalla
function cajaTexto(textoAImprimir, alto, ancho, X, Y, colorFondo, colorTexto= color(114, 66, 30), tamFuente=18 ) {
  noStroke ();
  fill (colorFondo);
  rect(X, Y, ancho, alto);
  fill(colorTexto);
  textWrap(WORD); // Ajusta el texto por palabras para multilíneac
  textAlign(LEFT, TOP);
  textFont('Courier New', tamFuente);
  text(textoAImprimir, X, Y, ancho, alto); // Añade un margen pequeño al texto
}
