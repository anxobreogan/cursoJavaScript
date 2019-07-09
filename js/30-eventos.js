'use strict';

//Eventos del ratón.



function cambiarColor(){
	console.log("me has clickado");
	var bg=boton.style.background;
	if(bg=="green"){
		boton.style.background="red";

	}else{
		boton.style.background="green";
	}

	
	boton.style.padding="10px";
	boton.style.border="1px solid #ccc";
	return true;
}

var boton= document.querySelector("#button");
//Evento Click().
boton.addEventListener('click',function(){
	cambiarColor();
})

//Mouse Over.

boton.addEventListener('mouseover',function(){
	boton.style.background='#ccc';
});

//Mouse out.

boton.addEventListener('mouseout',function(){
	boton.style.background='yellow';
});

//Focus
var input=document.querySelector('#campo_nombre')
input.addEventListener('focus',function(){
	console.log('Estas haciendo foco en el input');
});

//Blur
input.addEventListener('blur',function(){
	console.log('Estas estas fueral input');
});

//Keydow

//Key press

//Key up





