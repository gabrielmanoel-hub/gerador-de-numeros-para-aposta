import React, {useState} from 'react'
import Mega from './components/Mega.jsx'
import './App.css'

export default App => {
 const [numeroDaAposta, setNumeroDaAposta]=useState (6)

  const gerarnumero = (e) => {
    const valor = e.target.value.replace(/^0+/, '')
    setNumeroDaAposta(valor)
  }

  return (
    <div className= 'Card'>
          <h2>Gerador de números para aposta</h2>
          <label></label>
          <input 
            min={6}
            max={15}
            type={'number'} 
            value={numeroDaAposta}
            onChange={gerarnumero}
          />
          <Mega num={numeroDaAposta}></Mega>
    </div>
  )
}