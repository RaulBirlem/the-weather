import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInformation/WeatherInfo'
import WeatherInformations5Days from './components/WeatherInformation5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()


  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value;
    const key = '181f2b23fdd32852ef60ca24cd8507ba'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather}/>}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days}/>}

    </div>
  )
}

export default App
