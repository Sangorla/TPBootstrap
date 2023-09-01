/* 1)Recorrer el siguiente array de strings y contabilizar la cantidad de veces que aparece el string 'hola'
const palabras = ['pepe', 'buen dia', 'hola', 'soy juan', 'hola']
* Se debera decir por alerta al final, "la lista de palabras contiene 2 veces el string 'hola'"
 */

//BUCLE FOR ANIDADO CON LA FUNCION VERIFICARSTRINGSIGUALES
/* 
let palabras = ["pepe", "buen día", "hola", "soy juan", "hola"];

function verificarStringsIguales(palabras) {
    for (let i = 0; i < palabras.length; i++) {
        for (let j = i + 1; j < palabras.length; j++) {
            if (palabras[i] === palabras[j]) {
                return palabras[i];
            }
        }
    }
    return null;
}

let resultado = verificarStringsIguales(palabras);
if (resultado) {
    console.log("la lista de palabras contiene 2 veces el string " + resultado);
} else {
    console.log("No se encontraron palabras duplicadas");
}
 */
/* let palabras = ['pepe', 'buen día', 'hola', 'soy juan', 'hola'];
let hola = 0;

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i]=== 'hola'){
        hola = hola+1
    }   
} */
/* console.log(palabras[])
console.log(palabras[1])
console.log(palabras[2]) */

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

/* let palabras = ['pepe', 'buen día', 'hola', 'soy juan', 'hola'];
for(let i = 0; i <= 2; i++){
    console.log(palabras[i])
}
 */
/* let palabras = ['pepe', 'buen día', 'hola', 'soy juan', 'hola'];
let contadorHola = 0
for(let i = 0; i < palabras.length; i =  i + 1){
    if(palabras[i] == "hola"){
        contadorHola = contadorHola + 1
    }
}
alert("cantidad" + contadorHOla) */

const palabras = ['pepe', 'buen día', 'hola', 'soy juan', 'hola'];

let contadorHola = 0
for (let i = 0; i < palabras.length; i = i + 1) {
    if (palabras[i] == 'hola') {
        contadorHola = contadorHola + 1
    }
}

console.log("La cantidad de veces que aparece el string 'hola' son: " + contadorHola)

/*  2) Recorrer el array de notas y sacar el promedio
const notas = [8, 9, 4]
* Se debera decir por alerta al final, "El promedio final es: {promedio}"
 */

//Función calcularPromedio
//asignación y adicion combinada (sirve para sumar números y concatenar "strings")


/* let notas = [8, 9, 4];
let promedio = calcularPromedio(notas);

function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    let promedio = suma / notas.length;

    return promedio;
}

console.log("El promedio final es : " + promedio);
//console.log("la suma de todas las notas es : " + suma); por qué no me imprime nada?
promedio */

const notas = [8, 9, 4];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma = notas[i] + suma;
}


let promedio = suma / notas.length

console.log(`El promedio final es: ${promedio}`);

/* 3) Recorrer el array de mensajes y contabilizar la cantidad de caracteres de todos los mensajes
const mensajes = ['hola a todos', 'buenas', 'me gusta JS']
* Si la cantidad total es menor a 20, se dira 'el usuario recien empieza'
* Si la cantidad total es entre 20 y 50, se dira 'el usuario es nuevo'
* Si la cantidad total es mayor a 50, se dria 'el usuario es recurrente'
 */
let mensajes = ["hola a todos", "buenas", "me gusta JS"];
let total = contarCaracteresMensajes(mensajes);

function contarCaracteresMensajes(mensajes) {
    let totalCaracteres = 0;

    for (let i = 0; i < mensajes.length; i++) {
        totalCaracteres += mensajes[i].length;
    }

    return totalCaracteres;
}

if (total < 20) {
    console.log("el usuario recién empieza");
} else if (total >= 20 && total <= 50) {
    console.log("el usuario es nuevo");
} else {
    console.log("el usuario es recurrente");
}

console.log("La cantidad total de caracteres es: " + total);

/* 1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso
5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
6)Imprime los números del 1 al 10, pero salta el 5
 */


//1.
for (let i = 1; i <= 10; i++)
    console.log(i);

//2.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 20; i = i + 2) 
    console.log(i)


    //3.
    for (let i = 1; i <= 19; i += 2)
        console.log(i);

    //4.

    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }

    //5.
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }

//6.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//operación
let resultado = 0;
const num1 = prompt("elija un numero");
let operacion = prompt("elija una operación")
const num2 = prompt("elija otro numero");

if (operacion === "+") {
  resultado = Number(num1) + Number(num2);
} else if (operacion === "-") {
  resultado = (num1) - (num2);
} else if (operacion === "*") {
  resultado = (num1) * (num2);
} else if (operacion === "/") {
  resultado = (num1) / (num2);
}

alert(`el resultado de ${num1} ${operacion} ${num2} es: ${resultado}`)


/* 
const numero1 = prompt("seleccione un numero");
const numero2 = prompt("seleccione un numero");
let resultado = 0
 let operacion =prompt("seleccione una operacion")
if (operacion == "*"){
    resultado =(Number(numero1)*Number(numero2))
    
}else if(operacion == "/"){
    resultado =(Number(numero1)/Number(numero2))

}else if(operacion == "-"){
    resultado =(Number(numero1)-Number(numero2))

}else if(operacion == "+"){
    resultado =(Number(numero1)+Number(numero2))
    
}
console.log(`el resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`)
 */