import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
    constructor(){
        super()
        this.state = {
            weatherData : []
        }
    }


    
    getWeather = () => {
        axios.get("https://pl12133-weatherspot-v1.p.rapidapi.com/db/query.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "pl12133-weatherspot-v1.p.rapidapi.com",
            "x-rapidapi-key": "166a12c160msh0bf532aec0b7a0ep10056ajsncff2841e5dfb"
        }
    })
    .then(response => {
        console.log(response);
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
            <div>
               app 
            </div>
        )
    }
}
