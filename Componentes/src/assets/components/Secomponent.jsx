const Secomponent = (props) => {
  return (
    <>
      <div>Segundo componente, a = {props.numeros}, b = {props.valor}</div>
      <h2>esta entrada es para escribir el firstComponent, {props.entrada}</h2>
    </>
  )
}

export default Secomponent