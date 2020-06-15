import React, { Component } from 'react'

export default class WeatherSingleData extends Component {
    constructor(props){
        super()

    }
    render() {
        if (this.props.city !== ""){
            if(this.props.weatherData === undefined){
        return (
            <div>
        ' '
                
            
            </div> 
            
        )
    } else {
        return (
            <div>
                {this.props.weatherData
.map((item,idx)=>{
                return (
                    <div className="container">
                        <div className="cards">
                    <div key={idx}>
                    
            <h2> {this.props.weatherData[0].city_name} </h2> 
            <p className="py-4">  {this.props.weatherData[0].app_temp} C </p>
            {/* <p> lat {this.props.weatherData[0].lat} </p> */}
            {/* <p> long: {this.props.weatherData[0].lon} </p> */}
            <p> {this.props.weatherData[0].weather.description} </p>
            {/* <icon> {this.props.weatherData[0].weather.code} </icon> */}
            <div><img src={`https://www.weatherbit.io/static/img/icons/${this.props.weatherData[0].weather.icon}.png`} alt="icon" />
            {/* <span>Hello {this.props.name}</span> */}
            </div>
            {/* <img> src=`https://www.weatherbit.io/static/img/icons/{this.props.weatherData[0].weather.icon}.png` </img> */}

            </div>       
            </div>
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
                
            </div>
        )
    }
}
}
