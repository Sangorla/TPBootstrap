console.log("Hola Funciones");


function dameNombre() {
    console.log("Mi nombre es Pepe");
}

dameNombre();
dameNombre();
dameNombre();
dameNombre();
dameNombre();

//funciones con info
let numUno = 200;
let numDos = 10;

let resultado = numUno + numDos;

console.log(resultado);

function sumar(numeroUno, numeroDos) {
    let suma =numeroUno + numeroDos;
    console.log(`el resultado de la suma es ${suma}`);


}
sumar(1500, 5000);

function resta(a, b) {
    let resultado = a - b;
    console.log(`el resultado de la resta es: ${resultado}  `);
    sumar(a, b);
    multipilicar(a, b);
}

resta(numUno, numDos)
//sumar(numUno, numDos)

function multipilicar(x, y) {
    let resultado = x * y;
    console.log(`el resultado de la multiplicación es ${resultado}  `);
}

multipilicar(100, 100)

function miNombre(nombre) {
    console.log(`Mi nombre es ${nombre}`);
}
miNombre(`Pepe`)

//funciones flecha
/* const miNombre = (nombre) => {
    console.log(`Mi nombre es ${nombre} `);
} */


const division = (arrow) => {
    console.log(`Hola soy la función ${arrow} `);
}

division("flecha")





