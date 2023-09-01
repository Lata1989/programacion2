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
    let nombreCiudad = document.querySelector("#ciudad-elegida");
    console.log("Nombre ciudad: " + nombreCiudad);
    let ciudadSeleccionada = document.querySelector("#select-ciudades");
    console.log("Nombre ciudad: " + ciudadSeleccionada.textContent);
    //nombreCiudad.textContent = 
    //let temperaturaCiudad = document.querySelector("#select-ciudades").text
  }