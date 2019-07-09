'use strict';

//DOM.

function cambiaColor(color){
	caja.style.background=color;
}

//let caja=document.getElementById("micaja");

let caja=document.querySelector("#micaja");

caja.innerHTML="TEXTO EN LA CAJA DESDE JS";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";

caja.className="hola hola3";

//console.log(caja);

//Elementos por sus etiquetas.

/*var todosLosDivs= document.getElementsByTagName('div');

for (let valor in todosLosDivs){
	todosLosDivs[valor].textContent;

}

console.log(mostrar);*/

//Selecccionar por clases

let divRojos= document.getElementsByClassName('rojo');
for(let valor in divRojos){
	if(divRojos[valor].className=="rojo"){
	let foo=(divRojos[valor]);
	divRojos[valor].style.background='red';
	}

}

