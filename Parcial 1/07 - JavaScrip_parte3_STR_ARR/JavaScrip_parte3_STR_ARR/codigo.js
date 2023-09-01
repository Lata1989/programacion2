/* ------------STRING--------------------------ckc---cku--- */
let nombre = "Juan";
console.log(nombre.length); // largo: 4

let texto = "Hola, ¿cómo estás?";
console.log(texto.indexOf("estás")); // posicion: 12

let texto2 = "Esto es una cadena de texto";
console.log(texto2.slice(4, 10)); // extrae: 'Esto'
console.log(texto2.slice(4)); // extrae: 'es una cadena de texto'

let texto3 = "Hola, ¿cómo estás?";
console.log(texto3.replace("estás", "va")); // Reemplaza: 'Hola, ¿qué estás?'

let texto4 = "Esto es una cadena de texto";
console.log(texto.toUpperCase()); // Output: 'ESTO ES UNA CADENA DE TEXTO'
console.log(texto.toLowerCase()); // Output: 'esto es una cadena de texto'

let texto5 = "Hola, ¿cómo estás?";
console.log(texto5[1]); //muestra H
console.log(texto5.charAt(1)); // Output: 'o'

let texto6 = "Hola";
let texto7 = "Planeta";
let texto8 = "Tierra";
console.log(texto6.concat(" ", texto7, " ", texto8));

/* ----------------Array------------------- */

if (true) {
  /* Agrega */
  let array = [1, 2, 3];
  array.push(4, 5); //al final
  console.log(array); // Output: [1, 2, 3, 4, 5]

  let array2 = [1, 2, 3];
  array2.unshift(4, 5); //al principio
  console.log(array2); // Output: [4, 5, 1, 2, 3]

  /* Elimina */
  let array3 = [1, 2, 3];
  let ultimoElemento = array3.pop(); //al final
  console.log(ultimoElemento); // Output: 3
  console.log(array3); // Output: [1, 2]

  let array4 = [1, 2, 3];
  let primerElemento = array4.shift(); //al principio
  console.log(primerElemento); // Output: 1
  console.log(array4); // Output: [2, 3]

  let array5 = [1, 2, 3, 4, 5];
  array5.splice(2, 2); //indice comienzo
  console.log(array5); // Output: [1, 2, 5]
}

/* -------------- Busqueda en Array -----------------------*/

let superheroes = [
  "Spiderman",
  "Batman",
  "Superman",
  "Wonder Woman",
  "Iron Man",
];
console.log(superheroes.indexOf("Spiderman")); // Output: 2
console.log(superheroes.indexOf("Batman")); // Output: -1

/* Solo Primer Elemento */
let array = [1, 2, 3, 4, 5];
let elemento = array.find((x) => x > 3);
console.log(elemento); // Output: 4

/* Indice exacto */
let indice = superheroes.findIndex((x) => x == "Superman");
console.log(indice); // Output: 3

/* Orden  */
let arrayOrdenada = [];
arrayOrdenada = superheroes.sort();
console.log(arrayOrdenada);
