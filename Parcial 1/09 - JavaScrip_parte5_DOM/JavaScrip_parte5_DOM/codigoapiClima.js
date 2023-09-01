cargarClima();

async function cargarClima() {
  await fetch(
    "http://api.weatherunlocked.com/api/current/ar.X5900?lang=es&app_id=61966416&app_key=b468dd1f1da4cbc17cbb2a0ecd56244b"
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
  console.log(datos);
}