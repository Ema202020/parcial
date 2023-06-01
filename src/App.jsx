import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [nombre, setNombre] = useState("");
  const [animal, setAnimal] = useState("");
  const [show, setShow] = useState(true);

  const handlerEnviar = (event) => {
    event.preventDefault();
    if (nombre.length < 3 || nombre.trim() === "" || animal.length < 6) {
      alert("Por favor chequea que la información sea correcta");
    } else {
      setShow(true);
    }
  }

  return (
    <>
      <div>
        <h1>Elige tu animal favorito:</h1>
        <form className='form1' onSubmit={handlerEnviar}>
          <div>
            <label htmlFor='name'>
              Nombre: {" "}
            </label>
            <input id='name'
              type='text'
              placeholder='Escriba su nombre'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='animal'>
              Animal: {" "}
            </label>
            <input id='animal'
              type='text'
              placeholder='Escriba su animal favorito'
              value={animal}
              onChange={e => setAnimal(e.target.value)}
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
        {show && (
          <Card nombre={nombre} animal={animal} />
        )}
      </div>
    </>
  )
}

export default App
