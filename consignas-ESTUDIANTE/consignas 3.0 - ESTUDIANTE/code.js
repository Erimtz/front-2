/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

let nombreUsuario;
let edadUsuario;
let anoActual = 2022;
let ciudadUsuario;
let interesUsuario;


function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
nombreUsuario = prompt("Por favor introduzca su nombre");
console.log(nombreUsuario);
edadUsuario = prompt("Por favor introduzca el año en que nació");
console.log(edadUsuario);

edadUsuario =  anoActual - edadUsuario 
console.log(edadUsuario);

ciudadUsuario = prompt("Por favor introduzca su ciudad");
console.log(ciudadUsuario);
interesUsuario = confirm("¿Le interesa JavaScript?");
console.log(interesUsuario);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
let nombre = document.getElementById("nombre");
nombre.innerHTML = nombreUsuario;

document.getElementById("edad").innerHTML = edadUsuario;
document.getElementById("ciudad").innerHTML = ciudadUsuario;
document.getElementById("javascript").innerHTML = interesUsuario;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let hayCajas = document.querySelector('.caja');
 
  if(hayCajas == null){
    console.log("No hay cajas, se van a crear");

    listado.forEach(e => {

      let caja = document.createElement("div");
      caja.classList.add("caja");
      
      let parrafo = document.createElement("p");
      console.log(parrafo);
      parrafo.classList.add("bimestre")
      parrafo.innerText = e.bimestre;
      
      let parrafo2 = document.createElement("p");
      parrafo2.classList.add("lenguajes")
      parrafo2.innerText = e.lenguajes;
  
      let imagen = document.createElement("img");
      
      imagen.setAttribute("src", e.imgUrl);
      imagen.setAttribute("alt", e.lenguajes);
    
      caja.appendChild(parrafo);
      caja.appendChild(imagen);
  
      document.getElementById("fila").appendChild(caja);
    });
  }
}

function alternarColorTema() {
 /* ------------------ PUNTO 4: Escribe tu codigo desde aqui ------------------ */
  if (cambiarTema) {
    let body = document.querySelector('#sitio');
    body.classList.add('dark');

    let items = document.getElementsByClassName('cambiarTema');
    for (cambiarTema of items) {
      cambiarTema.classList.add('dark'); 
    }
  }
}

/* const site = document.querySelector("#sitio")
site.classList.toggle('dark')
} */
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let sobreMi = document.querySelector("#sobre-mi");

document.onkeydown = function(event) {
  const key = event.key; 
  if (key == "F"|| key =="f") {
    sobreMi.classList.remove("oculto");
 }
}




