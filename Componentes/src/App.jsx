import { useState } from 'react'
import './App.css'
import Fisrtcomponent from './assets/components/fisrtcomponent'
import Secomponent from './assets/components/Secomponent'
import MiComponente from './assets/components/ClassComp'


function App() {
  const [valor, setValor] = useState('')
  const [entrada, setEntrada] = useState('')
  const handleValorCambiado = (nuevoValor) =>{setEntrada(nuevoValor)}
  let text = "Ivn"
  let mensaje
  if (valor=='') { mensaje = " hola \\(^-^)/"}
  return (
    <>
      {valor != 0 ? <h1>{valor} </h1>: <></>}
      <p>{mensaje}</p>
      <Fisrtcomponent text={text} setValor={setValor} handleValorCambiado={handleValorCambiado}/>
      <Secomponent numeros={text} valor={valor} entrada={entrada}/>
      <MiComponente/>
    </>
  )
}

export default App
