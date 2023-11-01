import { useState } from 'react'
import './App.css'
import Fisrtcomponent from './assets/components/fisrtcomponent'
import Secomponent from './assets/components/Secomponent'
import MiComponente from './assets/components/ClassComp'


function App() {
  const [valor, setValor] = useState(0)
  let text = "Ivn"
  return (
    <>
      <Fisrtcomponent text={text} setValor={setValor}/>
      <Secomponent numeros={text} valor={valor}/>
      <MiComponente/>
    </>
  )
}

export default App
