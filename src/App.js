import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios';
import MainRouter from './MainRouter';
import Spinner from './components/Spinner/Spinner'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import Navbar from './components/Navbar/Navbar'

import Weather from './components/weather/Weather'



export default class App extends Component {
    constructor(){
        super()
        this.state = {
            weatherData : []
        }
    }


    
    getWeather = (
        // city
        ) => {
        axios.get('https://api.weatherbit.io/v2.0/current?city=Boston,MA&key=a8475107fdf1405786271982ea7db651', {
        "method": "GET",
    })
    .then(response => {
        console.log('weather data...', response.data.data);
        this.setState({ weatherData : response.data.data})
        console.log('weatherdata....', this.state.weatherData)
    })
    .catch(err => {
        console.log(err);
    });
    }

    componentDidMount(){
        this.getWeather()
    }

    
    render() {
        return (
            <Router>
                <Navbar />
                <Weather  weatherData={this.state.weatherData}/>
        <Signup />
        {/* <Signin /> */}
        <React.Suspense>
        <MainRouter />
        </React.Suspense>
      </Router>
        )
    }
}
