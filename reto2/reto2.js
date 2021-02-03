var jose = {
    nombre: "Jose",
    edad: 33
}

var freya = {
    nombre: "Freya",
    edad: 17
}

function esMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad.`);
    } else 
    console.log(`${persona.nombre} no es mayor de edad.`);
}
