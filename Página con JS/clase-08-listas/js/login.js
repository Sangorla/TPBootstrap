let admninistrador = {
    userAdmin: "useradmin@gmail.com",
    passAdmin: "123456"
}

//console.log(administrador);
//console.log(administrador.userAdmin);
//console.log(administrador.passAdmin);

const loginAdmin = () => {
    let userAdmin = "useradmin@gmail.com"
    let passAdmin = "123456"
    let userEmail = document.getElementById("emailLogin").value;
    let userPassword = documento.getElementById("passwordLogin").value;
    console.log(userAdmin, passAdmin);
    console.log(userEmail, userPassword);

    if (administrador.userAdmin == userEmail && administrador.passAdmin == userPassword) {
        alert("Bienvenido Admin");
        window.location.href = "../Pages/formulario.html";
    } else {
        alert("User o Password incorrectos")
        window.location.href = "../Pages/error.html";
    }
    console.log(userAdmin, passAdmin);
}

/* let palabra = 'pepe';
let contador = 0;

for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === 'p') {
        contador++;
    }
}

console.log("La cantidad de letras 'p' en la palabra pepe es:", contador); */

/* let palabra = 'pepe';

function reemplazarSiguienteLetra(palabra) {f
    let resultado = '';
    for (let i = 0; i < palabra.length; i++) {
        let codigoAscii = palabra.charCodeAt(i);
        let siguienteCodigoAscii = codigoAscii + 1;
        let siguienteLetra = String.fromCharCode(siguienteCodigoAscii);
        resultado += siguienteLetra;
    }
    return resultado;
}

let palabraOriginal = prompt("Ingresa la palabra secreta: ");
let nuevaPalabra = reemplazarSiguienteLetra(palabraOriginal);

alert('Cadena original: ' + cadenaOriginal + '\nNueva cadena: ' + nuevaCadena);
 */
//console.log('Cadena original:', palabraOriginal);
//console.log('Nueva cadena:', nuevaPalabra);

f