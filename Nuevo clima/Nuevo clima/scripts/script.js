async function cargarClima() {
  let codigopostal = document.querySelector("#select-ciudades").value;

  console.log(codigopostal);
  await fetch(
    `http://api.weatherunlocked.com/api/current/${codigopostal}?lang=es&app_id=d609cc4c&app_key=e99deb9551960bebd5558527486727be`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response;
    })
    .then((response) => response.json()) //Respuesta Cabecera
    .then((data) => {
      //Respuesta Body

      console.log(data);

      actualizarClima(data);
    });
}

function actualizarClima(datos) {
  // Aca solamente coloco el nombre de la ciudad en el "titulo"
  let ciudadCombo = document.querySelector("#select-ciudades");
  //console.log(ciudadCombo);
  let nombreCiudad = ciudadCombo.options[ciudadCombo.selectedIndex].innerText;
  //console.log(nombreCiudad);
  //Aca tomo el label donde voy a mostrar el nombre de la ciudad
  let ciudadSeleccionada = document.querySelector("#ciudad-elegida");
  ciudadSeleccionada.value = nombreCiudad;

  // Ahora empiezo a mostrar los datos que me trae la API para el reporte del clima.
  // Los voy a ir asignando a todos por funciones para que sea mas facil de mantener.
  actualizarTemperatura(datos);
  actualizarSensacionTermica(datos);
  actualizarDireccionViento(datos);
  actualizarVelocidadViento(datos);
  actualizarHumedad(datos);
  actualizarTipoClima(datos);
  actualizarImagenClima(datos);
}

function actualizarTemperatura(datos) {
  // Obtengo el dato del json que me dio la API asignandolo a una variable
  let temperaturaActual = datos.temp_c;
  //console.log(temperaturaActual);
  // Traigo el elemento HTML
  let temperatura = document.querySelector("#temperatura-actual");
  temperatura.value = temperaturaActual + "°C";
}

function actualizarSensacionTermica(datos){
  //Obtengo el dato del json
  let sensacionTermica = datos.feelslike_c;
  //console.log(sensacionTermica);

  //Traigo el elemento HTML
  let sensacion = document.querySelector("#sensacion-termica-actual");
  sensacion.value = sensacionTermica + "°C";
}

function actualizarDireccionViento(datos){
  let direccion = datos.winddir_compass;
  console.log(direccion);
  let texto;
  // Switch ya que es mas facil su construccion y su cantidad no va a cambiar nunca
  switch (direccion.toUpperCase()) {
    case "N":
      texto = "N - norte.";
      break;
    case "NNE":
      texto = "NNE - norte-noreste.";
      break;
    case "NE":
      texto = "NE - noreste.";
      break;
    case "ENE":
      texto = "ENE - este-noreste.";
      break;
    case "E":
      texto = "E - este.";
      break;
    case "ESE":
      texto = "ESE - este-sureste.";
      break;
    case "SE":
      texto = "SE - sureste.";
      break;
    case "SSE":
      texto = "SSE - sur-sureste.";
      break;
    case "S":
      texto = "S - sur.";
      break;
    case "SSW":
      texto = "SSO - sur-suroeste.";
      break;
    case "SW":
      texto = "SO - suroeste.";
      break;
    case "WSW":
      texto = "OSO - oeste-suroeste.";
      break;
    case "W":
      texto = "O - oeste.";
      break;
    case "WNW":
      texto = "ONO oeste-noroeste.";
      break;
    case "NW":
      texto = "NO - noroeste.";
      break;
    case "NNW":
      texto = "NNO - norte-noroeste.";
      break;
    default:
      texto = "No reconocida.";
      break;
  }

  let direccionViento = document.querySelector("#direccion-viento");
  direccionViento.value = texto;
}

function actualizarVelocidadViento(datos){
  let velocidad = datos.windspd_kmh;
  let velocidadViento = document.querySelector("#velocidad-viento");
  velocidadViento.value = velocidad + " km/h";
}

function actualizarHumedad(datos){
  let ratioHumedad = datos.humid_pct;
  let humedad = document.querySelector("#humedad-actual");
  humedad.value = ratioHumedad + "%";
}

function actualizarTipoClima(datos) {
  let tipoClima = datos.wx_desc;
  let climaActual = document.querySelector("#clima-actual");
  climaActual.value = tipoClima
}

function actualizarImagenClima(datos){
  let imagenClima = datos.wx_icon;
  console.log(imagenClima);
  let imagen = document.querySelector("#imagen-clima");
  imagen.src = `./imagenes/set/${imagenClima}`;
}