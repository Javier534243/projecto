function dqs(sel) {
    return document.querySelector(sel)
}

const contenedorBienvenida = dqs("#contenedorBienvenida")

const botonIniciar = dqs("#botonIniciar")

const contendorJuego= dqs("#contendorJuego")

const tablero = dqs("#tablero")

botonIniciar.addEventListener("click", () => {
    contenedorBienvenida.classList.add("hidden")
    contendorJuego.classList.remove("hidden")
    
})

const celdas = 16

const filas = 16

const padman = {
    filaActual: filas/2,
    celdaActual: celdas/2,
    moverPacman: function() {
        window.addEventListener('keydown', (event) => {
            tableroArray[this.filaActual][this.celdaActual] = 0
            if ((event.key) === 'ArrowUp') {
                if (this.filaActual !== 0) {
                    this.filaActual--
                } 
                
            } else if (event.key === 'ArrowDown') {
                if (this.filaActual !== filas-1) {
                    this.filaActual++
                } 
            } else if (event.key === 'ArrowRight') {
                if (this.celdaActual !== celdas-1) {
                    this.celdaActual++
                }
                
            } else if (event.key === 'ArrowLeft') {
                if (this.celdaActual !== 0) {
                    this.celdaActual--
                }
                
            }
            tableroArray[this.filaActual][this.celdaActual] = 2
            imprimirTablero()
        })
    }
}

const tableroArray = []

function rellenarArray() {
    for(let f = 0;f < filas;f++) {
        const filaNueva = []
        
        for(let c = 0; c < celdas;c++) {
            if(c == padman.celdaActual && f == padman.filaActual) {
                filaNueva.push(2)
            }
            filaNueva.push(0)
        }
        tableroArray.push(filaNueva)
        
    }

}

function generarEnemigos() {
    for(e = 0;e < 5;e++) {
        let interptor = false;

        while(interptor == false) {
            fValor = Math.floor(Math.random() * filas)
            cValor = Math.floor(Math.random() * celdas)
            if(tableroArray[fValor][cValor] == 0) {
                tableroArray[fValor][cValor] = 1
                interptor = true
            }

        }
    }
}

rellenarArray()

generarEnemigos() 

console.log(tableroArray)


function imprimirTablero() {
    let contenidoHtml = ""
    for(let f = 0;f < filas;f++) {
        for(let c = 0;c < celdas;c++) {
            if (tableroArray[f][c] == 0) {
                contenidoHtml += `<div class="celda"></div>`
            } else if (tableroArray[f][c] == 1) {
                contenidoHtml += `<div class="celda enemigo"></div>`
            } else if (tableroArray[f][c] == 2) {
                contenidoHtml += `<div class="celda pacman"></div>`
            }
            
        }
    }
    tablero.innerHTML = contenidoHtml
}

imprimirTablero()

padman.moverPacman()
