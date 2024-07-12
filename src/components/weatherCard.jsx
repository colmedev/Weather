import { BiWind } from 'react-icons/bi'
export default function WeatherCard (props) {
  const Celcius = (prop) => Math.fround(prop - 273.75).toFixed(2)
  const Speed = (props) => Math.round(props * 3.6)
  return (
    <>
        <div className="location">
          <p className="country">{props.country}</p>
          <p className="city">{props.city}</p>
        </div>

          <div className="cont-img">
            <img src={props.image} alt={props.alt} className="weather-img"/>
          </div>

        <div className="date">
          <p className="cond">{props.condition}</p>
          <div className="temp">
            <p> { Celcius(props.temp) } ºC </p>
            <p> <BiWind className='icon' /> { Speed(props.wind) } Km/h </p>
            <p> Feels Like: { Celcius(props.feels_like) } ºC </p>
        </div>
        </div>
    </>
  )
}
