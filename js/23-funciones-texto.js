'use strict';
//transformación de textos.

var numero= 444;
var texto1="Bienvenido al curso de JS de Victor Robles";
var texto2= "Es un gran curso";
//toLowerCase(); MAYUSCULAS.
//toUpperCase();minusculas.
//toString(); pasar a string-


//var dato=numero.toString();
//dato=texto1.toLowerCase();

//console.log(dato);

//Calcular longitud.

//.length;Es una propiedad.

//var nombre= "Anxo Breogan";

//console.log(nombre.length);

//Concatenar.

//var textoTotal= texto1+texto2;
//textoTotal= texto1.concat(" "+texto2);

//console.log(textoTotal);


//indexOf();busqueda la primera coincidencia.
//lastIndexOf(); la última coincidencia.
//search(), busca la coincidencia.
//match,nos lo busca en un array,
//substr(14,5), a partir del indice 14, saca 5 más adelante.
//charAt(12), saca la letra 12 del string.
//startsWith(""); busca al inicio del string. Devuelve true o false.
//endsWhits
//.includes("curso"); busca en la string. 



//var busqueda= texto1.match("curso");

//console.log(busqueda);

//**Funciones de reemplazo.

/*var busqueda= texto1.slice("curso","cursazo!!");
console.log(busqueda);*/

//***Funcion slice corta la cadena string.

// var busqueda=texto1.slice(14,22);
// console.log(busqueda);

//**Split,  mete en un array y puede serparar por lo que le diga.

// var busqueda=texto1.split(" ");
// console.log(busqueda);

//***Trim, achica los espacios, por delante y detrás de la cadena.

var busqueda=texto1.trim();
console.log(busqueda);





