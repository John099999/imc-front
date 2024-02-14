import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tailleRef = useRef(0);
  const poidsRef = useRef(0);
  const readData = async (e) => {
    e.preventDezfault();
    const taille = tailleRef.current.value;
    const poids = tailleRef.current.value;
    console.log({ taille, poids });

    const result = await fetch('/imc', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ taille, poids })
    })
    await result.json()

  }



  return (
    <>
      <div style={{ fontSize: 20 }}>
        <form onSubmit={readData}>
          <p>
            <label htmlFor='taille'>Taille</label>
            <input type="taille" name="taille" id="taille" ref={tailleRef} />
          </p>
          <p>
            <label htmlFor='poids'>Poids</label>
            <input type="number" name="poids" id="poids" ref={poidsRef} />
          </p>
          <button type="submit">Calculer</button>
        </form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
