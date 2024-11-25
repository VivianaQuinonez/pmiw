class PantallaInstrucciones {
  constructor() {
    this.texto = new Texto(textos[0], 250, 450, 85, 90, color(255, 255, 255, 0));
    this.boton = this.crearBoton();
  }
  
  crearBoton() {
    const colorRelleno = color(222, 125, 46);
    const colorSobre = color(227, 214, 195);
    const colorBorde = color(0, 0, 0);
    const radioBorde = 20;
    const ancho = 150;
    const alto = 50;
    
    return new Boton("INICIAR JUEGO", width / 2 - (ancho / 2), height / 1.35, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);   
  }
    
  mostrar() {
    image(backgroundImages[1], 0, 0);
    this.texto.dibujar();
    this.boton.dibujar();
  }
}
