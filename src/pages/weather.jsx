import { useState, useEffect } from 'react'
import WeatherCard from '../components/weatherCard'
import '../App.css'
const KeyApi = '7b34ffaf3ac4523deb1dc2a9f2c3efff'

const DEFAULT_WEATHER = {
  city: '',
  country: '',
  temp_c: '',
  wind: '',
  humidity: '',
  condition_text: '',
  icon: '',
  feels_like: ''
}

export default function Weather () {
  const [location, setLocation] = useState('london')
  const [weather, setWeather] = useState(DEFAULT_WEATHER)

  useEffect(() => {
    const FetchApi = async () => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='
      const urlLocation = url + location + `&appid=${KeyApi}`

      if (location) {
        try {
          const response = await fetch(urlLocation)
          if (!response.ok) throw new Error('Failed to fetch')
          const data = await response.json()

          setWeather({
            city: data.name,
            country: data.sys.country,
            temp_c: data.main.temp,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            condition_text: data.weather[0].description,
            icon: data.weather[0].icon,
            feels_like: data.main.feels_like
          })
        } catch (Error) {
          console.error(Error, Error)
        }
      }
    }

    FetchApi()
  }, [location])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setLocation(e.target.search.value)
  }

  return (
    <>
      <form className='search-box' onSubmit={(e) => { handleOnSubmit(e) } }>
      <input className='search-input'
      placeholder='City'
      name='search'
      />
      <button type='submit' className='btn'>Search</button>
    </form>

    <WeatherCard
    country = { weather.country }
    city = { weather.city }
    image = { `https://openweathermap.org/img/wn/${weather.icon}@2x.png` }
    alt = { weather.condition_text }
    condition = { weather.condition_text }
    temp = { weather.temp_c }
    wind = { weather.wind }
    humidity = { weather.humidity }
    feels_like = { weather.feels_like }
    />

    </>
  )
}
