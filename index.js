//console.log("hola");//

//variables y valoress//

let nombre;

nombre = "andres";

console.log(nombre);

let table = parseInt(prompt("Ingresar Numero"));

let resultado;

// Ciclo donde vamos sumando uno en uno y vamos generando la multiplicación a partir del número ingresado via Hardcore

for (let i = 1; i <= 10; i++) {
    resultado = ingresarNumero * i;
    console.log(resultado);
}

//Algoritmo para dar un turno del 1 al 20
for (let i = 1; i <= 20; i++) {
    //Como son turnos, solicitaremos en cada repetición del ciclo un Nombre
    let ingresarNombre = prompt("Ingresar Nombre");
    //Informamos en el turno asignado usando el número de repetición (i).
    alert("Turno N°" + i + "Nombre: " + ingresarNombre);

}

while (ingresarNombre = ingresarNombre) {
    ingresarNombre = prompt("Ingresar otro dato");
    alert("El usuario ingresó" + ingresarNombre)
    //Pongo Ingresar nombre por poner algo genérico pero la idea sería que hasta que Andres no ponga Andres se repita infinitas veces
}

switch (ingresarNombre) {
    case "Andres":
        alert("Hola Andres");
        break;

    case "Camila":
        alert("Hola Camila");
        break;

    default:
        alert("¿Quien sos?");
        break;

}

