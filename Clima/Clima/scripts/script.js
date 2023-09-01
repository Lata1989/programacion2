// Clima actual URL API: http://api.weatherunlocked.com/api/current/ar.x5900?app_id=1fda1882&app_key=4778e201e6bddc99439d07cc3910e874
// Clima extendido URL API: http://api.weatherunlocked.com/api/forecast/ar.x5900?app_id=1fda1882&app_key=4778e201e6bddc99439d07cc3910e874

/*
    Codigo Emilio
*/

// cargarClima();
// async function cargarClima() {
// await fetch(
//     `http://api.weatherunlocked.com/api/current/${ubicacion}?app_id=1fda1882&app_key=4778e201e6bddc99439d07cc3910e874`
// )
// .then((response) => response.json()) //Respuesta Cabecera
// .then((data) => {
// //Respuesta Body
// console.log(data);
// console.log(data.temp_c, data.wx_desc);
// datosClima(data);
// //crear DOM
// });
// }
// function datosClima(datos) {
// console.log(datos);
// }

// Aca importo el select de las ciudades

let selectorCiudades = document.querySelector("#ciudades");
console.log(selectorCiudades)

// Aca creo el valor por defecto que no es posible seleccionar y lo pongo como default

let opcionDeshabilitada = document.createElement("option");
opcionDeshabilitada.value = 0;
opcionDeshabilitada.selected = true;
opcionDeshabilitada.text = "Seleccione su ciudad...";
opcionDeshabilitada.disabled = true;
selectorCiudades.appendChild(opcionDeshabilitada);

// Ahora inserto en el option las opciones

let arrayCiudades = [
    {
        codigo: "ar.X5900",
        nombre: "Villa Maria"
    },
    {
        codigo: "ar.V9410",
        nombre: "Ushuaia"
    },    
    {
        codigo: "ar.R8400",
        nombre: "San Carlos de Bariloche"
    },    
    {
        codigo: "ar.C1000",
        nombre: "Capital Federal"
    },
]

for (let i=0; i<arrayCiudades.length; i++) {
    let unaCiudad = document.createElement("option");
    unaCiudad.value = arrayCiudades[i].codigo;
    unaCiudad.text = arrayCiudades[i].nombre;
    selectorCiudades.appendChild(unaCiudad);
}