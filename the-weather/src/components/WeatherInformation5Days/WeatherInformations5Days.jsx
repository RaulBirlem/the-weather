
import './WeatherInformations5Days.css'

function WeatherInformations5Days({weather5Days}){
    console.log(weather5Days)


    let dailyForecast = {

    }

    for(let forecast of weather5Days.list){
      const date = new Date(forecast.dt * 1000).toLocaleDateString()
//filtra as datas e retorna apenas os dias diferentes

      if(!dailyForecast[date]){
        dailyForecast[date] = forecast
      }
      
    }
    console.log(dailyForecast)

  return (
    <div className='weather-container'>
      <p>5days</p>
    </div>

  )
}

export default WeatherInformations5Days