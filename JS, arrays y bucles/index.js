//1)Imprime los números del 1 al 10
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//2)Imprime los números pares del 2 al 20

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//3)Imprime los números impares del 1 al 19

for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

//4)Imprime los números del 10 al 1 en orden inverso

for (let i = 10; i >= 1; i--) {
    console.log(i);
    
}

/* 5) Recorrer el siguiente array de strings y contabilizar la cantidad de veces que aparece el string 'hola'
    const palabras = ['pepe', 'buen dia', 'hola', 'soy juan', 'hola']
 * Se debera decir por alerta al final, "la lista de palabras contiene 2 veces el string 'hola'" */

let palabras = ["pepe", "buen dia", "hola", "soy juan", "hola"]
let contadorHola = 0

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] == "hola") {
        contadorHola = contadorHola + 1
    }
    
}
console.log("la cantidad de veces que aparece el string 'hola' es : " + contadorHola);


/* 6) Recorrer el array de notas y sacar el promedio
	const notas = [8, 9, 4]
 * Se debera decir por alerta al final, "El promedio final es: {promedio}" */

let notas = [8, 9, 4]
let suma = 0

for (let i = 0; i < notas.length; i++) {
    suma = notas[i] + suma;
    
}
let promedio = suma / notas.length

console.log(`El promedio final es: ` + promedio)

/* 7) Recorrer el array de mensajes y contabilizar la cantidad de caracteres de todos los mensajes
const mensajes = ['hola a todos', 'buenas', 'me gusta JS']
 * Si la cantidad total es menor a 20, se dira 'el usuario recien empieza'
 * Si la cantidad total es entre 20 y 50, se dira 'el usuario es nuevo'
 * Si la cantidad total es mayor a 50, se dria 'el usuario es recurrente' */

let mensajes = ['hola a todos', 'buenas', 'me gusta JS']
let contadorCaracteres = 0

for (let i = 0; i < mensajes.length; i++) {
    contadorCaracteres += mensajes[i].length;
}

if (contadorCaracteres < 20) {
    console.log("el usuario recién empieza");
} else if (contadorCaracteres >=20 && contadorCaracteres <=50) {
    console.log("el usuario es nuevo");
}else {
    console.log("el usuario es recurrente");
}
    

console.log(contadorCaracteres);