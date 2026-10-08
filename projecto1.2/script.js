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

const celdas = 15

const filas = 16

const tableroArray = []

function rellenarArray() {
    for(let f = 0;f < filas;f++) {
        const filaNueva = []
        
        for(let c = 0; c < celdas;c++) {
            filaNueva.push(0)
        }
        tableroArray.push(filaNueva)
        
    }

}

function generarEnemigos() {
    for(e = 0;e < 5;e++) {
        fvalor = Math.floor
    }
}

rellenarArray()

console.log(tableroArray)


function imprimirTablero() {
    let contenidoHtml = ""
    for(let f = 0;f < filas;f++) {
        for(let c = 0;c < celdas;c++) {
            contenidoHtml += `<div class="celda"></div>`
        }
    }
    tablero.innerHTML = contenidoHtml
}

imprimirTablero()