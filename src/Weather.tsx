import { useState } from "react";
import UseFetch from "./components/CustomHook/UseFetch";
import React from "react";
import Card from "./components/Card/Card";

export interface Root {
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}
export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}
export interface Wind {
  speed: number
  deg: number
  gust: number
}
export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

 const Weather : React.FC = () => {
    const [ location, setLocation ] = useState('mexico')
    const state = UseFetch<Root>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_KEY}`)  
  
    

  if(state.loading) {
    <p>Loading...</p>
  }

  if(state.error) {
    <p>{state.error}</p>
  }

  console.log(state.data?.weather[0].id)
  

  return (
    <div>
      <Card 
      city={state.data?.name}

      image={`https://openweathermap.org/img/wn/${state.data?.weather[0].icon}@2x.png`} alt="Weather Icon"

      condition={state.data?.weather[0].description}

      celcius={state.data?.main.temp}

      wind={state.data?.wind.speed} 

      feels_like={state.data?.main.feels_like}
      
      />
      
    </div>
  )
}

export default Weather;