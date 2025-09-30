let contador = 0;
let intervalId = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if (contador === 5) {
        clearInterval(intervalId);
        console.log('Contador detenido.');
    }
}, 1000);
let tiempo =10;
let tiemporadizador = setTimeout(() => {
    console.log("QUEDAN: " + tiempo + " SEGUNDOS");
    tiempo--;
    if (tiempo < 0) {
        clearTimeout(tiemporadizador);
        console.log("¡Tiempo terminado!");
    }
}, 1000);

