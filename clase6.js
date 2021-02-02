var jose = {
    nombre: "jose",
    apellido: "mendoza",
    edad: 33
}

var dario = {
    nombre: "dario",
    apellido: "Susnisky",
    edad: 28
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jose);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: "pepito" });