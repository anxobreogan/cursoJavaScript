'use strict';

//Localstorage.

//Guardar datos en localstorage.

localStorage.setItem("Titulo","Curso js");

//Recuperar elemento del localStorage.

let ls=(localStorage.getItem("Titulo"));

document.querySelector('#peliculas').innerHTML=ls;

//Guardar JSON el LocalStorage.

let usuario= {
	nombre:'Anxo',
	mail:'anxo@mail.com'
};


let compra=[{
	producto:'camisa',
	precio:'15'
},
{
	producto:'pantalon',
	precio:'20'
}];

// console.log(usuario);
localStorage.setItem("compra",JSON.stringify(compra));

//recuperar objeto JSon.stringify.

let userJs=JSON.parse(localStorage.getItem('usuario'));
let comprados=JSON.parse(localStorage.getItem('compra'))
//console.log((comprados[0]));

let total=0;
comprados.forEach(function(item){
	let numero=parseInt(item.precio);
	total=total+numero;
	// console.log(typeof(numero));
	
});



console.log(`La suma total es ${total}`);



