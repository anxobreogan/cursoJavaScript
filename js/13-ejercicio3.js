'use strict';

/*
	Hacer un programa que muestre todos los numeros entre dos
	números introducidos.
*/

let n1= parseFloat(prompt("Introduce el número 1"),0);
let n2 = parseFloat(prompt("Introduce el número 2"),0);

if(isNaN(n1) || isNaN(n2)){
	alert( "no son números")
} else{

	for (let i=n1;i<=n2;i++){
		document.write('Este es el número: ' +i+"<br/>" ); 
	}
}