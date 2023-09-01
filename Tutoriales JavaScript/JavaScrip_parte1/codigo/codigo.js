/* -------------------------------------------------- Codigo JS ------------------------------------------ */
/* El codigo siempre debe ser legible y claro, desde ahora JS=JavaScript */

/* Modo estricto; al principio si se coloca "use strict",
 obliga al desarrollador a declarar todas las variables es una buena practica hacerlo */

"use strict";

/* ----------------------Variables--------------------------------------*/
/* Las variables se pueden declarar de la siguiente manera */

//variable=0; //Con el uso estricto esto genera un error
var variable2 = 0; //Ya no se utiliza
let variable3 = 0; // Forma más optima y CORRECTA

/* Para darle un valor a la variable se coloca la variable igual al valor*/

variable2 = 10;// cambio el valor de la variable
variable2 = variable3; // Cambio su valor igualando otra variable.

/* las constantes son variables que solo tiene un valor al inicio y NO puede ser alterado */

const nombreDeMiplaneta = "Tierra";

//nombreDeMiplaneta="Jupiter" // Esto genera error 

/*  Tipos de Datos  */
/* El tipo de Datos, se puede declarar con un new TIPODEDATO o que sea interpretado 
por java scrip dependiendo del contenido. Existen variostipos de datos */

/* STRING */
const string1 = "Una cadena primitiva"; // Doble comilla
const string2 = 'También una cadena primitiva';//comilla simple
const string3 = `Otra cadena primitiva más`; //Backtips
const string4 = new String("Un objeto String");

/* Number, El tipo number representa tanto números enteros como de punto flotante.*/

let numero1 = 152;
let numero2 = 158.25;

/* BigInt, Un valor BigInt se crea agregando n al final de un entero.
 Es para numeros que superan el rango del number ±(2potencia53-1) */

const bigInt = 1234567890123456789012345678901234567890n; // la "n" al final significa que es un BigInt


/* Booleano (tipo lógico) El tipo boolean tiene sólo dos valores posibles: true y false. */
let mayorDeEdad = true;
mayorDeEdad = false;

/* “null” (nulo) “nada”, “vacío” o “valor desconocido”.*/

let age = null;

/*  undefined es “valor no asignado”, ej. se declara una variable pero no se le da valor ni tipo */
let age2;

/* Los objetos se utilizan para almacenar colecciones de datos y entidades más complejas. */

let objeto = new Object();

/* ----------------------------------------ARRAY-------------------------------------------------------- */
/* permiten almacenar colecciones de datos a través de nombres */

let frutas = ['Manzana', 'Pera', 'Melon'];

/* Para acceder algun elemento de la coleccion se invoca con su indice comenzando desde 0*/

console.log(frutas[0]); //Manzana
console.log(frutas[2]); //Melon
console.log(frutas[4]); //Indefinido porque dicha posicion no existe contenido


let verduras = [
    { nombre: "Acelga", color: "verde", tamanio: "mediano" },
    { nombre: "Rabanito", color: "rojo", tamanio: "chico" }
]

/* Para acceder a un valor de una coleccion con atributos, se invoca con su indice y atributo */
console.log(verduras[1].color);//Rojo
console.log(verduras[0].nombre);//Acelga



let pantalones = [
    {
        marca: "Bando",
        colores: {
            color1: "Azul",
            color2: "Negro"
        }
    },
    {
        marca: "Nike",
        colores: {
            color1: "Violeta",
            color2: "Verde"
        }
    }

]

/* Para acceder a un valor de una coleccion con atributos, Ademas tiene subniveles,
 se invoca con su indice, atributo e indice del nivel*/
console.log(pantalones[0].marca); //Bando
console.log(pantalones[1].colores.color1);// Violeta
console.log(pantalones[1].colores.color2);// Verde






/* ---------------------------------- Iteracciones con el usuario -------------------------------------  */

/* Existes funciones nativas de JS que permiten solicitar/mostrar informacion al usuario */

/* ----------- ALERT -------------------*/
// alert('Mensaje');// Mensaje a la pantalla 

/*---------- Prompt --------------------*/
/* Solicita un valor en un cuadro de dialogo, 
devuelve un valor que podemos usar en una variable */

//let mensaje = prompt('Mensaje','Valor por defecto (opcional)') 

/* -------- Confirm ---------------------*/
// Solicita una confirmacion y devuelve valor verdadero o falso


/* -------------------- Condicionales ---------- */



let cantidad = 10;
let cantidad2 = '10';

/* If */
/* Doble Igual, compara los valores sin importar el tipo  */
if (cantidad == cantidad2) {

    console.log("Son iguales");
} else {
    console.log("NO Son iguales");
}

/* If */
/* Triple Igual, compara los valores Y  el tipo  */
if (cantidad === cantidad2) {

    console.log(" NO Son iguales");
}

/* If tiene una forma simplificada */

cantidad == cantidad2 ?  console.log("Son iguales"):  console.log("NO Son iguales");

/* Switch, se usa cuando hay varias respuestas posibles  */

let nombreMes = 2;

switch (nombreMes) { //la variable que queremos evaluar
    case 1:
        console.log('Enero')
        break;// interrumpe la ejecucion del switch
    case 2:
        console.log('Febrero')
        break;
    default:
        console.log('Default la condicion que toma si los casos anteriores fueron falsos.')
        break;
}