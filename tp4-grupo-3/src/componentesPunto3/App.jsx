import './styles/estiloAdivinarNumero.css';
import React from "react";
import Juego from "./componentes/Juego";


export default function App() {
  return (
    <div>
      <h1>Juego de Adivinar el Número</h1>
      <Juego />
    </div>
  );
}