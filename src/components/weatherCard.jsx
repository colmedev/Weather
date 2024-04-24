export default function WeatherCard (props) {
  const Celcius = Math.fround(props.temp - 273.75).toFixed(2)
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
            <p>{Celcius}ºC</p>
            <p>{props.wind} m/s</p>
            <p>{props.feels_like}</p>
        </div>
        </div>
    </>
  )
}
