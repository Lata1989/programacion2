/*------------------ Operadores matematicos  ------------- */



let numero1 = 10;
let numero2 = 2;
let resultado = 0;

resultado = numero1 + numero2;
console.log(resultado);
resultado = numero1 - numero2;
console.log(resultado);
resultado = numero1 * numero2;
console.log(resultado);
resultado = numero1 / numero2;
console.log(resultado);
resultado = numero1 % numero2;
console.log(resultado);



/*------------------------- Operadores Logicos ---------------*/

let numero3 = 10;
let numero4 = 10;


/*  && And, todos los terminos deben ser verdaderos para que la condicion completa sea verdadera */
if (numero3 == 10 && numero4 == 10) {
    console.log('Verdadero')
}

/*  || or, con que uno de los terminos sea verdadero, es suficiente para que la condicion completa sea verdadera */
if (numero3 == 10 || numero4 == 10) {
    console.log('Verdadero')
}

/* Not !, negacion, al negar un termino, los falses son verdaderos y los verdaderos falsos */
if (!numero3 == 10) { // es true pero al negarlo es falso
    console.log('Verdadero')
}else{
    console.log('False')
}

/* distinto, es lo opuesto al igual == */

if (numero3 != 20) { // es distinto a 20
    console.log('Verdadero')
}else{
    console.log('False')
}




