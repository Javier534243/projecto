function dqs(sel) {
    return document.querySelector(sel)
}

const contenedorBienvenida = dqs("#contenedorBienvenida")

const botonIniciar = dqs("#botonIniciar")

const contendorJuego= dqs("#contendorJuego")

botonIniciar.addEventListener("click", () => {
    contenedorBienvenida.classList.add("hidden")
    contendorJuego.classList.remove("hidden")
    
})

