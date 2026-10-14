export function dibujaUniverso(columnas, filas) {
  const contenedorPrincipal = document.querySelector("#contenedorPrincipal");
  let htmlcontenido = `<div class="universo">`;
  for (let i = 0; i <= filas; i++) {
    htmlcontenido += `<div class="fila">`;
    for (let j = 0; j <= columnas; j++) {
      htmlcontenido += `<div class="celula" data-id="${i}-${j}">${i}-${j}</div>`;
    }
    htmlcontenido += `</div>`;
  }
  htmlcontenido += `</div>`;

  contenedor.innerHTML = htmlcontenido;
}

export function aleatorio() {
  if (Math.random() >= 0.5) {
    return true;
  } else {
    return false;
  }
}

export function aleatoriPercentatge(porcentage) {
  if (Math.floor(Math.random() * 101) <= porcentage) {
    return true;
  } else {
    return false;
  }
}

export function crearMatriz(columnas, filas) {
  const arrayBidimensional = [];
  for (let i = 0; i < filas; i++) {
    const filasArray = [];
    for (let j = 0; j < columnas; j++) {
      filasArray.push(aleatorio());
    }
    arrayBidimensional.push(filasArray);
  }
  console.log(arrayBidimensional);
  return arrayBidimensional;
}

export function dibujarUniversoConEstado(matriz) {
  const contenedorPrincipal = document.querySelector("#contenedorPrincipal");
  let htmlcontenido = `<div class="universo">`;
  for (let i = 0; i < matriz.length; i++) {
    htmlcontenido += `<div class="fila">`;
    for (let j = 0; j < matriz[i].length; j++) {
      htmlcontenido += `<div class="celula ${matriz[i][j] === true ? "viva" : "muerta"}" data-id="${i}-${j}">${i}-${j}</div>`;
    }
    htmlcontenido += `</div>`;
  }
  htmlcontenido += `</div>`;

  return (contenedorPrincipal.innerHTML = htmlcontenido);
}

export function comptarVecinosVivos(matriz, x, y) {
    const vivos = 0
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x - 1][y - 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x - 1][y]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x - 1][y + 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x][y - 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x][y + 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x + 1][y - 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x + 1][y]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && y + 1 > matriz.lenght && matriz[y].lenght > x +1) {
    if (matriz[x + 1][y + 1]) {
      vivos++;
    }
  }

  return vivos;
}
