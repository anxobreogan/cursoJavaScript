'use strict';

//Plantillas de texto.

var nombre= prompt("introduce nombre");

var apellidos= prompt("Introduce apellidos");

//var texto= "Mi nombre es  "+nombre+" y mis apellidos son "+apellidos;

var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>

`;
document.write(texto);