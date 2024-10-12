
// clase para crear boton generico


class Boton {
  constructor (posX, posY, fill, fillOver, stroke) {
    if (this.constructor === Boton) {
      throw new Error("No se puede instanciar una clase abstracta");
      
    }
    
    this.posX = posX;
    this.posY = posY;
    this.fill = fill;
    this.fillOver = fillOver;
    this.stroke = stroke;
  }
  
  dibujar() {
    throw new Error("El método draw() debe ser implementado por una subclase");
  
  }
  
  handleClick() {
    if (this.isMouseOver()) {
      console.log("Botón clickeado");
    }
  }  
}


class BotonCircular extends Boton {
  constructor (posX, posY, fill, fillOver, stroke, radio) {
    super(posX, posY, fill, fillOver, stroke);
    
    this.radio = radio;
  }
  
  dibujar() {
    fill(this.isMouseOver() ? this.fillOver : this.fill);
    stroke(this.stroke);
    strokeWeight(2);
    ellipse(this.posX, this.posY, this.radio * 2); 
  }
  
  setFillColor(nuevoColor, nuevoOver) {
    this.fill = nuevoColor;
    this.fillOver = nuevoOver;    
  }
  
  // Implemento la detección de mouse sobre el botón circular
  isMouseOver() {
    let distance = dist(mouseX, mouseY, this.posX, this.posY);
    return distance < this.radio;
  }
  
  mousePressed() {
    if (this.isMouseOver()) {
      return true; // Devuelve true si el clic está sobre el objeto
    }
    return false; // Devuelve false si el clic no está sobre el objeto
  }
  
  // Método que detecta el clic dentro de la clase
  chequearClick() {
    if (mouseIsPressed && this.isMouseOver()) {
      return true; // Devuelve true si el clic está sobre el objeto
    }
    return false; // Devuelve false si el clic no está sobre el objeto
  }
}


class BotonRectangular extends Boton {
  constructor (texto, posX, posY, fill, fillOver, stroke, alto, ancho, borderRadius) {
    super(posX, posY, fill, fillOver, stroke);
    
    this.texto = texto;
    this.alto = alto;
    this.ancho = ancho;  
    this.borderRadius = borderRadius;
  }
  
  dibujar() {
    fill(this.isMouseOver() ? this.fillOver : this.fill);
    textFont('Impact', 19);
    stroke(this.stroke); // Borde de color negro
    strokeWeight(2); // Grosor del borde
    
    // Dibuja el rectángulo con bordes redondeados (20 de radio)
    rect(this.posX, this.posY, this.ancho, this.alto, this.borderRadius); 
  
    // Texto en el botón
    fill(0); // Color del texto (negro)
    noStroke(); // Quita el borde del texto
    textAlign(CENTER, CENTER); // Centra el texto en el botón
    textSize(18); // Tamaño del texto
    
    // Dibuja el texto en el centro del botón
    text(this.texto, this.posX + this.ancho / 2, this.posY + this.alto / 2); 
  }
  
  // TODO: Revisar el área de clickeo comparada con la del boton de escena 0
  isMouseOver() {
    return mouseX > this.posX && 
      mouseX < this.posX + this.ancho &&
      mouseY > this.posY &&
      mouseY < this.posY + this.alto;
  }
  
  chequearClick() {
    if (mouseIsPressed && this.isMouseOver()) {
      return true; // Devuelve true si el clic está sobre el objeto
    }
    return false; // Devuelve false si el clic no está sobre el objeto
  }
}
