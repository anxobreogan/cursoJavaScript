'use strict';
//Parámetros de rest y spread.

let n1;
let n2;

function listadoFrutas(fruta1,fruta2,...resto_de_frutas){

	console.log("fruta 1:" ,fruta1);
	console.log("fruta 2:" ,fruta2);
	console.log(resto_de_frutas);

};

listadoFrutas("manzana","naranja","melon","sandia","pera","coco");

let frutas=['naranja','manzana'];

listadoFrutas(...frutas,"manzana","naranja","melon","sandia");


//***********************************

// function suma(n1,n2){
// 	return n1+n2;
// };

// function resta(n1,n2){

// 	return n1-n2;
// };

// function operaciones(n1,n2){

// 	console.log("La suma es: " +suma(n1,n2));
// 	console.log("La resta es: " + resta(n1,n2));
// };

// operaciones(4,2);



