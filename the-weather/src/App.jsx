import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value;
    const key = '181f2b23fdd32852ef60ca24cd8507ba'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const data = await axios.get(url)

    console.log(data)
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
