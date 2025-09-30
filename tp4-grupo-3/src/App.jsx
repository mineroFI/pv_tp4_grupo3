import './styles/App.css'
import { Saludo } from '../src/assets/components/punto01/saludo.jsx'
import EjercicioBotones from './assets/components/punto02/ejercicioBotones.jsx'
import AppPunto3 from './assets/components/punto03/App.jsx'


function App() {
  let aN = "Navarro Ana Florencia, Apasa Pablo Ariel, Cappiello Andrea Victoria, Gutierrez Efrain, Quiroga Aldana Rocio"
  let aA = "3"

  return (
    <>
      <div>
        < Saludo aN={aN} aA={aA} />
        <div className="gif-container">
          <img src="/image/Helpy.gif" alt="Helpy" className="img-responsive" />
        </div>
      </div>


      < EjercicioBotones />;
      <AppPunto3 />
    </>
  )
}

export default App