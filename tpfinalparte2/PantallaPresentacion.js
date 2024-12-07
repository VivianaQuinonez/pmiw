class PantallaPresentacion {
  constructor() {
    const colorRelleno = color(222, 125, 46);
    const colorSobre = color(227, 214, 195);
    const colorBorde = color(0, 0, 0);
    const radioBorde = 20;
    const ancho = 150;
    const alto = 50;
    
    this.botones = []; 
    this.botones[0] = new Boton("INICIAR JUEGO", 40, 250, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    this.botones[1] = new Boton("INSTRUCCIONES", 40, 320, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    this.botones[2] = new Boton("CREDITOS", 40, 390, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);    
  }
  
  mostrar() {
    image(backgroundImages[0], 0, 0);
    
    this.botones[0].dibujar();
    this.botones[1].dibujar();
    this.botones[2].dibujar();
  }  
}
