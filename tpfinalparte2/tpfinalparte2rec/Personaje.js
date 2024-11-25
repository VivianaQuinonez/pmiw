class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vidas = 2;        // Vidas disponibles
    this.acertados = 0;    // Cantidad de talismanes capturados
  }
  
  reiniciar() {
    this.vidas = 2;
    this.acertados = 0;
    this.posX = width/2;
    this.posY = 310;
  }
  
  // Dibuja la representación del personaje
  dibujar() {
    // Lara ocupa un rectángulo de 100x40 
    image(laraSprite, this.posX, this.posY, 48, 150);    
  }
  
  moverDerecha() {
    if (this.posX + 10 >= 600) {
      this.posX = 600;
    } else { 
      this.posX += 10;
    }
  }
  
  moverIzquierda() {
    if (this.posX - 10 <= 0) {
      this.posX = 0;
    } else {
      this.posX -= 10;
    }
  }
  
  detectarColision(talisman) {    
    // Asumimos que lara está parada a la altura 310
    // tiene 150px de alto (llega hasta los 420px
    // y tiene 48px de ancho.
    // También que el Talisman tiene una dimensión de 50x50.
    
    let colision = talisman.posX < this.posX + 48 &&
                    talisman.posX + 50 > this.posX &&
                    talisman.posY < this.posY + 150 &&
                    talisman.posY + 50 > this.posY;
    
    
    return colision;
  }
    
  restarVida() {
    this.vidas--; 
  }
    
  estaViva() {
    return this.vidas > 0;
  }
  

  //Consideramos que agarra el talismán si éste toca al área de Lara (hitbox)
  agarrarTalisman(talisman) {
    talisman.agarrar();
    this.acertados += 1;    
  }
  
  verVidas() {
    return this.vidas;
  }
  
  verAcertados() {
    return this.acertados;
  }
}
