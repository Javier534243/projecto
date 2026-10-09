function dqs(sel) {
  return document.querySelector(sel);
}

const contenedorBienvenida = dqs("#contenedorBienvenida");

const botonIniciar = dqs("#botonIniciar");

const contendorJuego = dqs("#contendorJuego");

const datosJuego = dqs("#datosJuego");

const tablero = dqs("#tablero");

const informacionDelNivel = dqs("#informacionDelNivel")

botonIniciar.addEventListener("click", () => {
  contenedorBienvenida.classList.add("hidden");
  contendorJuego.classList.remove("hidden");
  informacionDelNivel.innerHTML = `<div>+200 puntos por enemigo</div><div></div>`
});


function tiempo() {
  setTimeout()
}


const celdas = 16;

const filas = 16;

let enemigosComidos = 0;

const enemigos = [];

const padman = {
  filaActual: filas / 2,
  celdaActual: celdas / 2,
  score: 0,
  moverPacman: function () {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      tableroArray[this.filaActual][this.celdaActual] = 0;
      if (contenedorBienvenida.classList.contains("hidden")) {
        if (e.key === "ArrowUp") {
          if (this.filaActual !== 0) {
            this.filaActual--;
          }
        } else if (e.key === "ArrowDown") {
          if (this.filaActual !== filas - 1) {
            this.filaActual++;
          }
        } else if (e.key === "ArrowRight") {
          if (this.celdaActual !== celdas - 1) {
            this.celdaActual++;
          }
        } else if (e.key === "ArrowLeft") {
          if (this.celdaActual !== 0) {
            this.celdaActual--;
          }
        }
      }
      comerEnemigo(this.filaActual, this.celdaActual);
      tableroArray[this.filaActual][this.celdaActual] = 2;
      imprimirTablero();
      comprobadorVictoria();
    });
  },
};

function imprimirDatos() {
  let htmlContenido = "";
  htmlContenido += `<div>Enemigos comidos: ${enemigosComidos}/5</div>`
  htmlContenido += `<div>Puntuacion actual: ${padman.score}</div>`

  datosJuego.innerHTML = htmlContenido;
}

function comerEnemigo(f, c) {
  if (tableroArray[f][c] === 1) {
    enemigosComidos++;
    for (const enemigo of enemigos) {
      if (enemigo.fila == f && enemigo.celda == c) {
        enemigo.vivo = false;
        padman.score += 200
      }
    }
    console.log(enemigos);
    imprimirDatos();
  }
}

function comprobadorVictoria() {
  if (enemigosComidos === 5) {
    alert("¡Has ganado!");
    resetearJuego()
    console.log(tableroArray);
  }
}

const tableroArray = [];

imprimirDatos();

function rellenarArray() {
  for (let f = 0; f < filas; f++) {
    const filaNueva = [];

    for (let c = 0; c < celdas; c++) {
      if (c == padman.celdaActual && f == padman.filaActual) {
        filaNueva.push(2);
      } else {
        filaNueva.push(0);
      }
    }
    tableroArray.push(filaNueva);
  }
}

function resetearJuego() {
  enemigosComidos = 0
  padman.filaActual = filas/2
  padman.celdaActual = celdas/2
  for (let f = 0; f < filas; f++) {
    for(let c = 0; c < celdas;c++) {
      if(c == padman.celdaActual && f == padman.filaActual) {
        tableroArray[f][c] = 2
      } else {
        tableroArray[f][c] = 0
      }
      
    }
  }
  imprimirDatos();
  generarEnemigos()
  imprimirTablero()
}

function generarEnemigos() {
  for (let e = 0; e < 5; e++) {
    let interptor = false;

    while (interptor == false) {
      let fValor = Math.floor(Math.random() * filas);
      let cValor = Math.floor(Math.random() * celdas);
      if (tableroArray[fValor][cValor] == 0) {
        let tipoEnemigo = Math.floor(Math.random() * 3)
        tableroArray[fValor][cValor] = 1;
        if (enemigos[e]) {
          enemigos[e].fila = fValor
          enemigos[e].celda = cValor
          enemigos[e].vivo = true
          enemigos[e].tipo = tipoEnemigo
        } else {
          enemigos.push({
            fila: fValor,
            celda: cValor,
            vivo: true,
            tipo: tipoEnemigo,
          });
        }
        
        interptor = true;
      }
    }
  }
}

rellenarArray();

generarEnemigos();

function imprimirTablero() {
  let contenidoHtml = "";
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < celdas; c++) {
      if (tableroArray[f][c] == 0) {
        contenidoHtml += `<div class="celda"></div>`;
      } else if (tableroArray[f][c] == 1) {
        for (const enemigo of enemigos) {
          if (f === enemigo.fila && c === enemigo.celda) {
            contenidoHtml += `<div class="celda enemigo"><img class="imagen" src="img/enemigo${enemigo.tipo}.png"></div>`;
          }
        } 
      } else if (tableroArray[f][c] == 2) {
        contenidoHtml += `<div class="celda pacman"><img class="imagen" src="img/pacman.png"></div>`;
      }
    }
  }
  tablero.innerHTML = contenidoHtml;
}

console.log(enemigos)

imprimirTablero();

padman.moverPacman();
