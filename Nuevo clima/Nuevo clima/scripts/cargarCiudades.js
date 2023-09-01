// Creo un objeto con ciudades cargadas por defecto
let ciudades = [
    { codigo: "ar.X5900", descripcion: "Villa Maria" },
    { codigo: "ar.X5903", descripcion: "Villa Nueva" },
    { codigo: "ar.B1663", descripcion: "Bariloche" },
    { codigo: "ar.V9410", descripcion: " Tierra del Fuego" },
    { codigo: "ar.Y4600", descripcion: "Jujuy" },
    { codigo: "es.28001", descripcion: " Madrid (España)" },
    { codigo: "-23.49,-46.71", descripcion: "Rio de Janeiro (Brazil)" },
    { codigo: "40.72, -74.09", descripcion: "Nueva York (EEUU)" },
];

// Creo la opcion no seleccionable al select
let opcionDisabled = document.createElement("option");
opcionDisabled.disabled = true;
opcionDisabled.value = 0;
opcionDisabled.textContent = "Seleccione la ciudad";
opcionDisabled.selected = true;

// Agrego la opcion seleccionar ciudad
let selectorCiudades = document.querySelector("#select-ciudades");
selectorCiudades.appendChild(opcionDisabled);

cargarCiudades();

function cargarCiudades() {
    for (let index = 0; index < ciudades.length; index++) {
        const opcion = document.createElement("option");
        opcion.value = ciudades[index].codigo;
        opcion.textContent = ciudades[index].descripcion;
        selectorCiudades.appendChild(opcion);
    }
}
