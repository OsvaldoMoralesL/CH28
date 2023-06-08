//1. Calcular el cuadrado de un número.
// Funcion General

function calcularCuadrado(numero = 8) {
    let cuadrado = numero * numero;
    return "El número cuadrado es " + cuadrado;
};
console.log(calcularCuadrado())

//2. Escribir un código que convierta de grados celsius a grados farenheit
function convertirCelsiusAFarenheit(celsius = 35) {
    let farenheit = (celsius * 1.8) + 32;
    return "La temperatura en grados Farenheit es de: " + (farenheit);
};
console.log(convertirCelsiusAFarenheit())

//3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.
function valorDeVoltaje(resistencia = 10, corriente = 53) {
    let voltaje = (resistencia * corriente);
    return "El valor de Voltaje es de: " + voltaje;
};
console.log(valorDeVoltaje())

//4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
function calcularVolumen(cubo = 4) {
    let volumen = (cubo * cubo * cubo);
    return "El volumen del cubo es de: " + volumen;
};
console.log(calcularVolumen())

//5. Calcular el área de un triángulo
function calcularAreaTriangulo(base = 2, altura = 5) {
    let area = (base * altura) / 2;
    return "El area del triangulo es de: " + area;
}
console.log(calcularAreaTriangulo())

//6. Calcular el volumen de una esfera
function calcularVolumenEsfera(radio = 4) {
    let volumen = (4 / 3) * 3.1416 * radio * radio * radio;
    return "El volumen es de: " + volumen;
};
console.log(calcularVolumenEsfera())

//7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

function CadenaToUp(texto = "hola Fer") {
    let textoMayusculas = texto.toUpperCase();
    return textoMayusculas;
};
console.log(CadenaToUp());

// 1.-Funcion Flecha1
const calcularCuadradoFlecha = (numero = 2) => {
    return "El numero cuadrado es " + (numero * numero);
};
console.log(calcularCuadradoFlecha())


// Funcion flecha 2

const convertirCelsiusAFarenheitFlecha = (celsius = 39) => {
    return "La temperatura en grados Farenheit es de: " + (celsius * 1.8) + 32;
};
console.log(convertirCelsiusAFarenheitFlecha())


//Funcion flecha 3
const valorDeVoltajeFlecha = (resistencia = 12, corriente = 43) => {
    return "El valor de voltaje es de: " + (resistencia * corriente);
};
console.log(valorDeVoltajeFlecha())



//Funcion flecha 4
const calcularVolumenFlecha = (cubo = 4) => {
    return "El volumen es de: " + (cubo * cubo * cubo);
};
console.log(calcularCuadradoFlecha())


//Funcion Flecha 5
const calcularAreaTrianguloFlecha = (base = 123, altura = 64) => {
    return "El area del triangulo es de: " + (base * altura) / 2;
};
console.log(calcularAreaTrianguloFlecha())


//Funcion Flecha 6
const calcularVolumenEsferaFlecha = (radio = 7) => {
    return "El volumen es de: " + (4 / 3) * 3.1416 * radio * radio * radio;
};
console.log(calcularVolumenEsferaFlecha())


//Funcion Flecha 7

const CadenaToUpFlecha = (texto = "buenas buenas") => {
    return texto.toUpperCase();
}; console.log(CadenaToUpFlecha())

