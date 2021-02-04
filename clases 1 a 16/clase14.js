var jose = {
    nombre: "Jose",
    apellido: "Mendoza",
    edad: 33,
    peso: 85
}

console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso} kgs.`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = jose.peso - 3
var dias = 0;

while (jose.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(jose)
    } 
    if (realizaDeporte()) {
        adelgazar(jose)
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${jose.nombre} adelgazó 3kgs.`)