'use strict';
window.addEventListener('load',function(){
	console.log('DOM!!!');

	let box_dashed= document.querySelector('.dashed');


	let formulario=document.querySelector("#formulario");

	box_dashed.style.display="none";

	formulario.addEventListener('submit',function(){
		//console.log('hola');

		let nombre= document.querySelector('#campo_nombre').value;
		let apellido=document.querySelector('#campo_apellido').value;
		let edad=document.querySelector('#campo_edad').value;
		box_dashed.style.display="block";
		console.log(nombre,apellido,edad);

		let parrafo=document.createElement("p");
		
	});
	
});

