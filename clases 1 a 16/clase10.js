var jose = {
    nombre: 'Jose',
    apellido: 'Mendoza',
    edad: 33,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log(`Ingeniero`)
    }

    if (persona.cocinero) {
        console.log(`Cocinero`)
    }
    
    if (persona.cantante) {
        console.log(`Cantante`)
    }

    if (persona.dj) {
        console.log(`Dj`)
    }

    if (persona.drone) {
        console.log(`Vuela Drone`)
    }
}

imprimirProfesiones(jose);