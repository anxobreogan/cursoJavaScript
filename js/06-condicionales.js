'use strict';
//Condicional if.

//si se cumple () ejecuta {}.

var edad=19;
var nombre= "David Suarez";

/*Operadores relacionales
> Mayor
< Menor
>= Mayor o igual
<= Menor o igual
== igual
!= Distinto
*/

if(( edad>=18)){

console.log(nombre + ' '+ 'tiene '+ edad + ' años.');

	if(edad<=33){
		console.log('Todavía eres millernial');
	}else if(edad>=70){
		console.log('Eres anciano');
	}else{
		console.log('Ya no eres millernial');
	}

}else{
	console.log(nombre + ' '+ 'tiene '+ edad + ' años.'+ ' Menor de edad.');	
}

//Operadores lógicos.

/*
	AND: &&,
	OR: ||
	NEACIÓN,CONTRARIO: !

*/

//Negación.

var year= 2036;

if(year !=2016 ){
	console.log("El año no es 2016");
}

//AND

if(year>= 2000 && year<=2020){
	console.log('Ok');
}else{
	console.log('Mal vamos');
}

//OR

if(year==2008 || (year>=2018 && year==2020)){
	console.log('El año acaba en 8');
}else{
	console.log('Año no registrado');
}


