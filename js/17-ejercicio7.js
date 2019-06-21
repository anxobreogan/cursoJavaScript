'use strict';
/*
	Tabla de multiplicar de un número introducido por pantalla.

*/

// let n1;

// n1=parseInt(prompt('Introduce número',0));
// document.write("<h1>Tabla del número " + n1 +"<h1/>");
// for(let i=1;i<=10;i++){
// 	document.write('el número '+ n1+ ' x '+ i +" = "+(i*n1)+"<br/>");
// }

//Todas las tablas.

for(let c=1;c<10;c++){
	document.write('<h1>Tabla '+ c +'</h1>' )
	for(let i=1;i<=10;i++){
		document.write('el número '+ c+ ' x '+ i +" = "+(i*c)+"<br/>");
	}
}