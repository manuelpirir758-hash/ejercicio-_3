/*let nombre = prompt("Ingrese el nombre del jugador:");

let experiencia = 0;
let misiones = 0;
let continuar = 1;

do {

    let puntos = parseInt(prompt("Ingrese los puntos de experiencia obtenidos:"));

    experiencia = experiencia + puntos;

    misiones = misiones + 1;

    continuar = parseInt(prompt(`¿Desea registrar otra misión?
1. Si
2. No`));

} while (continuar === 1);
let nivel = "";

if (experiencia < 500) {
    nivel = "Novato";
}
else if (experiencia < 1000) {
    nivel = "Avanzado";
}
else if (experiencia < 2000) {
    nivel = "Experto";
}
else {
    nivel = "Leyenda";
}


document.write("Jugador: " + nombre + "<br>");
document.write("Misiones completadas: " + misiones + "<br>");
document.write("Experiencia total: " + experiencia + "<br>");
document.write("Nivel alcanzado: " + nivel + "<br>");*/





let equipo1 = prompt("Ingrese el nombre del primer equipo:");
let equipo2 = prompt("Ingrese el nombre del segundo equipo:");

let goles1 = parseInt(prompt("Ingrese los goles de " + equipo1 + ":"));
let goles2 = parseInt(prompt("Ingrese los goles de " + equipo2 + ":"));


let puntos1 = 0;
let puntos2 = 0;
let diferencia = 0;
let resultado = "";


if (goles1 === goles2) {

    resultado = "Empate";

    puntos1 = 1;
    puntos2 = 1;

    diferencia = 0;

}
else if (goles1 > goles2) {

    resultado = "Ganó " + equipo1;

    puntos1 = 3;
    puntos2 = 0;

    diferencia = goles1 - goles2;

}
else {

    resultado = "Ganó " + equipo2;

    puntos1 = 0;
    puntos2 = 3;

    diferencia = goles2 - goles1;

}

document.write("Equipo: " + equipo1 + "<br>");
document.write("Goles: " + goles1 + "<br>");
document.write("Puntos: " + puntos1 + "<br><br>");

document.write("Equipo: " + equipo2 + "<br>");
document.write("Goles: " + goles2 + "<br>");
document.write("Puntos: " + puntos2 + "<br><br>");

document.write("Resultado: " + resultado + "<br>");
document.write("Diferencia de goles: " + diferencia);