function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

var jose = new Persona('Jose', 'Mendoza', 1.68)
var freya = new Persona('Freya', 'Castro', 1.70)
var momo = new Persona('Momo', 'Momito', 1.85)
