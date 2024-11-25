class Texto {
  constructor(textoAImprimir, alto, ancho, X, Y, colorFondo, colorTexto=color(114, 66, 30), tamFuente=18) {
    this.textoAImprimir = textoAImprimir;
    this.alto = alto;
    this.ancho = ancho;
    this.posX = X;
    this.posY = Y;
    this.colorFondo = colorFondo;
    this.colorTexto = colorTexto;
    this.tamFuente = tamFuente;
  }
  
  cambiarTexto(nuevoTexto) {
    this.textoAImprimir = nuevoTexto;
  }
  
  cambiarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }
  cambiarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }
  cambiarColorFondo(nuevoColorFondo) {
    this.colorFondo = nuevoColorFondo;
  }
  cambiarColorTexto(nuevoColorTexto) {
    this.colorTexto = nuevoColorTexto;
  }
  cambiarTamFuente(nuevoTamFuente) {
    this.tamFuente = nuevoTamFuente;
  }
  
  dibujar() {
    noStroke ();
    fill (this.colorFondo);
    rect(this.posX, this.posY, this.ancho, this.alto);
    fill(this.colorTexto);
    textWrap(WORD); // Ajusta el texto por palabras para multilíneac
    textAlign(LEFT, TOP);
    textFont('Courier New', this.tamFuente);
    text(this.textoAImprimir, this.posX, this.posY, this.ancho, this.alto); // Añade un margen pequeño al texto 
  }
}
