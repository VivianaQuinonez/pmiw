class Talisman {
  constructor(posX, posY){
   this.posX = posX;
   this.posY = posY;
   this.miColor = color (0, 0, 255);
   this.vida = 1;
   this.agarrada = false;
   
  }
  
  dibujar(){
    if(this.agarrada)
    fill(this.miColor);
    ellipse(this.posX, this.posY, 20, 20);
    this.caerAbajo();
  }
  
  caerAbajo(){
    this.posY -= 5;
  }
  
  agarrar(){
    this.agarrada = true;
  }

}
