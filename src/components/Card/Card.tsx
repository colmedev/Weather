export interface CardProps {
  country?: string;
  city?: string;
  image?: string;
  alt?: string;
  celcius?: number;
  condition?: string;
  wind?: number;
  feels_like?: number;
}
export default function Card({country, city, image, alt, celcius, condition, wind, feels_like} : CardProps) {


  return(
    <>
    <section>

      <article className="location-section">
        <p>{country}</p>
        <p>{city}</p>
      </article>

      <div className="img-container">
        <img className="weather-icon" src={image} alt={alt} />
      </div>

      <article>
        <section>
          <p>{condition}</p>
        </section>

        <section>
          <p>{celcius}</p>
          <p>{wind}</p>
          <p>{feels_like}</p>
        </section>
      </article>

    </section>

    </>
  )
}