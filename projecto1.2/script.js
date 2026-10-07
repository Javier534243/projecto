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
const columnas = 20

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

crearTablero()

console.log(tableroArray)

function imprimirTablero() {
    let contenidoHtml = ""
    for(let f = 0; f < filas;f++) {
        for(let c = 0;c < columnas;c++) {
            contenidoHtml += `<div class="casilla"></div>`
        }
    }
    tablero.innerHTML = contenidoHtml
}

imprimirTablero()