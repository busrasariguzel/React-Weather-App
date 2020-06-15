import React, { Component } from 'react'

export default class WeatherSingleData extends Component {
    constructor(props){
        super()

    }
    render() {
        console.log('this . props...', this.props.city)
        console.log('weather dataa chwck chwck.... ', this.props.weatherData)
        if (this.props.city !== ""){
            if(this.props.weatherData === undefined){

            
        
        return (
            <div>
            got it
                
            
            </div> 
            
        )
    } else {
        return (
            <div>
                {this.props.weatherData
.map((item,idx)=>{
    console.log('itemmmmmmmm', this.props.weatherData[0].city_name)
                return (
                    <div key={idx}>
                    
            <p> city:  {this.props.weatherData[0].city_name} , {this.props.weatherData[0].state_code} </p> 
            <p> temperature: {this.props.weatherData[0].app_temp} </p>
            <p> lat {this.props.weatherData[0].lat} </p>
            <p> long: {this.props.weatherData[0].lon} </p>
                     

                    </div>
                )
            }
            )}  
            </div>
        )
    }
}
    else {
        return (
            <div>
                hi
            </div>
        )
    }
}
}
