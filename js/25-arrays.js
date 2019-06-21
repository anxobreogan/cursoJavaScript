'use strict';

//Arrays. Coleccion de valores.


var nombres=["Anxo Fuentes"," Diego Eiroa","Enrique Balado",52,true,];

var lenguajes= new Array("Go","PHP","JS","Java");



/*var elemento=parseInt(prompt("Que elemento quieres",0));
if(elemento>= nombres.length){

	alert('Introduce el numero menor que '+nombres.length)

}else{
	alert('El usuario seleccionado es '+ nombres[elemento])
}*/

document.write("<h1>lenguajes de programcion del 2018</h1>");
document.write("<ul>");
	// for (let i=0;i<lenguajes.length;i++){

	// 	document.write( `<li>${lenguajes[i]} </li>`);
	// }
/*lenguajes.forEach((elemento,index,data)=>{

	document.write("<li>" + elemento + "</li>")

});*/

for(let lenguaje in lenguajes){
	document.write("<li>" + lenguajes[lenguaje] + "</li>")
}
document.write("</ul>");

//Busquedas en un array.

let precios= new Array(10,20,50,80,12);

//let busqueda=lenguajes.findIndex(lenguaje=>lenguaje=="PHP");
let busqueda=precios.some(item=> item >20);
console.log(busqueda);








