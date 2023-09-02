fetch('http://127.0.0.10:3000/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
    })
    .then(data => {
        // Aquí puedes trabajar con los datos obtenidos
        console.log(data);
        insertarDatos(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function insertarDatos(datos){
    console.log(datos[1].nombre);
    let cuerpoTabla = document.querySelector("#cuerpo-tabla");
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
        elementoTabla1.textContent=id;
        // nombre
        const nombre = datos[index].nombre;
        elementoTabla2.textContent=nombre;
        //apellido
        const apellido = datos[index].apellido;
        elementoTabla3.textContent=apellido;
        //edad        
        const edad = datos[index].edad;
        elementoTabla4.textContent=edad;
        //ciudad
        const ciudad = datos[index].ciudad;
        elementoTabla5.textContent=ciudad;
        // Boton
        let elementoButton = document.createElement("button");
        elementoButton.textContent = "Consultar";
        elementoButton.class =  "btn btn-primary";
        elementoButton.type = "button";
        // elementoButton[index].addEventListener("onclick",consultar(id));
        elementoButton.addEventListener("click", function(){
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
    }
}

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
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

}