class Juego {
  constructor(cantidadTalismanes){ 
    this.cantidadTalismanes = cantidadTalismanes;

    this.escena = 0;          // Para manejar la escena a mostrar
    this.botones = [];        // El juego tendrá 6 botones
    
    // Precarga de cosas de la clase
    this.crearPersonaje();    // Llama al método de clase para crear personaje
    this.crearTalismanes();   // Llama al método de clase para crear objetos
    this.crearBotones();  
    this.talismanActual = 0  // Talisman que se está dibujando
  }
  
  iniciar(){
    this.escena = 0;
    this.talismanActual = 0;
    this.lara.reiniciar();
    this.reiniciarTalismanes();
  }
  
    // Devuelve el número de escena actual
  obtenerNroEscena() {
    return this.escena;
  }
  
  cambiarEscena(nroEscena) {
    this.escena = nroEscena; 
  }
  
  teclaPresionada(keyCode){
    this.lara.teclaPresionada(keyCode);
  }
  
  crearBotones() {
    const colorRelleno = color(222, 125, 46);
    const colorSobre = color(227, 214, 195);
    const colorBorde = color(0, 0, 0);
    const radioBorde = 20;
    const ancho = 150;
    const alto = 50;
    
    this.botones[0] = new Boton("INICIAR JUEGO", 40, 250, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    this.botones[1] = new Boton("INSTRUCCIONES", 40, 320, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    this.botones[2] = new Boton("CREDITOS", 40, 390, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    this.botones[3] = new Boton("INICIAR JUEGO", width / 2 - (ancho / 2), height / 1.35, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    this.botones[4] = new Boton("INICIAR JUEGO", width / 2 - (ancho / 2), height / 1.9, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
    this.botones[5] = new Boton("REINICIAR JUEGO", 480, 30, colorRelleno, colorSobre, colorBorde, alto, ancho, radioBorde);
  }
  
  crearPersonaje(){
    this.lara = new Personaje(width/2, 310);
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
  
  // Dibuja según la escena en donde se encuentre
  dibujar() {
    // Fondo semitransparente para las cajas de texto.
    let colorFondo = color(255,255,255,200);
    
    // ---------------------------------------------
    // Escena 0 - Presentación
    // ---------------------------------------------
    if (this.escena == 0) {
      // Fondo de pantalla. Setea según corresponde
      image(backgroundImages[0], 0, 0);
      this.botones[0].dibujar();
      this.botones[1].dibujar();
      this.botones[2].dibujar();
      
      
    // ---------------------------------------------  
    // Escena 1 - Instrucciones 
    // ---------------------------------------------
    } else if (this.escena == 1) {
      // Fondo de pantalla. Setea según corresponde
      image(backgroundImages[1], 0, 0);
      cajaTexto(textos[0], 250, 450, 85, 90, color(255, 255, 255, 0));
      this.botones[3].dibujar();

    // ---------------------------------------------
    // Escena 2 - Talismanes  
    // ---------------------------------------------
    } else if (this.escena == 2) {
      // Fondo de pantalla. Setea según corresponde
      image(backgroundImages[2], 0, 0);
      
      // Eventos del personaje
      if (keyIsDown(LEFT_ARROW)) {
        objJuego.lara.moverIzquierda();
      }
      
      if (keyIsDown(RIGHT_ARROW)) {
        objJuego.lara.moverDerecha();
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
        
        if (!this.lara.estaViva()) {
          // Lara perdió todas sus vidas
          cajaTexto(textos[2], 70, 450, 115, 160, color (255, 255, 255, 0), color(255,0,0), 65);
        } else if (this.talismanActual >= this.cantidadTalismanes) {
          // Todos los talismanes han sido procesados
          cajaTexto(textos[1], 70, 450, 150, 160, color (255, 255, 255, 0), color(0,255,0), 65);
        }
        
        this.botones[4].dibujar();
      }
      
          
    // ---------------------------------------------
    // Escena 3 - Créditos  
    // ---------------------------------------------
    } else if (this.escena == 3) {
      // Fondo de pantalla. Setea según corresponde
      image(backgroundImages[3], 0, 0);
      
      // Botones de la pantalla
      this.botones[5].dibujar();
      
      // Texto
      cajaTexto(textos[3], 30, 479, 80, 430, colorFondo)
      
    }
  } 
  
  
  laraGano (){
  }
}
