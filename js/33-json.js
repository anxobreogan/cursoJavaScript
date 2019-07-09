'use strict';
//JSON.-JavaScript Object Notation.
let pelicula={
	titulo:'Batman vs Superman',
	year:'2017',
	pais:'USA'
};

let peliculas=[
{titulo:'La verdad duele',year:'2016',pais:'Francia'},pelicula]
let cajaPeliculas=document.querySelector('#peliculas');
for( let index in peliculas){
	let parrafo=document.createElement("p");
	parrafo.append(peliculas[index].titulo +" "+ peliculas[index].year);
	cajaPeliculas.append(parrafo);

}