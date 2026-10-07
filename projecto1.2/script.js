import {dqs} from "./functions.js"

const pantallaInicio = dqs("#pantallaInicio")

const boton = dqs("#boton")

const tablero = dqs("#tablero")

const juego = dqs("#juego")

boton.addEventListener("click", () => {
    pantallaInicio.classList.add("hidden")
    juego.classList.remove("hidden")
})

const filas = 15
const columnas = 15

const tableroArray = []

function crearTablero() {
    for(let f = 0;f <filas;f++) {
        const filaNueva = []
        for(let c = 0;c < columnas;c++) {
            filaNueva.push(0)
        }
        tableroArray.push(filaNueva)
    }
}

function colocarFantamasAleatorios(cantidad) {
    let fantamasColocados = 0

    while (fantamasColocados < cantidad) {

        const fRandom = Math.floor(Math.random() * filas)
        const cRandom = Math.floor(Math.random() * columnas)

        if (tableroArray[fRandom][cRandom] === 0) {
            tableroArray[fRandom][cRandom] = 1
            fantamasColocados++
        }

    }
}
console.log(tableroArray)
crearTablero()
colocarFantamasAleatorios(5)

function imprimirTablero() {
    let contenidoHtml = ""
    for(let f = 0; f < filas;f++) {
        for(let c = 0;c < columnas;c++) {
            contenidoHtml += `<div class="casilla" data-f="${f}" data-c="${c}"></div>`
        }
    }
    tablero.innerHTML = contenidoHtml
}

imprimirTablero()