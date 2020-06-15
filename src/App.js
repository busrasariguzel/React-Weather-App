import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios';
import MainRouter from './MainRouter';
import Spinner from './components/Spinner/Spinner'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import Navbar from './components/Navbar/Navbar'

import Weather from './components/weather/Weather';
import Search2 from './components/weather/Search'
import ThemeContextProvider from './components/Context/ThemeContext';



export default class App extends Component {
    constructor(){
        super()
        this.state = {
            weatherData : [],
            cityState: '',
            mapData: [],
            // location:''
        }
    }


    
    getWeather = (
        cityState
        ) => {
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${cityState}&key=a8475107fdf1405786271982ea7db651`, {
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
    getMapData = (
        location
        ) => {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1IjoiYnVzcmFjb2RlIiwiYSI6ImNrYjlxMmVobzBjMGcycXIxbzFvazZyc2UifQ.5m3VJPNtLqw3QiVebGCRIA`, {
        "method": "GET",
    })
    .then(response => {
        console.log('map data...', response);
        // this.setState({ weatherData : response.data.data})
        // console.log('map state data....', this.state.mapData)
    })
    .catch(err => {
        console.log(err);
    });
    }
    componentDidMount(){
        this.getWeather()
        this.getMapData()
    }

    
    render() {
        return (
            <ThemeContextProvider>
            <Router>
                <Navbar />
                <Search2 weatherData={this.state.weatherData} city={this.state.cityState} getWeather={this.getWeather}/>
                {/* <Weather  weatherData={this.state.weatherData}/> */}
        <Signup />
        {/* <Signin /> */}
       
        <React.Suspense>
        <MainRouter />
        </React.Suspense>
      </Router>
      </ThemeContextProvider>
        )
    }
}
