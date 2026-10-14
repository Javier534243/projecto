import {dibujaUniverso, aleatorio, aleatoriPercentatge, crearMatriz, dibujarUniversoConEstado, comptarVecinosVivos} from "./funcion.js"



// dibujaUniverso(5,5, contenedorPrincipal)

let contadorTrue = 0

for(let i = 0;i < 1000; i++) {
    
    if(aleatoriPercentatge(50)) {
        contadorTrue++
    }
}

console.log(contadorTrue)

const filas = 10
const columnas = 10

const matriz = crearMatriz(filas,columnas)

dibujarUniversoConEstado(matriz)



console.log(comptarVecinosVivos(matriz, 1, 1))