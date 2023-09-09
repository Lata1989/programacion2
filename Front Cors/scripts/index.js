
insertarDatos();

// Funcion insertar datos
/*
Lista!
*/

let firstLoad = true;

function insertarDatos() {
    fetch('http://127.0.0.10:3000/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(datos => {
            // Aquí puedes trabajar con los datos obtenidos
            console.log(datos);

            // Cargo todos los datos en pantalla

            // console.log(datos[3].nombre);
            let cuerpoTabla = document.querySelector("#cuerpo-tabla");
            if (firstLoad) {
                firstLoad = false;
            } else {
                cuerpoTabla.removeChild();
            }

            for (let index = 0; index < datos.length; index++) {
                //Creo la fila donde voy a poner los atributos
                const filaTabla = document.createElement("tr");
                const elementoTabla1 = document.createElement("td");
                const elementoTabla2 = document.createElement("td");
                const elementoTabla3 = document.createElement("td");
                const elementoTabla4 = document.createElement("td");
                const elementoTabla5 = document.createElement("td");
                const elementoTabla6 = document.createElement("td");
                // ID
                const id = datos[index].id;
                cantidadDatos = id;
                elementoTabla1.textContent = id;
                // nombre
                const nombre = datos[index].nombre;
                elementoTabla2.textContent = nombre;
                //apellido
                const apellido = datos[index].apellido;
                elementoTabla3.textContent = apellido;
                //edad        
                const edad = datos[index].edad;
                elementoTabla4.textContent = edad;
                //ciudad
                const ciudad = datos[index].ciudad;
                elementoTabla5.textContent = ciudad;
                // Boton
                let elementoButton = document.createElement("button");
                elementoButton.textContent = "Consultar";
                elementoButton.class = "btn btn-primary";
                elementoButton.type = "button";
                // elementoButton[index].addEventListener("onclick",consultar(id));
                elementoButton.addEventListener("click", function () {
                    consultar(id);
                });
                elementoTabla6.appendChild(elementoButton);
                filaTabla.appendChild(elementoTabla1);
                filaTabla.appendChild(elementoTabla2);
                filaTabla.appendChild(elementoTabla3);
                filaTabla.appendChild(elementoTabla4);
                filaTabla.appendChild(elementoTabla5);
                filaTabla.appendChild(elementoTabla6);
                cuerpoTabla.appendChild(filaTabla);

                // Actualizo la cantidad de datos
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}

// Funcion consultar dato y enviarlo al input
/*
Lista
*/
function consultar(numero) {
    fetch(`http://127.0.0.10:3000/data/${numero}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(data => {
            // Aquí puedes trabajar con los datos obtenidos
            console.log(data);
            let id = document.querySelector("#el-id");
            let nombre = document.querySelector("#el-nombre");
            let apellido = document.querySelector("#el-apellido");
            let edad = document.querySelector("#el-edad");
            let ciudad = document.querySelector("#el-ciudad");
            id.value = numero;
            nombre.value = data.nombre;
            apellido.value = data.apellido;
            edad.value = data.edad;
            ciudad.value = data.ciudad
            console.log(`La cantidad de datos es: ${cantidadDatos}`);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    insertarDatos()

}

// Funcion agregar cliente

/*
    En proceso, lista?
*/
async function agregarCliente() {
    cantidadDatos++;
    let elementoNuevo = {
        id: parseInt(cantidadDatos),
        nombre: document.querySelector("#el-nombre").value,
        apellido: document.querySelector("#el-apellido").value,
        edad: document.querySelector("#el-edad").value,
        ciudad: document.querySelector("#el-ciudad").value
    }

    // Crep el pedido
    let solicitud = {
        method: "POST", // Utiliza el método POST
        headers: {
            "Content-Type": "application/json" // Especifica que los datos se enviarán en formato JSON
        },
        body: JSON.stringify(elementoNuevo) // Convierte el objeto en una cadena JSON
    }

    // fetch a la api
    // Realiza una solicitud POST a la API
    fetch(`http://127.0.0.10:3000/data`, solicitud)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }
            return response.json(); // Parsea la respuesta JSON de la API (si la API devuelve una respuesta JSON)
        })
        .then(data => {
            console.log("Elemento agregado exitosamente:", data);
            location.reload();
        })
        .catch(error => {
            console.error("Error:", error);
        });
    insertarDatos()
}

// Borrar cliente
/*
    Funciona!
*/
async function borrarCliente() {
    let idABorrar = document.querySelector("#el-id").value;
    console.log(idABorrar);
    // Envio a la API que ID quiero borrar
    fetch(`http://127.0.0.10:3000/data/${idABorrar}`, {
        method: "DELETE"
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }
            console.log("Elemento eliminado exitosamente");
        })
        .catch(error => {
            console.error("Error:", error);
        });
    insertarDatos()
}


// Actualizar cliente
/*
    En listo
*/
async function actualizarCliente() {
    let numero = document.querySelector("#el-id").value;
    let nombre = document.querySelector("#el-nombre").value;
    let apellido = document.querySelector("#el-apellido").value;
    let edad = document.querySelector("#el-edad").value;
    let ciudad = document.querySelector("#el-ciudad").value;

    let elementoActualizado = {
        "id": parseInt(numero),
        "nombre": nombre,
        "apellido": apellido,
        "edad": edad,
        "ciudad": ciudad
    }
    console.log(numero);
    console.log(elementoActualizado);

    let pedido = {
        method: 'PUT', // O puedes usar 'PATCH' según la semántica de tu backend
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido JSON
        },
        body: JSON.stringify(elementoActualizado), // Convierte el objeto a JSON
    };

    fetch(`http://127.0.0.10:3000/data/${parseInt(numero)}`, pedido)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Registro actualizado exitosamente:', data);
            // Puedes realizar acciones adicionales después de la actualización
        })
        .catch(error => {
            console.error('Error al actualizar el registro:', error);
            // Maneja el error de acuerdo a tus necesidades
        });

    insertarDatos()
}