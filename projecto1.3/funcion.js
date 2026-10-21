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

export function crearMatriz(matriz, columnas, filas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const filasArray = [];
    for (let j = 0; j < columnas; j++) {
      filasArray.push(aleatorio());
    }
    matriz.push(filasArray);
  }
  console.log(matriz);
  return matriz;
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

export function comptarVecinosVivos(matriz, y, x) {
  let vivos = 0;
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length ) {
   console.log("ddd")
    if (matriz[y - 1][x - 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length ) {
    if (matriz[y - 1][x]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length) {
    if (matriz[y - 1][x + 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length) {
    if (matriz[y][x - 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length) {
    if (matriz[y][x + 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length) {
    if (matriz[y + 1][x - 1]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length) {
    if (matriz[y + 1][x]) {
      vivos++;
    }
  }
  if (x - 1 !== -1 && y - 1 !== -1 && x +1 < matriz.length && y +1 < matriz[y].length) {
    if (matriz[y + 1][x + 1]) {
      vivos++;
    }
  }

  return vivos;
}

export function evolucionarCelula(matriz, y, x) {
  const valor = comptarVecinosVivos(matriz, y, x)
  let veredicto = false
  if(matriz[y][x]) {
    if (valor < 2) {
      veredicto = false
    }else if (valor === 2 || valor === 3) {
      veredicto = true
    } else if(valor > 3) {
      veredicto = false
    }
  }
  if(!matriz[y][x] && valor === 3) {
    veredicto = true
  }
  dibujarUniversoConEstado(matriz)
  matriz[y][x] = veredicto
  return matriz[y][x]
}


export function crearMatrizEvolucionada(matrizActual) {
  crearMatriz(matrizActual, columnas, filas)
  for(let y = 0;y < matrizActual.length;y++) {
    for(let x = 0;x < matrizActual[y].length;x++) {
      evolucionarCelula(matrizActual,y,x)
    }
  }
  dibujarUniversoConEstado(matrizActual)
}