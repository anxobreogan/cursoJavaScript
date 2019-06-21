'use strict';

/*
	Calculadora que pida dos números por pantalla.
	Si se meta uno mal que nos vuelva a pedir números.
	Que muestre en el body, de la página, el resultado de
	sumar, restar, multiplicar y dividir ambas cifras.

*/
let n1;
let n2;


function insert(){

	n1=parseInt(prompt("introduce numero 1"));
	n2=parseInt(prompt("introduce numero 2"));

	let b=9;

	return b;
};

function suma(){

	return (n1+n2);
}

function division(){
	return (n1/n2);
}

function producto(){
	return n1*n2;
}

function resta(){
	return (n1-n2);
}


//console.log(isNaN(n1));
while(isNaN(n1) || isNaN(n2) || n1==0 || n2==0){
n1=parseInt(prompt("introduce numero 1"));
n2=parseInt(prompt("introduce numero 2"));
}
if ((isNaN(n1)==false && isNaN(n2)==false)){
	document.write("la funcion suma me dice que: " +suma() + "<br/>");
	document.write("la funcion división me dice que: " +division()+ "<br/>");
	document.write("la funcion suma me dice que: " +producto()+ "<br/>");
	document.write("la funcion resta me dice que: " +resta()+ "<br/>");
	}alert("La suma es: "+ suma() +"\n" + "La resta es: " + resta() +"\n");