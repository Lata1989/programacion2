// Clima al momento http://api.weatherunlocked.com/api/current/ar.X5900?app_id=d609cc4c&app_key=e99deb9551960bebd5558527486727be
// Clima por venir http://api.weatherunlocked.com/api/forecast/ar.X5903?app_id=d609cc4c&app_key=e99deb9551960bebd5558527486727be
let selectorCiudad = document.getElementById("selectCiudades");

//Agrego la ciudad no disponible 

let opcionDisable = document.createElement('option')
opcionDisable.selected = true;
opcionDisable.disabled = true;
opcionDisable.value = 0
opcionDisable.text = "Elija su ciudad..."
selectorCiudad.appendChild(opcionDisable);

//Agrego el resto de ciudades
agregarCiudad("ar.X5900","Villa María");
agregarCiudad("ar.X5903","Villa Nueva");
agregarCiudad("ar.X2553","Justiniano Posse");





function agregarCiudad(codigoPostal, nombreCiudad){
    let opcion = document.createElement('option');
    opcion.value = codigoPostal;
    opcion.text = nombreCiudad;
    selectorCiudad.appendChild(opcion);
}