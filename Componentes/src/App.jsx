import { useState, useEffect } from 'react'
import './App.css'
import Fisrtcomponent from './assets/components/fisrtcomponent'
import Secomponent from './assets/components/Secomponent'
import MiComponente from './assets/components/ClassComp'

function App() {
  const [datos, setDatos] = useState([])
  const [valor, setValor] = useState(1)
  const [entrada, setEntrada] = useState('')
  const [data, setData] = useState([])
  useEffect(()=>{
      fetch('https://rickandmortyapi.com/api/character')
          .then((resul)=>resul.json())
          .then((respon)=>setData(respon.results))
          .catch((error) => console.error('Error al obtener datos', error))     
  },[])
  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then((pokes) => pokes.json())
      .then((pokeingo) => setDatos(pokeingo.sprites.other.dream_world.front_default))
  },[valor])
  const handleValorCambiado = (nuevoValor) =>{setEntrada(nuevoValor)}
  let text = "Ivn"
  let mensaje
  if (valor==0) { mensaje = " hola \\(^-^)/"}
  return (
    <>
      {valor != 0 ? <h1>{valor}</h1>:<></>}
      <img src={datos} alt="pokemons"></img>
      <p>{mensaje}</p>
      <Fisrtcomponent text={text} setValor={setValor} handleValorCambiado={handleValorCambiado}/>
      <Secomponent numeros={text} valor={valor} entrada={entrada}/>
      <MiComponente/>
      <div>
        {data.map((personaje)=>(
          <div key={personaje.id}>
            <p>Nombre: {personaje.name}</p>
            <img src={personaje.image} alt={personaje.name}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
