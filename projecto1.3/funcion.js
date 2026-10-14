export function dibujaUniverso(columnas, filas, contenedor) {
    let htmlcontenido = `<div class="universo">`
    for(let i = 0;i <= filas ;i++) {
        htmlcontenido += `<div class="fila">`
        for(let j = 0;j <= columnas;j++) {
            htmlcontenido += `<div class="celula" data-id="${i}-${j}">${i}-${j}</div>`
        }
        htmlcontenido += `</div>`
    }
    htmlcontenido += `</div>`

    contenedor.innerHTML = htmlcontenido
}