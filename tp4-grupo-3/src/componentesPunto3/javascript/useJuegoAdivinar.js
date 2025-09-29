import {useState} from "react"; //importar el uso de estado en react//
export function juegoAdivinarNumero () {
const [numeroIngresado,setNumeroIngresado]=useState ("");
const [mensaje,setMensaje]=useState ("Ingrese número por favor");
const [intentos,setIntentos]= useState (0);
const [juegoTerminado,setJuegoTerminado]= useState (false);
const [numeroRandom,setNumeroRandom]= useState (() =>
    Math.floor(Math.random() * 100) + 1); //math random genera numero entre el 0 y 1 sin tener en cuent el 1//
 //math.floor redondeamos el num hacia abajo y le sumamos 1 para que llegue al 100 si no seria entre 0 y 99//
const validarNumero= () => {
    if (juegoTerminado) return;

    const numero = parseInt(numeroIngresado);
    if (isNaN(numero)) {
      setMensaje("Ingrese un numero valido");
      return;
    }

    setIntentos((prev) => prev + 1);

    if (numero === numeroRandom) {
      setMensaje(`Acertaste! el numero era ${numeroRandom}.`);
      setJuegoTerminado(true);
    } else if (numero < numeroRandom) {
      setMensaje("El numero secreto es mayor al ingresado");
    } else {
      setMensaje("El numero secreto es menor al ingresado");
    }
  };
  const rendirse = () => {setMensaje(`el número secreto es ${numeroRandom}`); setJuegoTerminado (true);}
  
  
  const reiniciarJuego = () => { setJuegoTerminado (false);
        setNumeroIngresado (""); setIntentos (0); setMensaje ("Ingrese número Por favor"); setNumeroRandom (Math.floor(Math.random()*100) +1 )
  }

  
  return {setNumeroIngresado,numeroIngresado,mensaje,intentos,juegoTerminado,rendirse,reiniciarJuego,validarNumero};

  
}
