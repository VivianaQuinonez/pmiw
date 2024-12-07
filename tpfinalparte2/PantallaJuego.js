class PantallaJuego {
  constructor(cantidadTalismanes){ 
    this.cantidadTalismanes = cantidadTalismanes;
    
    // Precarga de cosas de la clase
    this.lara = this.crearPersonaje();    // Llama al método de clase para crear personaje
    this.crearTalismanes();               // Llama al método de clase para crear objetos

    this.boton = this.crearBoton();
    this.talismanActual = 0              // Talisman que se está dibujando
    this.indicadores = new Indicadores(this.lara.verVidas, 0);
    this.sonidoReproducido = false;
  }
  
  iniciar(){
    this.talismanActual = 0;
    this.lara.reiniciar();
    this.reiniciarTalismanes();
    this.sonidoReproducido = false;
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
  
  
  teclaPresionada(keyCode){
    this.lara.teclaPresionada(keyCode);
  }
  
  crearPersonaje(){
    return new Personaje(width/2, 310);
  }
  
  crearTalismanes () {
    this.talismanes = [];
   
    for (let i=0; i < this.cantidadTalismanes; i++) {
      let x = random(590);
      this.talismanes[i] = new Talisman(x, 0);
     }
  }
  
  reiniciarTalismanes() {
    for (let i=0; i < this.cantidadTalismanes; i++) {
      this.talismanes[i].reiniciar();
    }
  }
  
  mostrar() {
    image(backgroundImages[2], 0, 0);
    
    // Eventos del personaje
    if (keyIsDown(LEFT_ARROW)) {
      this.lara.moverIzquierda();
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
      this.lara.moverDerecha();
    }
    
    // Objetos
    fill(0);
    this.lara.dibujar();
    
           
    // Dibujar todos los talismanes que ya están en el suelo
    for (let i = 0; i < this.talismanActual; i++) {
      let talisman = this.talismanes[i];
      talisman.dibujar();
    }
    
    // Procesar el talismán actual (aún en caída o siendo procesado)
    if ((this.talismanActual < this.cantidadTalismanes) && this.lara.estaViva()) {
      let talisman = this.talismanes[this.talismanActual];
      talisman.dibujar();

      // Detectar colisión con Lara
      if (this.lara.detectarColision(talisman)) {
        if (!talisman.enSuelo) {
          this.lara.agarrarTalisman(talisman);
        }
      }

      // Si el talismán ya está en el suelo o fue recogido, pasar al siguiente
      if (talisman.enSuelo || this.lara.detectarColision(talisman)) {
        this.talismanActual++;      
      } 
      
      // Si se le escapó a lara y se le cayó al piso
      if (talisman.enSuelo && !this.lara.detectarColision(talisman)) {
         this.lara.restarVida();
      }
    }
    
    // Verificar el estado del juego
    if (!this.lara.estaViva() || this.talismanActual >= this.cantidadTalismanes) {
      
      let texto = new Texto("", 70, 450, 115, 160, color (255, 255, 255, 0), color(255,0,0), 65);
      
      
      if (!this.lara.estaViva()) {
        // Lara perdió todas sus vidas
        texto.cambiarTexto(textos[2]);
        texto.dibujar();
        this.estado = "perdio";
        
        if (!this.sonidoReproducido) {
          this.sonidoReproducido = true;
          sonidoAmbiental.stop();
          sonidoPerder.setLoop(false);
          sonidoPerder.play();
        }
        
      } else if (this.talismanActual >= this.cantidadTalismanes) {
        // Todos los talismanes han sido procesados
        texto.cambiarTexto(textos[1]);
        texto.cambiarColorTexto(color(0,255,0));
        texto.dibujar();
        
        if (!this.sonidoReproducido) {
          this.sonidoReproducido = true;
          sonidoAmbiental.stop();
          sonidoGanar.setLoop(false);
          sonidoGanar.play();
        }
      }
      
      this.boton.dibujar();
    }
    
    this.indicadores.actualizarVidas(this.lara.verVidas());
    this.indicadores.actualizarPuntos(this.lara.verAcertados());
    this.indicadores.mostrar();
    
  }
}
