'use strict';
let divUsuarios= document.querySelector('#usuarios');
//Fetch.- le paso la URL.
let users=[];
getUsuarios()
// recojo en el primer then, los datos y lo convierto a JSON.
	.then(response=>response.json())
	.then(response=>{
		users=response;
		console.log(users);
		listadoUsuarios(users);

		return getTodos();		
	});

	.then(response=>response.json())
	.then(response=>{

	})

function getUsuarios(){
	return fetch('https://jsonplaceholder.typicode.com/users');
};
function mostrarTodos(){

};
function getTodos(){
	return fetch('https://jsonplaceholder.typicode.com/todos');
};
function listadoUsuarios(usuarios){
	users.map((users,i)=>{
			let nombre= document.createElement('h3');
			nombre.innerHTML= i+users.name + " " + users.email;
			divUsuarios.appendChild(nombre);
			document.querySelector('.loading').style.display="none";
		});
};


