'use strict';
//Un formulario que nos permita añadir películas.



let form=document.querySelector('#formulario');

form.addEventListener('submit',function(){
	let titulo=document.querySelector('#titulo').value;
	if(titulo.length>=1){
		localStorage.setItem(titulo,titulo);
	};
	
});

let ul = document.querySelector('#peliculas-list');

for (let i in localStorage){

	console.log(localStorage[i]);
	//creo  la etiqueta li 
	if(typeof localStorage[i]=='string'){
		var li= document.createElement("li");
		//le asigno un valor.
		li.append(localStorage[i]);
		ul.append(li);
	}
}





