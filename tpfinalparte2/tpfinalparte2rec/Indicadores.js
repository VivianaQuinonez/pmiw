class Indicadores {
  constructor(vidas, puntos) {
    this.vidas = new Texto('Vidas: ' + vidas, 20, 180, 80, 80, color(255,255,255,0), color(252, 194, 3), 22);
    this.puntos = new Texto('Puntos: ' + puntos, 20, 180, 450, 80, color(255,255,255,0), color(252, 194, 3), 22);
  }
  
  actualizarVidas(nuevaVida) {
    this.vidas.cambiarTexto('Vidas: ' + nuevaVida); 
  }
  
  actualizarPuntos(nuevoPuntaje) {
    this.puntos.cambiarTexto('Puntos: ' + nuevoPuntaje); 
  }
  
  mostrar() {
    this.vidas.dibujar();
    this.puntos.dibujar();
  }
}
