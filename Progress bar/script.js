const tiempoDeCarga = 5000;

function animarBarra() {
// Selecionamos el elemento barra
let elemento = document.getElementById("barra");

// Inicializamos el progreso en 0, para asegurarnos
// que siempre empieze desde el principio
let width = 0;

// Calculamos el progreso en base al tiempo total de carga
const progresoSobreTiempoTotal = tiempoDeCarga / 100;

// Creamos un intervalo que se repita en el tiempo que calculamos 
// anteriormente para la iteración
let id = setInterval(incrementarProgreso, progresoSobreTiempoTotal);

function incrementarProgreso() {
    // Si el progreso esta completo, detenemos el programa
    if (width >= 100) {
        clearInterval(id);
    }else{
        width++;

        // Modificamos el DOM, para impactar de nuevo en el progreso
        elemento.style.width = width + "%";
        elemento.innerHTML = width + "%"; 
    }
  }
}

document.querySelector("#iniciarCarga").addEventListener("click", animarBarra);