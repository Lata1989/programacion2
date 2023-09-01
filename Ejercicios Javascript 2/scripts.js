function ejercicio1() {
    let mensaje = "Programacion 2";
    for (let index = 0; index < mensaje.length; index++) {
        console.log(mensaje[index] + " <br>");
    }
}

function ejercicio2() {
    let mensaje = "Programacion 2";
    for (let index = 0; index < mensaje.length; index++) {
        if (mensaje[index] === " ") {
            break;
        }
        console.log(mensaje[index] + " <br>");
    }
}

function ejercicio3() {
    let mensaje = "Hola, mundo!";
    console.log(mensaje.indexOf("mundo"));
}

function ejercicio4() {
    let animales = [ 'perro', 'gato', 'elefante', 'jirafa', 'tigre', 'oso', 'conejo', 'león', 'cebra', 'mono' ];
    let palabra;
    for (let index = 0; index < animales.length; index++) {
        palabra = animales[index].toUpperCase();
        document.log(palabra + "<br>");
    }

}

function ejercicio5() {
    let animales = [ 'perro', 'gato', 'elefante', 'jirafa', 'tigre', 'oso', 'conejo', 'león', 'cebra', 'mono' ]; 
    animales.forEach(animal => {
        if (animal[animal.length-1] === "a") {
            console.log("La " + animal);
        }
        else {
            console.log("El " + animal);
        }
    });
}

function ejercicio6() {
    let url1 = "https://www";
    let url2 = "google";
    let url3 = "com"; 
    let concatenado1;
    let concatenado2;
    let concatenado3 = "";

    concatenado1 = url1.concat(".",url2, ".", url3);
    console.log("Concatenando forma 1: " + concatenado1);
    concatenado2 = url1 + "." + url2 + "." + url3;
    console.log("Concatenando forma 2: " + concatenado2);
    concatenado3+=url1;
    concatenado3+=".";
    concatenado3+=url2;
    concatenado3+=".";
    concatenado3+=url3;
    console.log("Concatenando forma 3: " + concatenado3);
}

function ejercicio7() {
    let listaDeCompras = ['manzanas', 'pan', 'leche', 'huevos', 'arroz', 'pollo', 'papas', 'zanahorias', 'cebollas', 'pasta']; 
    let articuloUsuario = prompt("Ingrese el articulo que desea agregar a la lista: ");
    let existe = listaDeCompras.indexOf(articuloUsuario);
    if (existe === -1 ) {
        listaDeCompras.push(articuloUsuario);
    }
    else {
        alert("El articulo " + articuloUsuario + " ya está en la lista de compras.");
    }
    listaDeCompras.forEach(articulo => {
        console.log(articulo);
    });
}

function ejercicio8() {
    let listaDeCompras = ['manzanas', 'pan', 'leche', 'huevos', 'arroz', 'pollo', 'papas', 'zanahorias', 'cebollas', 'pasta']; 
    listaDeCompras.forEach(articulo => {
        console.log(articulo);
    });
    let articuloAEliminar = prompt("Ingrese el indice del articulo que desea eliminar.")
    let eliminado = listaDeCompras.splice(articuloAEliminar,1);
    // console.log(listaDeCompras[articuloAEliminar]);
    console.log("El articulo eliminado fue: " + eliminado);
    if (listaDeCompras[articuloAEliminar] == undefined){
        console.log("El indice del articulo ingresado no existe.");
    } 
    else {
        listaDeCompras.forEach(articulo => {
            console.log(articulo);
        });
    }
}

function ejercicio9() {
    let listaDeCompras = ['manzanas', 'pan', 'leche', 'huevos', 'arroz', 'pollo', 'papas', 'zanahorias', 'cebollas', 'pasta']; 
    listaDeCompras.forEach(articulo => {
        console.log(articulo);
    });
    let articuloAEliminar = prompt("Ingrese el indice del articulo que desea eliminar.")
    let indiceArticulo = listaDeCompras.indexOf(articuloAEliminar);
    if (indiceArticulo == -1) {
        alert("El articulo ingresado no existe.");
    }
    else {
        listaDeCompras.splice(indiceArticulo,1);
        console.log("Los articulos sin el articulo que se acaba de elimnar quedaria: ");
        listaDeCompras.forEach(articulo => {
            console.log(articulo);
        });
    }

}

function ejercicio10() {
    let listaDeCompras = ['manzanas', 'pan', 'leche', 'huevos', 'arroz', 'pollo', 'papas', 'zanahorias', 'cebollas', 'pasta']; 
    listaDeCompras.forEach(articulo => {
        console.log(articulo);
    });


    // Parte del ejercicio 7
    console.log("Parte del ejercicio 7.")
    let articuloUsuario = prompt("Ingrese el articulo que desea agregar a la lista: ");
    let existe = listaDeCompras.indexOf(articuloUsuario);
    if (existe === -1 ) {
        listaDeCompras.push(articuloUsuario);
    }
    else {
        alert("El articulo " + articuloUsuario + " ya está en la lista de compras.");
    }
    listaDeCompras.forEach(articulo => {
        console.log(articulo);
    });

    // Parte del ejercicio 8
    console.log("Parte del ejercicio 8.")

    let articuloAEliminar = prompt("Ingrese el indice del articulo que desea eliminar.")
    let eliminado = listaDeCompras.splice(articuloAEliminar,1);
    // console.log(listaDeCompras[articuloAEliminar]);
    console.log("El articulo eliminado fue: " + eliminado);
    if (listaDeCompras[articuloAEliminar] == undefined){
        console.log("El indice del articulo ingresado no existe.");
    } 
    else {
        listaDeCompras.forEach(articulo => {
            console.log(articulo);
        });
    }

    // Parte del ejercicio 9
    console.log("Parte del ejercicio 9.")
    articuloAEliminar = prompt("Ingrese el indice del articulo que desea eliminar.")
    let indiceArticulo = listaDeCompras.indexOf(articuloAEliminar);
    if (indiceArticulo == -1) {
        alert("El articulo ingresado no existe.");
    }
    else {
        listaDeCompras.splice(indiceArticulo,1);
        console.log("Los articulos sin el articulo que se acaba de elimnar quedaria: ");
        listaDeCompras.forEach(articulo => {
            console.log(articulo);
        });
    }
}

function ejercicio11() {
    personas = [ {nombre: 'Juan', edad: 25},
     {nombre: 'María', edad: 30},
     {nombre: 'Pedro', edad: 28}, 
     {nombre: 'Ana', edad: 12}, 
     {nombre: 'Sofía', edad: 15}, 
     {nombre: 'Luis', edad: 27}, 
     {nombre: 'Marta', edad: 31}, 
     {nombre: 'Carlos', edad: 3}, 
     {nombre: 'Lucía', edad: 17}, 
     {nombre: 'Diego', edad: 16}, 
     {nombre: 'Laura', edad: 24}, 
     {nombre: 'José', edad: 40}, 
     {nombre: 'Paula', edad: 37}, 
     {nombre: 'Jorge', edad: 12}, 
     {nombre: 'Valentina', edad: 23}, 
     {nombre: 'Camila', edad: 101}, 
     {nombre: 'Andrés', edad: 10}, 
     {nombre: 'Isabel', edad: 7}, 
     {nombre: 'Gustavo', edad: 17}, 
     {nombre: 'Natalia', edad: 4} 
    ];
    for (let index = 0; index < personas.length; index++) {
        console.log("La persona de nombre " + personas[index].nombre + " tiene " + personas[index].edad + " años de edad.");
    }
}

function ejercicio12() {
    personas = [
    {nombre: 'Juan', edad: 25},
    {nombre: 'María', edad: 30},
    {nombre: 'Pedro', edad: 28}, 
    {nombre: 'Ana', edad: 12}, 
    {nombre: 'Sofía', edad: 15}, 
    {nombre: 'Luis', edad: 27}, 
    {nombre: 'Marta', edad: 31}, 
    {nombre: 'Carlos', edad: 3}, 
    {nombre: 'Lucía', edad: 17}, 
    {nombre: 'Diego', edad: 16}, 
    {nombre: 'Laura', edad: 24}, 
    {nombre: 'José', edad: 40}, 
    {nombre: 'Paula', edad: 37}, 
    {nombre: 'Jorge', edad: 12}, 
    {nombre: 'Valentina', edad: 23}, 
    {nombre: 'Camila', edad: 101}, 
    {nombre: 'Andrés', edad: 10}, 
    {nombre: 'Isabel', edad: 7}, 
    {nombre: 'Gustavo', edad: 17}, 
    {nombre: 'Natalia', edad: 4} 
   ];

    let cantMayores = 0;
    let cantMenores = 0;
   let menores = [];
   let mayores = [];

   for (let index = 0; index < personas.length; index++) {
    if (personas[index].edad < 18) {
        mayores[cantMayores] = personas[index];
        cantMayores+=1;
    }
    else
    {
        menores[cantMenores] = personas[index];
        cantMenores += 1;
    }
   }

   console.log("Hay " + cantMayores + " personas mayores y son: ")
   for (let index = 0; index < cantMayores; index++) {
    console.log("La persona de nombre " + mayores[index].nombre + " tiene " + mayores[index].edad + " años de edad.");
   }
   console.log("Hay " + cantMenores + " personas menores y son: ")
   for (let index = 0; index < cantMayores; index++) {
    console.log("La persona de nombre " + menores[index].nombre + " tiene " + menores[index].edad + " años de edad.");
   }

}