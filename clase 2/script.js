let jugada = parseInt(prompt("Ingrese piedra(1), papel(2) o tijera(3)"));
let compu = parseInt(Math.random()*3+1);
console.log("jugador "+ jugada);
console.log("compu "+ compu);
let resultado = "no se jugo";

function setValidador() {
    let validador = false;
    if(jugada !== null) {
        validador = true;
    }
    return validador;
}

let validador = setValidador();

function round (valor){
    switch(true){
        case (jugada==1 && compu==2):
            resultado="ganaste";
        break;
        case (jugada==1 && compu==3):
            resultado="perdiste";
        break;
        case (jugada==2 && compu==1):
            resultado="ganaste";
        break;
        case (jugada==2 && compu==3):
            resultado="perdiste";
        break;
        case (jugada==3 && compu==1):
            resultado="perdiste";
        break;
        case (jugada==3 && compu==2):
            resultado="ganaste";
        break;
        default:
            resultado="empate";
    }

}


alert(resultado);
