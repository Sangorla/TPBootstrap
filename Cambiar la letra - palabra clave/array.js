const nombres = ['pepe', 'lucas', 'juan', 'adrian', 'joaquin', 'gonzalo', 'juancito'];
let contador = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] === 'j') {
        contador++;
    }
}

console.log("Cantidad de nombres que empiezan con 'j': " + contador);

