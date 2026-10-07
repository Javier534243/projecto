function dqs(sel) {
    return document.querySelector(sel)
}

const pantallaInicio = dqs("#pantallaInicio")

const boton = dqs("#boton")

boton.addEventListener("click", () => pantallaInicio.classList.add("hidden"))

