'use strict';
var year= 2018;
while(year>=1982){

	console.log('Estamos en el año'+year);
	
	if(year==2000){
		break;
	}

	year--;
}

//Do While.- primero ejecutamos y luego comprabamos el bloque.
var years=28;
do {

	alert("solo cuando sea diferente a 20")
	years--;
}while(years > 25)