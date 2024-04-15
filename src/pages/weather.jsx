import { useState, useEffect } from 'react'
import WeatherCard from '../components/weatherCard'
const Key = '4c85a7ae58e9460eaa9222441242901'
export default function Weather () {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temp_c: '',
    condition_text: '',
    icon: '',
    local_time: ''
  })
  const url = `http://api.weatherapi.com/v1/current.json?key=${Key}&lang=es&q=`
  const urlLocation = url + location

  const FetchApi = async () => {
    if (location) {
      try {
        const res = await fetch(url + location)
          .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
          .then(res => res.json())
          .then(data =>
            setWeather({
              city: data.location.name,
              country: data.location.country,
              temp_c: data.current.temp_c,
              condition_text: data.current.condition.text,
              icon: data.current.condition.icon,
              local_time: data.location.localtime
            })
          )
      } catch (Error) {
        console.error(Error, Error)
      }
    }
  }
  useEffect(() => {
    if (location) {
      FetchApi()
    }
  }, [location])

  console.log(weather)
  return (
    <>
    <form className='search-box rounded-sm flex justify-end' onSubmit={(e) => { e.preventDefault(); setLocation(e.target.search.value) } }>
      <input className='search-input'
      placeholder='City'
      name='search'
      />
      <button type='submit'>Search</button>
    </form>

          <WeatherCard
          country = { weather.country }
          city = { weather.city }
          temp = { weather.temp_c }
          condition = { weather.condition_text }
          time = { weather.local_time }
          image = { weather.icon}
          />
    </>
  )
}
