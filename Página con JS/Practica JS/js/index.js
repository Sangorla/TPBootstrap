//let user = prompt("por favor ingrese su usuario: ");
//let pass = prompt("ingrese su password");

//console.log(user);
//console.log(pass);

if (user == "Pepe" && pass == "1234") {
    alert(Bienvenido);
    window.location.href = './Pages/admin.html'
} else {
    alert("usuario o password incorrecto");
    window.location.href = './Pages/error.html'
}

console.log("Estoy en el archivo externo");
console.log("esto es un comentario");

var age = 25;
let name = "Santiago";
const PHI = 3.1416;
let resumen = `Mi nombre es ${name}, tengo ${age} años y mi número preferido es ${PHI}.`;

console.log(age);
console.log(name);
console.log(PHI);
console.log(resumen);

let edad = 25;
let nombre = "Santiago";
let PI = 3.1416;
let resume = `Mi nombre es ${nombre}, tengo ${edad} años y mi número preferido es ${PI}.`;

console.log(edad);
console.log(nombre);
console.log(PI);
console.log(resume);

let suma = 1 + 2;
let resta = 2 - 1;
let multiplicacion = 1 * 2;
let división = 2 / 1;
let modulo = 2 % 1;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(división);
console.log(modulo);

let a = 5;

console.log(a == 5); 
console.log(a === 5);
console.log(!true);
console.log(!false);

let cliente = true;
let pagoAlDia = false;
let dia = "viernes";

if (!cliente && dia == "lunes" && pagoAlDia) {
  console.log("lo sentimos, no tenemos oferta para usted");
}

if (cliente && dia == "lunes" && pagoAlDia) {
  console.log("por ser cliente, tiene un 50% de descuento por ser viernes");
}

if (cliente && dia == "viernes") {
  console.log("por ser cliente y ser viernes, tenemos un 70% de descuento");
}

if (true) {
  console.log("hola");
}
if (false) {
  console.log("hola");
}

if (!cliente || dia == "lunes" || pagoAlDia) {
  console.log("lo sentimos, no tenemos oferta para usted");
}

if (cliente || dia == "martes") {
  console.log("por ser cliente y ser viernes, tenemos un 70% de descuento");
}

if (cliente && dia == "viernes") {
  console.log("por ser cliente y ser viernes, tenemos un 70% de descuento");
} else {
  console.log("datos incorrectos");
}

//alert() función modal para enviar mensajes al cliente dentro de la web
//prompt() función modal para que el cliente introduzca datos en la web


let hora = "22"  

if (hora>=6 && hora <=12) {
  console.log("Buenos días");
}else if(hora>=13 && hora <=18){
  console.log("Buenas tardes");
}else if(hora >=19 && hora <=21){
  console.log("buenas noches");
}else if (hora>=22 && hora <= 5) {
  console.log("Hasta mañana");
}else{
  console.log("no es una hora existente");
}