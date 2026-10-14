import {dibujaUniverso, aleatorio, aleatoriPercentatge, crearMatriz, dibujarUniversoConEstado} from "./funcion.js"



// dibujaUniverso(5,5, contenedorPrincipal)

let contadorTrue = 0

for(let i = 0;i < 1000; i++) {
    
    if(aleatoriPercentatge(50)) {
        contadorTrue++
    }
}

console.log(contadorTrue)

dibujarUniversoConEstado(crearMatriz(5,5))