class Boton {
  constructor(texto, posX, posY, colorRelleno, colorSobre, colorBorde, alto, ancho, bordeRedondeado) {
    this.texto = texto;
    this.posX = posX;
    this.posY = posY;
    this.colorRelleno = colorRelleno;
    this.colorSobre = colorSobre;
    this.colorBorde = colorBorde;
    this.alto = alto;
    this.ancho = ancho;
    this.bordeRedondeado = bordeRedondeado;
  }
  
  clickeado() {
    return mouseX > this.posX &&
      mouseX < this.posX + this.ancho &&
      mouseY > this.posY &&
      mouseY < this.posY + this.alto;
  }
  
  dibujar() {
    push();
    
    if (this.clickeado()) {
      fill(this.colorSobre);
    } else {
      fill(this.colorRelleno);
    }
    
    stroke(this.colorBorde);
    strokeWeight(2);
    
    rect(this.posX, this.posY, this.ancho, this.alto, this.bordeRedondeado);
    
    fill(0);
    noStroke();
    textFont('Impact', 19);
    textAlign(CENTER, CENTER);
    textSize(18);
    
    text(this.texto, this.posX + this.ancho / 2, this.posY + this.alto / 2);
    pop();
  }
}
