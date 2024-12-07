class Talisman {
  constructor(posX, posY) {
   this.posX = posX;
   this.posY = posY;
   
   this.gravedad = 0.5;
   this.frenado = 0.5;
   this.velocidad = 0;
   
   this.agarrado = false;
   this.enSuelo = false;
   
  }
  
  reiniciar() {
    let x = random(590);
    this.posX = x;
    this.posY = 0;
    this.gravedad = 0.5;
    this.frenado = 0.5;
    this.velocidad = 0;
    this.agarrado = false;
    this.enSuelo = false;
  }
  
  dibujar() {
    let colorBueno = color(0, 0, 255, 50);
    let colorMalo = color(255, 255, 0, 50);
    
    image(talismanSprite, this.posX, this.posY, 50, 50);
    
    if (this.agarrado) {
      fill(colorBueno);
      ellipse(this.posX + 25, this.posY + 25, 50, 50);
    }
    
    if (!this.agarrado && this.enSuelo) {
      fill(colorMalo);
      ellipse(this.posX + 25, this.posY + 25, 50, 50);
    }
    this.caer();
  }
  
  caer() {
    this.velocidad += this.gravedad;
    this.posY += this.velocidad;
    
    if (this.posY > height - 25) {
      this.posY = height - 25;
      this.velocidad *= -this.frenado;
    }
    
    this.posY += this.gravedad
    
    if (abs(this.velocidad) < 0.1) {
      this.velocidad = 0;
      this.enSuelo = true;
    }
  }
  
  agarrar() {
     this.agarrado = true; 
  }
}
