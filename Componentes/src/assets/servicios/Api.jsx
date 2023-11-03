import { useState, useEffect } from "react"

const Api = () => {
    const [url, setUrl] = useState([])
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then((result)=>result.json())
            .then((respon)=>setUrl(respon))
            .then(console.log(url))     
    },[])
  return (
    <div>api</div>
  )
}

export default Api