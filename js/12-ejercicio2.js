'use strict';
/*
	Utiliza un bucle para hallar la media y la suma,
	de dos numeros introducidos por el usuario.
*/
var n2=0;
var contador=0;
var media;
do{

var n1= parseInt(prompt("Ingresa numero",0));

if(n1>=0){
	n2=n1+n2;
	contador=contador+1;
	media=n2/contador;
	console.log("Número "+ n1+ " en tirada " + contador + " acumulado " + n2);
}
}while(n1>=0);

console.log("La suma es =" + n2);
console.log("La media es =" + media);
