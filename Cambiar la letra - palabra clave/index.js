function reemplazarSiguienteLetra() {
    let cadenaOriginal = document.getElementById('cadenaOriginal').value;
    let resultado = '';

    for (let i = 0; i < cadenaOriginal.length; i++) {
        let codigoAscii = cadenaOriginal.charCodeAt(i);
        let siguienteCodigoAscii = codigoAscii + 1;
        let siguienteLetra = String.fromCharCode(siguienteCodigoAscii);
        resultado += siguienteLetra;
    }

    document.getElementById('resultado').textContent = 'Nueva cadena: ' + resultado;
    document.getElementById('cambiada').textContent = 'Palabra cambiada: ' + resultado;



/*    const nombres = ['pepe', 'lucas', 'juan', 'adrian', 'joaquin', 'gonzalo', 'juancito'];
    let contador = 0;

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i][0] === 'j') {
            contador++;
        }
    }
} */
//console.log("cantidad" + contador);

/* let contraseña;

while  {
    contraseña = "admin123";

    if (contraseña === "admin123") {
        console.log("Te has registrado con éxito");
        break;
    } else {
        console.log("Contraseña incorrecta");
    }
} */

let contraseña = "admin123"
let contraseñaDada = prompt ("ingrese la contraseña")
while(contraseña != contraseñaDada){
    alert("la contraseña ingresada es incorrecta")
    contraseñaDada = prompt ("ingrese la contraseña")
}
alert("contraseña ingresada con exito")
