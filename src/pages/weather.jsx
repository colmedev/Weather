/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
const Key = '4c85a7ae58e9460eaa9222441242901'

function Weather () {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temp_c: '',
    condition_text: '',
    icon: ''
  })
  const url = `http://api.weatherapi.com/v1/current.json?key=${Key}&lang=es&q=`
  const urlLocation = url + location

  const FetchAPI = async () => {
    if (!location) return
    try {
      const res = await fetch(urlLocation)

      if (!res.ok) throw new Error()

      const data = await res.json()

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp_c: data.current.temp_c,
        condition_text: data.current.condition.text,
        icon: data.current.condition.icon
      })
    } catch (error) {
      console.error(error, error)
    }
  }

  useEffect(() => {
    if (Location) {
      FetchAPI()
    }
  }, [Location])

  console.log(weather)
  return (
    <>
    <input name='search'
    value={location}
    onChange={(e) => setLocation(e.target.value)}/>

    <button type='submit' onClick={FetchAPI}>Search</button>
    </>
  )
}
export default Weather
