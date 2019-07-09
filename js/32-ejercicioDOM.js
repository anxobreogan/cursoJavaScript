'use strict';
window.addEventListener('load',function(){
	console.log('DOM!!!');

	let hola=document.querySelector('#formulario');
	let box_dashed= document.querySelector('.dashed');
	box_dashed.style.display="none";

	hola.addEventListener('submit',function(){	
	

	let name= document.querySelector('#campo_nombre').value;
	let surname= document.querySelector('#campo_apellido').value;
	let age=parseInt(document.querySelector('#campo_edad').value);
	
	if(name.trim()==null || name.trim().length==0 || !isNaN(name)){
		//alert('El nombre no es vaslido');
		document.querySelector("#campo_nombre").style.backgroundColor = "red";
		return false;
		
	}
	if(surname.trim()==null || surname.trim().length==0 || !isNaN(surname)){
		alert('El apellido no es válido');
		return false;
	}
	if(age==null || age.length>=0 || isNaN(age)){
		alert('La edad no es válida');
		return false;
	}
		box_dashed.style.display="block";

		let datos_usuario=[name,surname,age];
		for (let indice in datos_usuario){
			let parrafo= document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}


	
	});

});

