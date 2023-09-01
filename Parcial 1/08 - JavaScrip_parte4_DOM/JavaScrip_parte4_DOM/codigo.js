

/* ------------------------------------------------ */
// Creamos una matriz con los datos de la tabla
var datos = [
  ["Nombre", "Edad", "Ciudad"],
  ["Juan", 25, "Madrid"],
  ["María", 30, "Barcelona"],
  ["Pedro", 35, "Valencia"]
];

// Creamos el elemento div contenedor
var contenedorDiv = document.createElement("div");

// Creamos la tabla y la agregamos al div contenedor
var tabla = document.createElement("table");
tabla.className="bordes";
contenedorDiv.appendChild(tabla);

// Iteramos sobre los datos y creamos las filas y celdas de la tabla
for (var i = 0; i < datos.length; i++) {
  var fila = document.createElement("tr");
  tabla.appendChild(fila);

  for (var j = 0; j < datos[i].length; j++) {
    var celda = document.createElement(i === 0 ? "th" : "td");
    celda.textContent = datos[i][j];
    fila.appendChild(celda);
  }
}

// Insertamos el div contenedor en el DOM
let contenedorPadre = document.getElementById("contenedorpadre");
console.log(contenedorPadre);
contenedorPadre.appendChild(contenedorDiv);


/* ----------------------------------------- */

// Creamos un nuevo elemento div
var nuevoDiv = document.createElement("div");

// Añadimos contenido al div
nuevoDiv.textContent = "Hola, soy un nuevo elemento div";

// Añadimos el div al cuerpo del documento
document.body.appendChild(nuevoDiv);


/* --------------------- */

// Seleccionamos un elemento existente por su ID
var miParrafo = document.getElementById("mi-parrafo");

// Modificamos el contenido del elemento
miParrafo.textContent = "¡Nuevo contenido para el párrafo!";

/* ----------------------- */

// Seleccionamos el elemento a eliminar por su ID
var elementoAEliminar = document.getElementById("elemento-a-eliminar");

// Eliminamos el elemento del DOM
elementoAEliminar.parentNode.removeChild(elementoAEliminar);

/* --------------------------------------------------- */


// Seleccionamos un elemento existente por su clase
var miElemento = document.querySelector(".mi-elemento");

// Cambiamos el color de fondo del elemento
miElemento.style.backgroundColor = "blue";

// Cambiamos el tamaño de fuente del elemento
miElemento.style.fontSize = "20px";


