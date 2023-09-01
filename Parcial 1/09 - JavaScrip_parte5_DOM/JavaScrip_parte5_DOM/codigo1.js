/* Crear un H dinamicamente */

let tituloprincipal = document.createElement('h1');
let div2 = document.querySelector('#div2');
let imagen = document.createElement('img');
imagen.alt="Mi imagen";

imagen.classList="imagen imagen2";

tituloprincipal.textContent='Hola Mundo';

div2.appendChild(tituloprincipal);
div2.appendChild(imagen);

/* Crear un Select dinamicamente igual al que esta en el HTML  */

let barrios = [
    { "codigo": 1, "descripcion": " ALTE. BROWN" },
    { "codigo": 2, "descripcion": "    AMEGHINO" },
    { "codigo": 3, "descripcion": "    AREA 158" },
    { "codigo": 4, "descripcion": "    BARRANCAS DEL RÍO" },
    { "codigo": 5, "descripcion": "    BELGRANO" },
    { "codigo": 6, "descripcion": "    BELLO HORIZONTE" },
    { "codigo": 7, "descripcion": "    BOTANICO" },
    { "codigo": 8, "descripcion": "    BOTTA" },
    { "codigo": 9, "descripcion": "    CAMPOS DEL ESTE" },
    { "codigo": 10, "descripcion": "    CARLOS PELLEGRINI" },
    { "codigo": 11, "descripcion": "    CASA LINDA" },
    { "codigo": 12, "descripcion": "    CENTRO" },
    { "codigo": 13, "descripcion": "    CENTRO ESTE" },
    { "codigo": 14, "descripcion": "    CENTRO NORTE" },
    { "codigo": 15, "descripcion": "    CENTRO OESTE" },
    { "codigo": 16, "descripcion": "    CENTRO SUR" },
    { "codigo": 17, "descripcion": "    COLECTORA AU" },
    { "codigo": 18, "descripcion": "    COSTA DE ORO" },
    { "codigo": 19, "descripcion": "    CTALAMOCHITA" },
    { "codigo": 20, "descripcion": "    ENCUENTRO" },
    { "codigo": 21, "descripcion": "    EVITA" },
    { "codigo": 22, "descripcion": "    FRANCISCO GARCIA" },
    { "codigo": 23, "descripcion": "    GENERAL PAZ" },
    { "codigo": 24, "descripcion": "    GENERAL ROCA" },
    { "codigo": 25, "descripcion": "    GÜEMES" },
    { "codigo": 26, "descripcion": "    INDUSTRIAL" },
    { "codigo": 27, "descripcion": "    JARDINES DEL HIPICO" },
    { "codigo": 28, "descripcion": "    LA ARBOLADA" },
    { "codigo": 29, "descripcion": "    LA ARBOLADA II" },
    { "codigo": 30, "descripcion": "    LA CALERA" },
    { "codigo": 31, "descripcion": "    LAMADRID" },
    { "codigo": 32, "descripcion": "    LAS ACACIAS" },
    { "codigo": 33, "descripcion": "    LAS MARGARITAS" },
    { "codigo": 34, "descripcion": "   LAS PLAYAS" },
    { "codigo": 35, "descripcion": "    LOS OLMOS" },
    { "codigo": 36, "descripcion": "    MALVINAS ARGENTINAS" },
    { "codigo": 37, "descripcion": "    MARIANO MORENO" },
    { "codigo": 38, "descripcion": "    MARIAPOLIS" },
    { "codigo": 39, "descripcion": "        MIRAFLORES" },
    { "codigo": 40, "descripcion": "    N. AVELLANEDA" },
    { "codigo": 41, "descripcion": "    NO DEFINIDO" },
    { "codigo": 42, "descripcion": "    PADRE MUGICA" },
    { "codigo": 43, "descripcion": "    PALERMO" },
    { "codigo": 44, "descripcion": "    PARQUE DON GUILLERMO" },
    { "codigo": 45, "descripcion": "    PARQUE INDUSTRIAL" },
    { "codigo": 46, "descripcion": "    PARQUE NORTE" },
    { "codigo": 47, "descripcion": "    PORTAL DE BUENOS AIRES" },
    { "codigo": 48, "descripcion": "    PORTAL DEL SOL" },
    { "codigo": 49, "descripcion": "    RAMÓN CARRILLO" },
    { "codigo": 50, "descripcion": "    RIVADAVIA" },
    { "codigo": 51, "descripcion": "    ROQUE SÁENZ PEÑA" },
    { "codigo": 52, "descripcion": "    SAN JUAN BAUTISTA" },
    { "codigo": 53, "descripcion": "    SAN JUSTO" },
    { "codigo": 54, "descripcion": "    SAN MARTÍN" },
    { "codigo": 55, "descripcion": "    SAN NICOLÁS" },
    { "codigo": 56, "descripcion": "    SANTA ANA" },
    { "codigo": 57, "descripcion": "    SARMIENTO" },
    { "codigo": 58, "descripcion": "    SOLARES DEL NORTE" },
    { "codigo": 59, "descripcion": "    TRINITARIOS" },
    { "codigo": 60, "descripcion": "   VALLE ESCONDIDO" },
    { "codigo": 61, "descripcion": "   VILLA ALBERTINA" },
    { "codigo": 62, "descripcion": "    VILLA DEL SUR" },
    { "codigo": 63, "descripcion": "  VISTA VERDE" },
    { "codigo": 64, "descripcion": "    ZONA RURAL" }

];

let div3 = document.querySelector('#div3');
let select = document.createElement('select');

select.id="barrios";

let opciondisabled = document.createElement('option');

opciondisabled.disabled=true;
opciondisabled.value=0;
opciondisabled.textContent="Seleccione un barrio";
opciondisabled.selected = true;


select.appendChild(opciondisabled);
for (let index = 0; index < barrios.length; index++) {
    const option = document.createElement('option');
    option.value= barrios[index].codigo;
    option.textContent=barrios[index].descripcion.trim();


    select.appendChild(option)
    
}
div3.appendChild(select);

let boton =document.createElement('button');
boton.textContent='Obtener Valor';
boton.addEventListener('click',()=> {
    let codigo= document.getElementById('barrios').value;
    alert(codigo);
});
div3.appendChild(boton);







/* Posicionar el select en el primer DIV */




/* Llenar el Select con barrios de vila maria  */