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

// console.log(usuario);
localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objeto JSon.stringify.

let userJs=JSON.parse(localStorage.getItem('usuario'));

console.log(userJs);

document.querySelector('#peliculas').append(userJs.mail);