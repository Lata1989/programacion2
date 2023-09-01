let acumulador = 0;
let numCadena = "";
let num;
let historial = [];
let display = document.getElementById("display");
let operacion;
let primerOperacion = true;
let indiceHistorial = 0;
let simboloOperacion = "";
let ultimoIgual = false;
let elHistorial = document.getElementById("elHistorial");

function agregarNumero(numero) {
  if (ultimoIgual == true) {
    numCadena = "";
    ultimoIgual = false; 
    operacion = null;
    acumulador = 0;
    primerOperacion = true;
  }
  if (numCadena == "" && numero == 0) {
    display.value = 0;
    numCadena = "0";
  } 
  else if (numCadena == "0" && numero != 0) { 
    numCadena = numero.toString();
    display.value = numCadena;
  }
  else if ( numCadena != "0")
  {
    numCadena += numero.toString();
    display.value = numCadena;
  } 
  else {
    return;
  }
}

function puntito() {
  if (ultimoIgual == true) {
    numCadena = "";
    ultimoIgual = false; 
    operacion = null;
  }
  if (numCadena.indexOf(".") == -1) {
    if (numCadena == "") {
      numCadena += "0.";
      display.value = numCadena;
      console.log(
        "A num se le agrego el caracter 0. y esta en el valor:" + numCadena
      );
    } else {
      numCadena += ".";
      display.value = numCadena;
      console.log(
        "A num se le agrego el caracter . y esta en el valor:" + numCadena
      );
    }
  }
}

function borrar() {
  acumulador = 0;
  numCadena = "";
  display.value = "0";
  primerOperacion = true;
}

function sumar() {
  operacion = "sumar";
  if (ultimoIgual == true) {
    numCadena = "";
    ultimoIgual = false; 
  }
  if (primerOperacion){
    if (numCadena != "" && operacion != "") {
      if (numCadena[numCadena.length - 1] == ".") {
        agregarNumero(0);
      }
      acumulador = parseFloat(numCadena);
    }
    primerOperacion = false;
  }
  if (numCadena != "") {
    console.log("Entro en suma");
  }
  // else {
  //   if (numCadena != "" && operacion != "") {
  //     if (numCadena[numCadena.length - 1] == ".") {
  //       add0();
  //     }
  //     calcular();
  //   }
  // }
  console.log("El valor del acumulador es: " + acumulador)
  numCadena = "";
}

function restar() {
  operacion = "restar";
  if (ultimoIgual == true) {
    numCadena = "";
    ultimoIgual = false; 
  }
  if (primerOperacion){
    if (numCadena != "" && operacion != "") {
      if (numCadena[numCadena.length - 1] == ".") {
        agregarNumero(0);
      }
      acumulador = parseFloat(numCadena);
    }
    primerOperacion = false;
  }
  if (numCadena != "") {
    console.log("Entro en resta");
  }
  // else {
  //   if (numCadena != "" && operacion != "") {
  //     if (numCadena[numCadena.length - 1] == ".") {
  //       add0();
  //     }
  //     calcular();
  //   }
  // }
  console.log("El valor del acumulador es: " + acumulador)
  numCadena = "";
}

function multiplicar() {
  operacion = "multiplicar";
  if (ultimoIgual == true) {
    numCadena = "";
    ultimoIgual = false; 
  }
  if (primerOperacion){
    if (numCadena != "" && operacion != "") {
      if (numCadena[numCadena.length - 1] == ".") {
        agregarNumero(0);
      }
      acumulador = parseFloat(numCadena);
    }
    primerOperacion = false;
  }
  if (numCadena != "") {
    console.log("Entro en multiplicar");
  }
  // else {
  //   if (numCadena != "" && operacion != "") {
  //     if (numCadena[numCadena.length - 1] == ".") {
  //       add0();
  //     }
  //     calcular();
  //   }
  // }
  console.log("El valor del acumulador es: " + acumulador)
  numCadena = "";
}

function dividir() {
  operacion = "dividir";
  if (ultimoIgual == true) {
    numCadena = "";
    ultimoIgual = false; 
  }
  if (primerOperacion){
    if (numCadena != "" && operacion != "") {
      if (numCadena[numCadena.length - 1] == ".") {
        agregarNumero(0);
      }
      acumulador = parseFloat(numCadena);
    }
    primerOperacion = false;
  }
  if (numCadena != "") {
    console.log("Entro en dividir");
  }
  // else {
  //   if (numCadena != "" && operacion != "") {
  //     if (numCadena[numCadena.length - 1] == ".") {
  //       add0();
  //     }
  //     calcular();
  //   }
  // }
  console.log("El valor del acumulador es: " + acumulador)
  numCadena = "";
}

function calcular() {
  // Asignacion del simbolo a la variable que voy a usar en el historial
  switch (operacion) {
    case "sumar":
      simboloOperacion = " + ";
      break;
    case "restar":
      simboloOperacion = " - ";
      break;
    case "multiplicar":
      simboloOperacion = " x ";
      break;
    case "dividir":
      simboloOperacion = " ÷ ";
      break;
    default:
      simboloOperacion = "";
      break;
  }
  // Creacion del item del historial
  if (simboloOperacion == "") {
    historial[indiceHistorial] = "0 + "; 
  }
  else {
    historial[indiceHistorial] = acumulador + " " + simboloOperacion;
  }
  if (acumulador != 0 && operacion != "") {
    // if (numCadena == "" && (operacion == "dividir" || operacion == "multiplicar")) {
    //   numCadena = 1;
    // }
    // else if (numCadena == "" && (operacion == "sumar" || operacion == "restar" )) {
    //   numCadena = 0;
    // }
    switch (operacion) {
      case "sumar":
        acumulador += parseFloat(numCadena)
        break;
      case "restar":
        acumulador -= parseFloat(numCadena)
        break;
      case "multiplicar":
        acumulador *= parseFloat(numCadena)
        break;
      case "dividir":
        acumulador /= parseFloat(numCadena)
        break;
      default:
        break;
    }
  } else if (acumulador == 0){
    acumulador = parseFloat(numCadena)
  }
  if (isNaN(acumulador)) {
    display.value = "Error, resetear manualmente.";
    acumulador = 0;
  }
  else if (acumulador == Infinity){
    display.value = "Division por 0."
    acumulador = 0;
    numCadena = "";
    primerOperacion = true;
    ultimoIgual = false;
  } 
  else {
    display.value = acumulador;
  }
  // Guardado final en el historial
  historial[indiceHistorial] += numCadena + " = " + acumulador ;
  console.log(historial);
  elHistorial.innerHTML += '<li>' + historial[indiceHistorial] + '</li>';
  indiceHistorial++;
  ultimoIgual = true;
}

function borrarUltimo() {
  if (acumulador != 0 && numCadena == "") {
    acumulador = toString(acumulador);
    display.value = acumulador.slice(0,-1);
  }
  else {
    numCadena = numCadena.slice(0,-1);
    display.value = numCadena;
  }
}