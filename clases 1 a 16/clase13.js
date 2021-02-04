var jose = {
    nombre: "Jose",
    apellido: "Mendoza",
    edad: 33,
    peso: 85
}

console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso} kgs.`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(jose)
    } else if ( random < 0.50) {
        adelgazar(jose);
    }
}

console.log(`Al final del año ${jose.nombre} pesa ${jose.peso.toFixed(1)} kgs.`);