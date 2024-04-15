export default function WeatherCard (props) {
  return (
    <>
      <section className="weather">
        <p>{props.country}</p>
        <p>{props.city}</p>
        <p>{props.temp}</p>
        <p>{props.condition}</p>
        <p>{props.time}</p>
        <img src={props.image} alt={props.alt} className="weather-img"/>
      </section>
    </>
  )
}
