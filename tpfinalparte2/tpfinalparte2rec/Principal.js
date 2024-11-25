class Principal {
  constructor() {
    this.presentacion = new PantallaPresentacion();
    this.juego = new PantallaJuego(10);
    this.instrucciones = new PantallaInstrucciones();
    this.creditos = new PantallaCreditos();
    this.escena = 0;
  }
  
  cambiarEscena(numEscena) {
    this.escena = numEscena;
  }
  
  iniciar() {
    this.escena = 0;
    this.juego.iniciar();  
  }
  
  chequearClicks() {
    // Eventos de mouse escena 0 (Presentación)
    if (this.escena == 0) {
      
      // Click en botón Iniciar juego
      // -------------------------------------------
      if (this.presentacion.botones[0].clickeado()) {
        sonidoClickBoton.play();
        sonidoAmbiental.play();
        this.cambiarEscena(2);
      }
      
      // Click en botón Instrucciones
      if (this.presentacion.botones[1].clickeado()) {
        sonidoClickBoton.play();
        this.cambiarEscena(1);
      }
      
      // Click en botón Créditos
      if (this.presentacion.botones[2].clickeado()) {
        sonidoClickBoton.play();
        this.cambiarEscena(3);
      }
      
      
     
    // Eventos de mouse escena 1 (Instrucciones)
    // -------------------------------------------
    } else if (this.escena == 1) {
      if (this.instrucciones.boton.clickeado()) {
        sonidoClickBoton.play();
        sonidoAmbiental.play();
        this.cambiarEscena(2);
      }
       
    // Eventos de mouse escena 2 (Juego)
    // -----------------------------------------
    } else if (this.escena == 2) {
      if (this.juego.boton.clickeado()) {
        sonidoClickBoton.play();
        sonidoAmbiental.stop();
        this.iniciar();
      }
       
   
    // Eventos de mouse escena 3 (Créditos)
    // -----------------------------------------
    } else if (this.escena == 3) {
      if (this.creditos.boton.clickeado()) {
        sonidoClickBoton.play();
        this.iniciar();
      }
    }
  }
  
  mostrarPantalla() {
    if (this.escena == 0) {
      this.presentacion.mostrar();  
       
    } else if (this.escena == 1) {
      this.instrucciones.mostrar();
       
    } else if (this.escena == 2) {
      this.juego.mostrar();
      
      // Si el juego finalizó, sonidos de fin
      if (this.juego.finalizado && this.juego.ganado) {
        
      }
       
    } else if (this.escena == 3) {
      this.creditos.mostrar();
      
    }
  }
}
