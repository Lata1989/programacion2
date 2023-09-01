// Clima actual URL API: http://api.weatherunlocked.com/api/current/ar.x5900?app_id=1fda1882&app_key=4778e201e6bddc99439d07cc3910e874
// Clima extendido URL API: http://api.weatherunlocked.com/api/forecast/ar.x5900?app_id=1fda1882&app_key=4778e201e6bddc99439d07cc3910e874

/*
    Codigo Emilio
*/

// async function cargarClima(ubicacion) {
//     await fetch(
//         `http://api.weatherunlocked.com/api/current/${ubicacion}?lang=es&app_id=1fda1882&app_key=4778e201e6bddc99439d07cc3910e874`
//     )
//     .then((response) => response.json()) //Respuesta Cabecera
//     .then((data) => {
//     //Respuesta Body
//     console.log(data);
//     console.log(data.temp_c, data.wx_desc);
//     datosClima(data);
//     //crear DOM
//     });
//     }
//     function datosClima(datos) {
//     console.log(datos);
//     }

async function cargarClima(ubicacion) {
    await fetch(
        `http://api.weatherunlocked.com/api/current/${ubicacion}?lang=es&app_id=1fda1882&app_key=4778e201e6bddc99439d07cc3910e874`
    )
        .then((response) => response.json()) //Respuesta Cabecera
        .then((data) => {
            //Respuesta Body
            console.log(data);
            console.log(data.temp_c, data.wx_desc);
            datosClima(data);
            //crear DOM
        });
}
function datosClima(datos) {
    imagenClima(datos.wx_code);
    viento(datos.winddir_compass);
    console.log(datos);
}


// Funciones para manipular el DOM de forma mas ordenada

//Funcion imagen clima y descripcion clima
function imagenClima(numeroClima) {
    let imagenClima = document.querySelector("#imagenClima");
    let condicionClima = document.querySelector("#condicion");
    let descripcion;
    switch (numeroClima) {
        case 0:
            descripcion = "Cielo despejado";
            nombreClima=
            break;
        case 1:
            descripcion = "Parcialmente nublado";
            break;
        case 2:
            descripcion = "Cielo nublado";
            break;
        case 3:
            descripcion = "Cielo cubierto";
            break;
        case 10:
            descripcion = "Niebla";
            break;
        case 21:
            descripcion = "Posibles lluvias dispersas";
            break;
        case 22:
            descripcion = "Posibles nevadas dispersas";
            break;
        case 23:
            descripcion = "Posibles aguanieve dispersa";
            break;
        case 24:
            descripcion = "Posible llovizna helada";
            break;
        case 29:
            descripcion = "Posibles tormentas";
            break;
        case 38:
            descripcion = "Nieve en remolinos";
            break;
        case 39:
            descripcion = "Ventisca";
            break;
        case 45:
            descripcion = "Niebla";
            break;
        case 49:
            descripcion = "Niebla congelante";
            break;
        case 50:
            descripcion = "Llovizna ligera aislada";
            break;
        case 51:
            descripcion = "Llovizna ligera";
            break;
        case 56:
            descripcion = "Llovizna helada";
            break;
        case 57:
            descripcion = "Llovizna helada intensa";
            break;
        case 60:
            descripcion = "Lluvia ligera aislada";
            break;
        case 61:
            descripcion = "Lluvia ligera";
            break;
        case 62:
            descripcion = "Lluvia moderada en ocasiones";
            break;
        case 63:
            descripcion = "Lluvia moderada";
            break;
        case 64:
            descripcion = "Lluvia intensa en ocasiones";
            break;
        case 65:
            descripcion = "Lluvia intensa";
            break;
        case 66:
            descripcion = "Lluvia helada ligera";
            break;
        case 67:
            descripcion = "Lluvia helada moderada o intensa";
            break;
        case 68:
            descripcion = "Aguanieve ligera";
            break;
        case 69:
            descripcion = "Aguanieve moderada o intensa";
            break;
        case 70:
            descripcion = "Nieve ligera aislada";
            break;
        case 71:
            descripcion = "Nieve ligera";
            break;
        case 72:
            descripcion = "Nieve moderada aislada";
            break;
        case 73:
            descripcion = "Nieve moderada";
            break;
        case 74:
            descripcion = "Nieve intensa aislada";
            break;
        case 75:
            descripcion = "Nieve intensa";
            break;
        case 79:
            descripcion = "Granizo";
            break;
        case 80:
            descripcion = "Chubasco de lluvia ligera";
            break;
        case 81:
            descripcion = "Chubasco de lluvia moderada o intensa";
            break;
        default:
            descripcion = "Ningun clima pudo ser tomado";
            break;
    }
    console.log(descripcion);
    imagenClima.src = `./imagenesClima/${nombreClima}`;
    imagenClima.alt = `${descripcion}`;
    condicionClima.textContent = `Condicion: Tiempo ${descripcion}.`;
}
// Funcion viento
function viento(direccion) {
    let direccionViento = document.querySelector("#direccionViento");
    console.log(direccionViento);
    console.log(`La direccion del viento tomada es: ${direccion}`);
    switch (direccion) {
        //Direcciones simples
        case "W":
            direccionViento.textContent = "Oeste";
            break;
        case "E":
            direccionViento.textContent = "Este";
            break;
        case "S":
            direccionViento.textContent = "Sur";
            break;
        case "N":
            direccionViento.textContent = "Norte";
            break;
        // Direcciones dobles
        case "NW":
            direccionViento.textContent = "Noroeste";
            break;
        case "NE":
            direccionViento.textContent = "Noreste";
            break;
        case "SW":
            direccionViento.textContent = "Sudoeste";
            break;
        case "SE":
            direccionViento.textContent = "Sudeste";
            break;
        // Direcciones triples
        case "NNW":
            direccionViento.textContent = "Nor noroeste";
            break;
        case "WNW":
            direccionViento.textContent = "Oeste noroeste";
            break;
        case "NNE":
            direccionViento.textContent = "Nor noreste";
            break;
        case "ENE":
            direccionViento.textContent = "Este noreste";
            break;
        case "SSE":
            direccionViento.textContent = "Sur sudeste";
            break;
        case "ESE":
            direccionViento.textContent = "Este sudeste";
            break;
        case "WSW":
            direccionViento.textContent = "Oeste sudoeste";
            break;
        case "SSW":
            direccionViento.textContent = "Sur sudoeste";
            break;
        default:
            direccionViento.textContent = "Sin viento";
            break;
    }
}

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

for (let i = 0; i < arrayCiudades.length; i++) {
    let unaCiudad = document.createElement("option");
    unaCiudad.value = arrayCiudades[i].codigo;
    unaCiudad.text = arrayCiudades[i].nombre;
    selectorCiudades.appendChild(unaCiudad);
}

// Aca llamo a la funcion con el click en buscar para obtener la ciudad y pasarle el parametro del valor del codigo para que la API lo busque

function buscarCiudad() {
    let ciudades = document.getElementById("ciudades");
    let seleccionada = ciudades.value;
    console.log(seleccionada)
    cargarClima(seleccionada);
}