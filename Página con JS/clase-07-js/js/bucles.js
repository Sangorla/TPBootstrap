let bananas = "bananas";
let manzana = "manzana";
let peras = "peras";


//arrays
//indice         0            1        2          3        4 o posicion de los elementos
let frutas = ["mangos", "bananas", "manzanas", "peras", "anana"];

//indice         0       1             2            3      4             5                6         7
let persona = ["Pepe", 123456789, "San Martín 200", 7, 2615589654, ["Juan", "Mario"], "Argentina", true];

//acceso al array - todos los elementos
console.log(frutas);

console.log("==============================================================================");

console.log(persona);

console.log("==============================================================================");

//acceso al elementos por su indice
//muestro manzanas
console.log("El elemento del indice 2 es: " + frutas[2]);


console.log("El elemento del indice 2 es: " + frutas[0]);
console.log("El elemento del indice 2 es: " + frutas[1]);
console.log("El elemento del indice 2 es: " + frutas[2]);
console.log("El elemento del indice 2 es: " + frutas[3]);
console.log("El elemento del indice 2 es: " + frutas[4]);

console.log("==============================================================================");
console.log(persona[5][1]);

console.log("==============================================================================");

//bucles: son pequeñas estructuras repetitivas de código
//for
//          inicio          limite        cada cuanto
/* for (let index = 0; index < array.length; index++) {
    //código para repetir siempre que sea true
    const element = array[index]; */
    
//}
// la i es igual al índice
for (let i = 0; i < 10; i++) {
    console.log("estamos contando de 0 a 9: " + i);
}

console.log(persona.length);

for (let i = 0; i < persona.length; i++) {
    console.log(`los elementos de Persona son: ${persona[i]}` );
    //console.log(`Los elementos de Persona son: ${persona[i]}`); 
    //console.log("los elementos de Persona son:  " + persona[i]);
}
console.log("==============================================================================");

//introducir datos en un array
let alumnos = []
let data = prompt('introduce un alumno: ');

//función para guardar datosen una array - push
if(!data){
    alert("no se introdujo ningun dato")
}else{
    alumnos.push(data);
    alert(`ingresamos el alumno ${data} al arreglo de alumnos`)
}
console.log(alumnos);



//while

