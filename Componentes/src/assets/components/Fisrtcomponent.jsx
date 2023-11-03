const Fisrtcomponent = ({text, handleValorCambiado, setValor,}) => {
  
  return (
    <>
      <h2 className="titulos">Hola soy un componente de react, {text}</h2>
      <input type="text" onChange={(e)=>handleValorCambiado(e.target.value)} /><br/>
      <input type="number" onChange={(e)=>setValor(e.target.value)}></input>
    </>
  )
}

export default Fisrtcomponent