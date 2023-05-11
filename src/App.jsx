import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCards from './components/WeatherCards'


function App() {

  const [latlong, setLatlong] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(() => {

    const success = pos  => {
      const obj = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      }
      setLatlong(obj)
    }
  
    navigator.geolocation.getCurrentPosition(success)
    
  }, [])

useEffect(() => {
  if(latlong) {
    const apikey = '2e02337f172f81a5e1bdc1878700fc67'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlong.lat}&lon=${latlong.long}&appid=${apikey}`
    axios.get(url)
      .then(res => {
        const celsius = (res.data.main.temp - 273.15).toFixed(1)
        const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
        
        setTemperature({ celsius, farenheit })
        setWeather(res.data)
        
      })
      .catch(err => console.log(err))
  }

}, [latlong])

  return (
      <div className='App'>
        {
          weather ?
          <WeatherCards 
            weather={weather}
            temperature={temperature}
          />
          :
          <Loading />
        }
        
      </div>
    
  )
}

export default App
