/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
const Key = '4c85a7ae58e9460eaa9222441242901'

const url = `http://api.weatherapi.com/v1/current.json?key=${Key}&lang=es&q=London`

function Weather () {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temp_c: '',
    condition_text: '',
    icon: ''
  })

  useEffect(() => {
    const FetchAPI = async () => {
      const res = await fetch(url)
      const data = await res.json()

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp_c: data.current.temp_c,
        condition_text: data.current.condition.text,
        icon: data.current.condition.icon
      })
    }
    FetchAPI()
  }, [weather])

  return (
    <>
    <button>Search</button>
    </>
  )
}
export default Weather
