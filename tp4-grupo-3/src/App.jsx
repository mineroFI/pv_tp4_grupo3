

function App() {
  let aN = "Navarro Ana Florencia, Apasa Pablo Ariel, Cappiello Andrea Victoria, Gutierrez Efrain, Quiroga Aldana Rocio"
  let aA = "3"

  return (
    <>
    <div>
      <Saludo aN={aN} aA={aA} />
      <div className="gif-container">
        <img src="/image/Helpy.gif" alt="Helpy" className="img-responsive"/>
      </div>
    </div>


      < EjercicioBotones />;
      <AppPunto3 />
  </>
  )
}
function App() {
  return (
    <div>
      <h1>Hola React + Vite</h1>
      <Contador />
    </div>
  );
}

export default App