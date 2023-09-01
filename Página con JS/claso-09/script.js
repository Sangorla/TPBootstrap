const formulario = document.getElementById("registerForm")

let username = "cosme fulanito"
let password = "admin123"
//                 e
const saludar = (evento, mensaje) => {
    evento.preventDefault()
    console.log(evento);
    //console.log(formulario.username.value);
    const loginData = {
        username: formulario.username.value, 
        password: formulario.password.value
    }
    console.log(mensaje + " " + loginData.username);
   /*  if (loginData.username === username && loginData === password) {
        window.location.href = "/pages/home.html"
    }
    else{
        window.location.href = "/pages/error.html"
    } */
}

//formulario.onsubmit = saludar

//callback
formulario.addEventListener("submit", (evento) =>{
    saludar(evento, "chau")
})










//SCOPE-AMBITO
/* 
VAR:
Se permite redeclarar
Permite reasignar
Permite inicializacion implicta
Hoisting
*/


/* 
LET:
NO Se permite redeclarar
Permite reasignar
Permite inicializacion implicta
NO Hoisting
 */

/* 
CONST:
NO Se permite redeclarar
NO Permite reasignar
NO Permite inicializacion implicta
NO Hoisting
*/


//Formulario. Guarda usuarios u otro dato.P

const usuarios = JSON.parse(localStorage.getItem('usuarios'))
if(usuarios){
    usuarios.push({nombre: 'pepe'})
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}else{
    localStorage.setItem('usuarios', JSON.stringify([{nombre: 'pepe'}]))
}