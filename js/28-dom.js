'use strict';


//DOM - document object model.

function cambiaColor(color){
	caja.style.background=color;
}
//Conseguir un elemento con un ID concreto
//var caja =document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML="hola desde JS";

caja.style.background="red";

caja.style.padding="20px";

//Conseguir elementos por su etiqueta.

var todosLosDivs=document.getElementsByTagName('Div');
var contenidoTexto=todosLosDivs[2];
var seccion=document.querySelector("#miseccion");
var hr= document.createElement("hr");
contenidoTexto.innerHTML="otro texto para el segundo";
contenidoTexto.style.color="green";


var valor;
for (valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var  parrafo = document.createElement("p");
		var texto= document.createTextNode(todosLosDivs[valor].textContent);

		parrafo.append(texto);
		seccion.append(parrafo);
	}
	
};

//Conseguir elementos por su id.

var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background="black";
for (let div in divsRojos){
	if(divsRojos[div].className=="rojo"){

		divsRojos[div].style.background="red";

	}

};


