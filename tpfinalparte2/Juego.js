class Juego {
  constructor(cantidadTalismanes){ 
    this.cantidadTalismanes = cantidadTalismanes;
    this.crearPersonaje();
    this.crearTalismanes();
  }
  
  dibujar(){
    fill(0);
    ellipse (200, 200, 50, 50);
    this.lara.dibujar();
    
    for (let i=0; i < this.cantidadTalismanes;i++){
      this.talismanes[i].dibujar();
    }
  }
  
  iniciar(){
  }
  
    crearPersonaje(){
    this.lara = new Personaje(width/2, 370);
  }
  
  crearTalismanes (){
   this.talismanes = [];
   for (let i=0; i < this.cantidadTalismanes;i++){
     this.talismanes[i] = new Talisman(i*40, 100);
   }
  }
  
  laraGano (){
  }
  
  teclaPresionada(keyCode){
   this.lara.teclaPresionada(keyCode);
  }
}
