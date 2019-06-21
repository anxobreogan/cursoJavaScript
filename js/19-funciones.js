'use strict';

//Funciones.
//Una función es una agrupación reutilizable de código.

let n1;
let n2;


n1=parseInt(prompt("Introduce número 1",0));
n2=parseInt(prompt("Introduce número 2",0));

function calculadora(n1,n2,mostrar=false){

	console.log("La suma es: " + (n1+n2));
	console.log("La resta es: " + (n1-n2));
	console.log("La división es: " + (n1/n2));
	console.log("La multiplicación es: " + (n1*n2));
	console.log("*************************");
if (mostrar==true){

	document.write("La suma es: " + (n1+n2));
	document.write("La resta es: " + (n1-n2));
	document.write("La división es: " + (n1/n2));
	document.write("La multiplicación es: " + (n1*n2));
	document.write("*************************");


}

}
calculadora(n1,n2,true);


