'use strict';

//switch

var edad=12;
var imprime='';

switch(edad){
	case 18:
		imprime='Tienes la mayoría de edad';
	break;
	case 25:
		imprime='Eres adulto';
	break;
	case 40:
		imprime='Eres adulto';
	break;
	case 75:
		imprime='Eres anciano';
	break;
	default:
		imprime='Tu edad es neutra';
	break;

	}

console.log(imprime);
