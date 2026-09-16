console.log("Hola");

let numero = Math.floor(Math.random() * 100) + 1;

let contador = 0;

let puntuacionContador = 0;

let historial = document.querySelector("#historial");

let historialArray = [];

const boton = document.querySelector("#boton");

const botonReiniciar = document.querySelector("#reiniciar");

let input = document.querySelector("#input");

botonReiniciar.addEventListener("click", () => {
  contador = 0;
  numero = Math.floor(Math.random() * 100) + 1;
  mensaje.textContent = "Numero de intentos: " + contador;
  input.value = "";
});

boton.addEventListener("click", () => {
  if (contador < 10) {
    if (input.value == "" || input.value < 1 || input.value > 100) {
      alert("Pon un numero del 1 al 100");
    } else if (input.value == numero) {
      alert("Has acertado");
      puntuacionContador += 10 - contador;
      puntuacion.textContent = "Puntuación: " + (puntuacionContador);
      contador = 0
    } else if (input.value < numero) {
      alert("El numero es mayor");
      contador++;
      mensaje.textContent = "Numero de intentos: " + contador;
    } else {
      alert("El numero es menor");
      contador++;
      mensaje.textContent = "Numero de intentos: " + contador;
    }
  } else {
    alert("Has perdido el numero era: " + numero);
  }
  historialArray.push(puntuacionContador);
  pintarHistorial(historialArray);
});

function pintarHistorial(array) {
  let tabla = "<table>"
  for (let i = 0; i < array.length; i++) {
    tabla += "<tr><td> Puntuación partida " + (i+1) + ": " + array[i] + "</td></tr>";
  }
  tabla += "</table>";
  historial.innerHTML = tabla;
}