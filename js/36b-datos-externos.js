'use strict';

let todos=[];
let div_users=document.querySelector('#usuarios');

getUsuarios()
//recibimos y convertimos a JSON
	.then(response=>response.json())
	//ahora en response tenmos ya JSON.
	.then(response=>{
		todos=response;
		console.log(todos);
		//ahora estan en todos.
		//los vamos a meter en la página, con map, callback con arrya e indice
		mostrarUsers();
		return getInfo();
		
	})
	.then (data=>{
		console.log(data);
	});


function mostrarUsers(){
	todos.map((todos,index)=>{
			let nombre=document.createElement('h3');
			nombre.innerHTML= index + todos.name;
			div_users.appendChild(nombre);
	});
};

function getUsuarios(){
	return fetch('https://jsonplaceholder.typicode.com/users');
};

function getInfo(){
	let profesor= {
		nombre:'Anxo',
		apellidos:'Fuentes',
		mail:'anxo@mail.com'
	};
	return new Promise((resolve,reject)=>{
		let profStr=JSON.stringify(profesor);

		if(typeof profStr !='string') return reject(error);

		return resolve(profStr);
	});
	
	

}









	



