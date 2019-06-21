'use strict';

/*
	Hacer un programa que nos diga si el número introducido es  par o impar.
*/
let n1;
do{
 n1=parseInt(prompt("Introduce númerito",0));
}while(isNaN(n1));

if((n1%2)==0){
	console.log('El número '+ n1 + ' es par.');
}else{
	console.log('El número '+ n1 + ' es impar');
};
