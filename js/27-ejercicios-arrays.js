'use strict';

/*
Enunciado.-

	*Hacer un programa que:
	1.-Pida 6 números por pantalla y los meta en un array.Ok
	2.-Mostrar el array entero por pantalla y por consola.Ok
	3.-Sacar el array ordenado y mostrarlo.Ok
	4.-Invertir su orden y mostrarlo.Ok
	5.-Mostrar cuantos elementos tiene el arrya.
	6.-Buscar un valor introducido por el usuario. Que nos diga
	si lo encuentra y que nos diga su posición.
*/

let arr=[];
let contador=0;
do{
	contador+=1;
let introduce=parseInt(prompt('Introduce 6 número',0));
arr.push(introduce);
}while(contador<6);
let ordenado= arr.sort((a,b)=>a-b);
document.write(ordenado+"</br>");
console.log(ordenado);
//array invertido.
let arrInvertido= arr.reverse();
document.write(arrInvertido+"</br>");
console.log(arrInvertido);
//Cuantos elementos tiene el array 5.
console.log("El array tiene "+arr.length+" elementos");
let busqueda=parseInt(prompt("METE NUMERITO",0));
let confirmar=arr.some(function(entrada){
	return entrada==busqueda;	

});

if (confirmar){
	var indice=arr.findIndex(function (item){
		return item== busqueda;
	});
};


console.log(confirmar);
console.log(`El número ${busqueda} está en el índice ${indice}`);
