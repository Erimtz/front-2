// alert("Esto es un alerta!")


//Recordemos que por sí solo el método no almacena ningún dato, pero si almacenamos el valor retornado en una variable, lo podremos utilizar como información. 
/*]let confirmación = confirm("¿Estas seguro de aceptar esta confirmación?");
console.log(confirmación);*/

/*prompt("Ingresa tu nombre completo");*/

// Si almacenamos en una variable podremos utilizar el prompt para el resto del programa
/*let nombreUsuario = prompt("Ingresa tu nombre completo");
console.log(nombreUsuario);*/

//window con variable
/*let tratoPersonalizado = confirm("¿Desea un trato personalizado?")

            if(tratoPersonalizado){
                let nombre = prompt("Por favor, introduzca su nombre");
                alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas     gracias por visitarnos, estamos a su disposición! ?");
            } else {
                alert("Gracias por conectarse.")
            }*/

// Al realizar esto así se concatena más no se suma edad+2021            
/*let edad = prompt("ingrese su edad");
console.log(edad+2021);*/

// Sin almacenar variables no se puede  hacer nada con el resultado
/*parseInt("22");
parseInt(prompt("Ingrese edad"));*/

/*let a = parseInt("22");
let b = parseInt(prompt("Ingrese edad"));
let c = parseInt("22"+"150");
let d = parseInt(22+150)
let e = parseInt(22+parseInt("150"));
let f = parseInt(22.55);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);*/

/*console.log(parseFloat(22.34));
console.log(parseFloat(22.3456284));

console.log(parseInt("Jeloou"));*/

let edad = parseInt(prompt("Ingrese su edad"));
if(edad>18){
console.log("Es mayor de edad");
}else{
console.log("Es menor de edad");
}
