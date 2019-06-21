'use strict';
/*
	Mostrar los números impares,que esten entre dos números que introducimos por teclado.
*/


	let n1=parseInt(prompt("Introduce primer número",0));
	let n2=parseInt(prompt("Introduce segundo número",0));




if (isNaN(n1)||isNaN(n2)){
	console.log("no son números");
	insert();
}else{
	for(let i=n1;i<=n2;i++){
		//document.write("El número es: "+ i + "<br/>");
		if((i%2)!=0){
			document.write("El número es: "+ i + "<br/>");
		}
	}
};





