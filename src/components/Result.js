import React from 'react';

const Result = (props) => {
  const { city, err, pressure, wind, sunset, sunrise, temp, date } = props.weather
  return (
    <React.Fragment>
      <p>Wybrane miasto: {city}</p>
      <p>Temperatura: {temp}</p>
      <p>Wschód słońca: {sunrise}</p>
      <p>Zachód słońca: {sunset}</p>
      <p>Ciśnienie: {pressure}</p>
      <p>Wiatr: {wind}</p>
    </React.Fragment>

  );
}


export default Result;