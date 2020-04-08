import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result';

// klucz do API
const APIKey = 'da4eb50462e6d6a603af1fe2ac7db43c';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInput = (e) => {

    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {

    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Coś poszło nie tak")
      })
      .then(response => response.json())
      .then(response => {
        const time = new Date().toLocaleString()
        this.setState(prevState => ({
          err: false,
          date: time,
          city: prevState.value,
          sunrise: response.sys.sunrise,
          sunset: response.sys.sunset,
          temp: response.main.temp,
          pressure: response.main.pressure,
          wind: response.wind.speed,
        }))
      })
      .catch(err => {
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }))
      })
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInput} submit={this.handleSubmit} />
        <Result error={this.state.err} weather={this.state} />
      </div>
    )
  }
}


export default App;
