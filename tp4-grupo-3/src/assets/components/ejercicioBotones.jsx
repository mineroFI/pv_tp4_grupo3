import { useState } from 'react';
import '/src/styles/estilosBotones.css'

function EjercicioBotones() {
    const colores = ['#FF0000', '#0000FF', '#00FF00',
        '#FFFF00', '#00FFFF', '#FF00FF', '#800000',
        '#008000', '#000080', '#808000', '#800080',
        '#008080', '#808080', '#C0C0C0', '#FFFFFF', '#000000'];

    const [colorBotones, setColorBotones] = useState(colores.slice(0, 4));

    const [resultado, setResultado] = useState('Presione un boton para empezar');

    const manejarClickEnElBoton = () => {
        const nuevosColores = colorBotones.map(() => {
            const inideAleatorio = Math.floor(Math.random() * colores.length);
            return colores[inideAleatorio];
        });

        const conteo = nuevosColores.reduce((acc, color) => {
            acc[color] = (acc[color] || 0) + 1;
            return acc;
        }, {});

        const haGanado = Object.values(conteo).some(count => count >= 3);

        if (haGanado) {
            setResultado('¡GANASTE! 🎉 Tres o más colores coinciden.');
        } else {
            setResultado('Sigue intentando... 😅');
        }

        setColorBotones(nuevosColores);
    };

    return (
        <>
            <div className="contenedor-juego">
                <h1 className="titulo"> Juego de Colores </h1>
                <p> Presione cualquier boton para cambiar los colores. Si tres o mas coinciden, gana.</p>
                <p className="mensaje-resultado">{resultado}</p>
                <div className="contenedor-botones">
                    {colorBotones.map((c, i) => (
                        <button
                            key={i}
                            onClick={manejarClickEnElBoton}
                            style={{ backgroundColor: c }}
                             className="boton-color"
                        >
                            Boton {i + 2}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EjercicioBotones;