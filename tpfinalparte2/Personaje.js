class Personaje {
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color (0, 255, 0);
    this.vida = 1;
    this.talisman = new Talisman();
  }
  
  dibujar(){
    this.talisman.dibujar ();
    
    fill(this.miColor);
    rect(this.posX, this.posY, 40, 100);
  }
  
    teclaPresionada(keyCode){
      if(keyCode == LEFT_ARROW){
       this.moverIzquierda();
    } else if(keyCode == RIGHT_ARROW){
      this.moverDerecha();
    } else if(keyCode == ENTER){
      this.agarrarTalisman();
    }
  }
  
  moverDerecha(){
    this.posX += 10;
  }
  
   moverIzquierda(){
     this.posX -= 10;
  }
  
  estaViva(){
  }
  
  agarrarTalisman(){
    this.talisman = new Talisman (this.posX, this.PosY);
    this.talisman.caerAbajo();
  }
}
