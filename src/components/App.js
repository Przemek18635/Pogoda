import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';
import Result2 from './Result2';

const APIKey = '04af682909ae12722092514221b97a78'

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
    city2: '',
    temp2: '',
    city3: '',
    temp3: '',
    city4: '',
    temp4: '',
  }

  handleInputChange = e => {
    this.setState
    ({
      value: e.target.value
    })
  }

  componentDidMount() 
  {
    const API2 = `http://api.openweathermap.org/data/2.5/weather?q=Sopot&APPID=${APIKey}&units=metric`;
    fetch(API2)
    .then(response => {
        return response
    })
    .then(response => response.json())
    .then(data2 => {
      this.setState(state => ({
       city2: data2.name,
       temp2: data2.main.temp,
      }))
    })
    const API3 = `http://api.openweathermap.org/data/2.5/weather?q=Warszawa&APPID=${APIKey}&units=metric`;
    fetch(API3)
    .then(response => {
        return response
    })
    .then(response => response.json())
    .then(data3 => {
      this.setState(state => ({
       city3: data3.name,
       temp3: data3.main.temp,
      }))
    })
    const API4 = `http://api.openweathermap.org/data/2.5/weather?q=Gdańsk&APPID=${APIKey}&units=metric`;
    fetch(API4)
    .then(response => {
        return response
    })
    .then(response => response.json())
    .then(data4 => {
      this.setState(state => ({
       city4: data4.name,
       temp4: data4.main.temp,
      }))
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.value.length === 0) return
    if (prevState.value !== this.state.value){
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

        fetch(API)
          .then(response => {
            if(response.ok){
              return response
            }
            throw Error("Nie udało się")
        })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(state => ({
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: state.value,
      }))
    })
    .catch(err =>{
       console.log(err);
       this.setState(prevState => ({
         err: true,
         city: prevState.value
       }))
    })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Pogoda</h1>
        <Form 
          value={this.state.value} 
          change={this.handleInputChange} 
        />
        <h2>Pogoda dla miast:</h2>
          <Result2
          weather={this.state}
        />
         <h2>Pogoda dla: <strong>{this.state.value}</strong></h2>
          <Result 
          weather={this.state}
        /> 
        </div>
    );
  }
}

export default App;
