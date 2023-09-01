/* ----- Ciclos ---------- */

/* For, variable de comienzo; condicion; paso (incremento o decremento)  */
for (let index = 0; index < 10; index++) {
  document.write(index + "<br>");
}
document.write("<br>----------------------------------<br>");
for (let index = 0; index < 10; index++) {
  document.write(index + "<br>");

  /* break interrumpe la ejecucion */
  if (index == 5) {
    break;
  }

  /* continue hace que prosiga la ejecucion */
  if (index == 1) {
    continue;
  }
}


document.write("<br>----------------------------------<br>");
let frutas= ['Manzana', 'Pera','Melon', 'Papaya'];
/*  For in y for of permiten recorrer objetos */
for (const item in frutas) {
/* For in muestra el indice del objeto*/
    document.write(item + '<br>');

}

document.write("<br>----------------------------------<br>");
for (const item of frutas) {
/* For of  muestra el contenido del objeto*/
    document.write(item + '<br>');

}


let variable1 = 0;
let variable2 = 100;

/* El while evalua la condicion al inicio del ciclo */
while (variable1 <= 100) {

    variable1 += variable2;

    document.write(variable1 + '<br>');

}

document.write('----- <br>')

let variable3 = 0;
let variable4 = 100;
/* El do while evalua la condicion al final del ciclo */
do {

    variable3 += variable4;

    document.write(variable3 + '<br>');

} while (variable1 <= 100);





