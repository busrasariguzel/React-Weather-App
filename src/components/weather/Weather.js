import React, { Component } from 'react'
import EachWeatherData from './EachWeatherData'

export default class Weather extends Component {
    constructor(props){
        super()
        this.state = {
            lat : '',
            lon: ''
        }
    }
    
    render() {
        console.log(this.props.weatherData)
        return (
            <div>
                {this.props.weatherData
.map((item,idx)=>{
    
                return (
                    <div key={idx}>
                
                    <EachWeatherData  weatherData={this.state.weatherData} city={this.state.city}
                    item={item} idx={idx}/>
                    
                    </div>
                )
            }
            )} 
            </div>
        )
    }
}
