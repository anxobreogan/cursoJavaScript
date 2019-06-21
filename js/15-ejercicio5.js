'use strict';
/*
	Mostrar los números divosores de un número que se introduce.
*/

let n1= parseInt(prompt ("Introduce un número para ver su divisor",0));

for( let i=1;i<=n1;i++){
	if((n1%i)==0){
		console.log('El divisor es: ' + i)
	}
}