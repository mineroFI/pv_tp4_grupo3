import './styles/App.css'
import { Saludo } from './assets/components/saludo.jsx'
import EjercicioBotones from './assets/components/ejercicioBotones.jsx'

function App() {
  let aN = "Navarro Ana Florencia, Apasa Pablo Ariel, Cappiello Andrea Victoria, Gutierrez Efrain, Quiroga Aldana Rocio"
  let aA = "3"

  return (
    <>
    <div>
      <Saludo aN={aN} aA={aA} />
      <div className="gif-container">
        <img src="/image/Helpy.gif" alt="Helpy" class="img-responsive"/>
      </div>
    </div>


      < EjercicioBotones />;
  </>
  )
}

export default App