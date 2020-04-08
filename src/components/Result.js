import React from 'react';
import './Result.css'
const Result = (props) => {
  const { city, err, pressure, wind, sunset, sunrise, temp, date } = props.weather;
  let info = null;
  // Warunkujemy info dla danego miasta, jeśli nie ma błędu i zmienna city zawiera jakąś wartość
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    info = (
      <div>
        <h3>Informacje dla miasta: <span className="capitalLetter">{city}</span></h3>
        <p>Na dzień: <strong>{date}</strong></p>
        <p>Temperatura: <strong>{temp}</strong> &#176;C</p>
        <p>Wschód słońca: <strong>{sunriseTime}</strong></p>
        <p>Zachód słońca: <strong>{sunsetTime}</strong></p>
        <p>Ciśnienie: <strong>{pressure}</strong> hPa</p>
        <p>Wiatr: <strong>{wind}</strong> km/h</p>
      </div >
    )
  }
  return (
    <div className="result">
      {err ? `Miasto ${city} nie zostało znalezione` : info}
    </div>

  );
}


export default Result;