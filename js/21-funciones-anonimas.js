'use strict';
//Fuciones anónimas. No tiene nombre.

//Básicamente para callbacks.....


let pelicula= function(nombre){
	return "la pelicula es " + nombre;
}

//Callaback, función que se ejecuta dentro de otra.

/*function sumame (n1,n2,sumaYmuestra,sumaPorDos){
	var sumar= n1+n2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

sumame(5,7,function(dato){
	console.log("la suma es " + dato);
},
function (dato){
	console.log("la suma por dos es " + (dato*2));
})
*/
//********************************


function sumame(n1,n2,multiplicacion,division){

var sumar= n1+n2;
multiplicacion(sumar);
division(sumar);

return sumar;

};



sumame(5,6,function(dato){
	console.log((dato*2));
},
function(dato){
	console.log((dato/2));
})
