'use strict';

/*
	Programa que pida 2 numeros, que nos diga
	cual es mayor, cual es menor y son  iguales.
*/

do{
	var numero1=prompt("Ingresa numero 1",0);
	var numero2=prompt("Ingresa numero 2",0);
}while((numero1 && numero2)<0 || (numero1 && numero2)==NaN);
//console.log(numero1,numero2);;
var n1=Number(numero1);
var n2= Number(numero2);

if(n1==n2){
	alert("Ambos números son iguales");
}else if(n1>n2){
	alert("El número 1 es mayor que el número 2");
}else if( n2>n1){
	alert("El número 2 es mayor que el primero")
}
