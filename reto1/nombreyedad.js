var jose = {
    nombre: "Jose",
    edad: 33
}

var dario = {
    nombre: "Dario",
    edad: 29
}

function imprimirNombreYEdad({ nombre, edad}) {
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años.`)
}

imprimirNombreYEdad(jose);