let hora = "18";

if (hora >= 0 && hora <= 12) {
    console.log("Buenos días");
} else if (hora >= 13 && hora <= 18) {
    console.log("Buenas tardes");
} else if (hora >= 19 && hora <= 21) {
    console.log("buenas noches");
} else if (hora >= 22 && hora <= 24) {
    console.log("Hasta mañana");
} else {
    console.log("no es una hora existente");
}