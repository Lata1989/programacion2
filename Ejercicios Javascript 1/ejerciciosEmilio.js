function ejercicio1() {
    let val1 = parseFloat(document.getElementById("valor1").value);
    let val2 = parseFloat(document.getElementById("valor2").value);
    // console.log(val1)
    // console.log(val2)
    // alert(val1 + val2)
    resultado =  document.getElementById("resultado1");
    resultado.textContent = val1 + val2;
}

function ejercicio2() {
    for (let index = 0; index <= 10; index++) {
        console.log(index + " x 9 = " +index*9);
    }
}

function ejercicio3b() {
    let valor = parseFloat(document.getElementById("numeje3").value)
    for (let index = 1; index <= valor; index++) {
        document.write(index + "<br>");
    }
}

function ejercicio3m() {
    let valor = parseFloat(document.getElementById("numeje3").value)
    for (let index = 1; index <= valor; index++) {
        alert(index);
    }
}

function ejercicio4() {
    let valor = parseFloat(document.getElementById("numeje4").value)
    if (valor>=100) {
        alert("Ingresaste un numero mayor a 100.");
    }
    else {
        while (valor<100) {
            console.log(valor);
            valor=valor+10;
        }
    }
}

function ejercicio5() {
    let notas=[];
    for (let index = 0; index < 5; index++) {
        notas[index] = parseFloat(prompt("Ingrese la nota del alumno numero " + (index+1) + ":"))
    }
    let aprobados=0;
    let desaprobados=0;
    for (let index = 0; index < 5; index++) {
        if (notas[index]<4) {
            desaprobados+=1;
        }
        else{
            aprobados+=1;
        }
    }
    let alumnosAprobados = document.getElementById("alumnosA");
    let alumnosDesaprobados = document.getElementById("alumnosD");
    console.log(alumnosAprobados);
    console.log(alumnosDesaprobados);
    alumnosAprobados.textContent = aprobados;
    alumnosDesaprobados.textContent = desaprobados;
}

function ejercicio6() {
    let aporte1 = document.getElementById("amigo1");
    let aporte2 = document.getElementById("amigo2");
    let aporte3 = document.getElementById("amigo3");
    let recaudacion = document.getElementById("totalr");
    let vuelto = document.getElementById("vueltoAmigos");
    let ami1=0;
    let ami2=0;
    let ami3=0;
    const CARTULINA = 50;
    let totalRecaudado = 0;
    let vueltoTotal;
    let index=1;
    do {
        switch (index) {
            case 1:
                ami1 = parseFloat(prompt("Ingrese el aporte del primer amigo: "))
                aporte1.textContent=ami1;
                console.log("Ingreso al amigo 1");
                break;
            case 2:
                ami2 = parseFloat(prompt("Ingrese el aporte del segundo amigo: "))
                aporte2.textContent=ami2;
                console.log("Ingreso al amigo 2");

                break;
            case 3:
                ami3 = parseFloat(prompt("Ingrese el aporte del tercer amigo: "))
                aporte3.textContent=ami3;
                console.log("Ingreso al amigo 3");

                break;
            default:
                break;
        }
        totalRecaudado = ami1 + ami2 + ami3;
        vueltoTotal =  totalRecaudado - CARTULINA;
        index = index + 1;
        console.log('El indice esta en ' + index)
        console.log("La recaudacion es " + totalRecaudado)
    } while (totalRecaudado<CARTULINA && index<4);
    recaudacion.textContent=totalRecaudado;
    if (vuelto>0) {
        vuelto.value = vueltoTotal;
    }
    else {
        vuelto.value = "Falto dinero";
    }
    if ( totalRecaudado<CARTULINA){
        alert("Los amigos no lograron recaudar lo suficiente para la cartulina.")
    }
    else{
        alert("Felicidades los amigos compraron la cartulina.")
    }
}

function ejercicio7() {
    const VALORENTRADA = 1200;
    let menores = document.getElementById("menores18");
    let mayores = document.getElementById("mayores50");
    let generales = document.getElementById("e-general");
    let cantidadPersonas = document.getElementById("entradas-totales");
    let totalRecaudado = document.getElementById("recaudacion-total");
    let edad;
    let precioEntrada;
    let recaudacion = 0;
    let menores18 = 0;
    let mayores50 = 0;
    let entradasGenerales = 0; 
    do {
        edad = parseInt(prompt("Ingrese la edad del cliente: "));
        if (edad>=0 && edad<=150) {
            console.log("Ingreso una pesona!")
            if (edad<=18) {
                precioEntrada = VALORENTRADA/2;
                menores18+= 1;
            }
            else if (edad>=50){
                precioEntrada = VALORENTRADA/3;
                mayores50+= 1;
            }
            else{
                precioEntrada = VALORENTRADA;
                entradasGenerales+= 1;
            }
            recaudacion+= precioEntrada;
        }
        console.log("El precio de la entrada es: " + precioEntrada);
        console.log("El total recaudado hasta el momento es: " + recaudacion);
    } while (edad>=0 && edad<150);
    
    menores.textContent = menores18;
    mayores.textContent = mayores50;
    generales.textContent = entradasGenerales;
    cantidadPersonas.textContent = menores18 + mayores50 + entradasGenerales;
    totalRecaudado.textContent = recaudacion;
}

function ejercicio8() {
    let porcentajeAlumno = parseFloat(document.getElementById("nota-alumno").value);
    let porcentajeNota = document.getElementById("nota-porcentaje");
    let numeroNota = document.getElementById("nota-numero");
    let notaPorcentaje = porcentajeAlumno;
    console.log("El % del examen correcto es: " + porcentajeAlumno)
    let notaNumero = Math.pow(10,(notaPorcentaje/100));
    notaNumero = notaNumero.toFixed(2);
    console.log(notaNumero);
    porcentajeNota.textContent = porcentajeAlumno;
    numeroNota.textContent = notaNumero;
}

function ejercico8b() {
    let notaRatio;
    let notaNumero;
    for (let index = 1; index <= 10; index++) {
        notaNumero = index;
        notaRatio = Math.log10(notaNumero)*100;
        document.write("La nota " + notaNumero + " es equivalente al " + notaRatio.toFixed(2) + "% del examen correcto. <br>");
    }
}