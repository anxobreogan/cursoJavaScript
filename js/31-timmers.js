'use strict';

window.addEventListener('load',function(){

	//timmers.

	let tiempo= setInterval(function(){
		console.log('Set interval ejecutado');
		document.querySelector("h1").style.fontSize="50px";
	},3000);
});