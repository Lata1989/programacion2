let pantalla = document.getElementById("display");
let historial = document.getElementById("elHistorial");
let numeroCadena = "";
let resultado = 0;
let arrayHistorial = [];
let operacion = "";
let simboloOperacion = "";
let primerOperacion = true;
let ultimoOperacion = false;
let ultimoIgual = false;
let indiceHistorial = 0;

function agregarNumero(numero) {
  if (ultimoIgual || ultimoOperacion) {
    numeroCadena = "";
    ultimoIgual = false;
    ultimoOperacion = false;
  }
  if (numeroCadena == "" && numero == 0) {
    pantalla.value = 0;
    numeroCadena = "0";
  } else if (numeroCadena == "0" && numero != 0) {
    numeroCadena = numero.toString();
    pantalla.value = numCadena;
  } else if (numeroCadena != "0") {
    numeroCadena += numero.toString();
    pantalla.value = numeroCadena;
  } else {
    return;
  }
}

function puntito() {
  if (ultimoIgual || ultimoOperacion) {
    numeroCadena = "";
    ultimoIgual = false;
    ultimoOperacion = false;
  }
  if (numeroCadena == "" || numeroCadena == "0") {
    numeroCadena = "0.";
    pantalla.value = numeroCadena;
  } else if (numeroCadena.indexOf(".") == -1 && numeroCadena != "") {
    numeroCadena += ".";
    pantalla.value = numeroCadena;
  } else {
    return;
  }
}

function borrar() {
  resultado = 0;
  numeroCadena = "";
  operacion = "";
  pantalla.value = "0";
  ultimoOperacion = false;
  primerOperacion = true;
  simboloOperacion = "";
  operacion = "";
  ultimoIgual = false;
}

function borrarUltimo() {
  if (resultado != 0 && numeroCadena == "") {
    resultado = toString(resultado);
    pantalla.value = resultado.slice(0, -1);
  } else {
    numeroCadena = numeroCadena.slice(0, -1);
    pantalla.value = numeroCadena;
  }
}

function sumar() {
  operacion = "sumar";
  if (primerOperacion) {
    resultado = parseFloat(numeroCadena);
    numeroCadena = "";
    primerOperacion = false;
  } else {
    if (ultimoOperacion || ultimoIgual) {
      // return;
    }
    else {
      calcular();
    }
  }

  ultimoOperacion = true;
  ultimoIgual = false;
}

function restar() {
  operacion = "restar";
  if (primerOperacion) {
    resultado = parseFloat(numeroCadena);
    numeroCadena = "";
    primerOperacion = false;
  } else {
    if (ultimoOperacion || ultimoIgual) {
      // return;
    }
    else {
      calcular();
    }
  }

  ultimoOperacion = true;
  ultimoIgual = false;
}

function dividir() {
  operacion = "dividir";
  if (primerOperacion) {
    resultado = parseFloat(numeroCadena);
    numeroCadena = "";
    primerOperacion = false;
  } else {
    if (ultimoOperacion || ultimoIgual) {
      // return;
    }
    else {
      calcular();
    }
  }

  ultimoOperacion = true;
  ultimoIgual = false;
}

function multiplicar() {
  operacion = "multiplicar";
  if (primerOperacion) {
    resultado = parseFloat(numeroCadena);
    numeroCadena = "";
    primerOperacion = false;
  } else {
    if (ultimoOperacion || ultimoIgual) {
      // return;
    }
    else {
      calcular();
    }
  }
  ultimoOperacion = true;
  ultimoIgual = false;
}

function calcular() {

  // Operaciones
  switch (operacion) {
    case "sumar":
      simboloOperacion = " + ";
      break;
    case "restar":
      simboloOperacion = " - ";
      break;
    case "dividir":
      simboloOperacion = " ÷ ";
      break;
    case "multiplicar":
      simboloOperacion = " x ";
      break;
    default:
      break;
  }

  // Historial creacion de la primera parte.

  if (simboloOperacion == "") {
    arrayHistorial[indiceHistorial] = "0 + ";
  } else {
    arrayHistorial[indiceHistorial] = resultado + " " + simboloOperacion;
  }

  if (primerOperacion) {
    resultado = numeroCadena;
    pantalla.value = resultado;
    primerOperacion = false;
  } else {
    switch (operacion) {
      case "sumar":
        resultado += parseFloat(numeroCadena);
        break;
      case "restar":
        resultado -= parseFloat(numeroCadena);
        break;
      case "dividir":
        resultado /= parseFloat(numeroCadena);
        break;
      case "multiplicar":
        resultado *= parseFloat(numeroCadena);
        break;
      default:
        break;
    }
  }

  if (isNaN(resultado)) {
    pantalla.value = "Error, reiniciando.";
    setTimeout(borrar, 3000);
    return;
  } else if (resultado == Infinity) {
    pantalla.value = "Infinito, reiniciando.";
    setTimeout(borrar, 3000);
    return;
  } else {
    pantalla.value = resultado;
  }

  // Ultimo guardado en historial
  arrayHistorial[indiceHistorial] += numeroCadena + " = " + resultado;
  console.log(historial);
  historial.innerHTML += "<li>" + arrayHistorial[indiceHistorial] + "</li>";
  indiceHistorial++;
  ultimoIgual = true;
}
