class PantallaCreditos {
  constructor() {
    this.boton = this.crearBoton();
    this.texto = new Texto(textos[3], 30, 479, 80, 430, color(255,255,255,200));
  }
    
  crearBoton() {
    const colorRelleno = color(222, 125, 46);
    const colorSobre = color(227, 214, 195);
    const colorBorde = color(0, 0, 0);
    const radioBorde = 20;
    const ancho = 150;
    const alto = 50;
    
    return new Boton("REINICIAR JUEGO", 480, 30, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  }
  
  mostrar() {
    // Fondo de pantalla. Setea según corresponde
    image(backgroundImages[3], 0, 0);
    this.boton.dibujar();
    this.texto.dibujar();
  } 
}
