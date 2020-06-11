import React, { Component } from 'react'
import EachWeatherData from './EachWeatherData'

export default class Weather extends Component {
    constructor(props){
        super()
    }
    render() {
        console.log(this.props.weatherData)
        return (
            <div>
                {this.props.weatherData
.map((item,idx)=>{
    
                return (
                    <div key={idx}>
                    hi
                    <EachWeatherData  weatherData={this.props.weatherData}
                    item={item} idx={idx}/>
                    
                    </div>
                )
            }
            )} 
            </div>
        )
    }
}
