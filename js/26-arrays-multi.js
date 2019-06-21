'use strict';

var categorias= ["accion","terror","comedia"];
var peliculas= ["La verdad duele", "La vida es bella","Gran torino","Batman","Zarzuela"];

var cine=[categorias,peliculas];

/*console.log(cine[0][1]);
console.log(cine[1][1]);
*/

/*var elemento= "";
do{
	elemento= prompt("Introduce tu peli");
	peliculas.push(elemento);

}while (elemento!="ACABAR");
*/


/*var indice=peliculas.indexOf('la vida es bella');
console.log(indice);

if(indice>-1){
	peliculas.splice(indice,1);
	//.splice(en indice es lo que le paso, y el 1 es pasito que quiero borrar)
}*/

//console.log(peliculas.reverse());
//Join convierte un array a texto.

/*var string=peliculas.join();
console.log(string);*/
//console.log(peliculas);

/*var cadena="texto1,texto2,texto";
var cadena_array=cadena.split(",");
console.log(cadena_array);


for(let lenguaje in lenguajes){
	document.write("<li>"+lenguaje+"</li>")
}*/
peliculas.sort();
console.log(peliculas);
