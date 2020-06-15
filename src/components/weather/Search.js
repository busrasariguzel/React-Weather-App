import React, { Component } from 'react';
// import EachWeatherData from './EachWeatherData'
import WeatherSingleData from './WeatherSingleData'

export default class Search extends Component {
    constructor(props){
        super()
        this.state={
            city:''
        }
    }
    // handleChange = (event)=> {
    //     this.setState({ city: event.target.value});
    //     // this.setState({ })
    //     this.props.getWeather(this.state.city)
    //     event.preventDefault();
    //   }
      handleSubmit = (event)=> {
        this.setState({ city: event.target.value});
        // this.setState({ })
        this.props.getWeather(this.state.city)
        event.preventDefault();
      }
    render() {
        console.log('cityyyy....' , this.state.city)
        console.log('weather.... in searc....', this.props.weatherData)
        console.log(this.props.weatherData)
        if (this.state.city !== undefined){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input
            type="text" 
            onChange={this.handleSubmit}
             value={this.state.city}/>
            <WeatherSingleData  weatherData={this.props.weatherData} city={this.state.city}
                    />
                    <button type="submit" onSubmit={this.handleSubmit}> Search</button>
                </form>

                {/* <div>
                {this.props.weatherData
.map((item,idx)=>{
    
                return (
                    <div key={idx}>
                    
                    <EachWeatherData  weatherData={this.state.weatherData}
                    item={item} idx={idx}/>
                    
                    </div>
                )
            }
            )} 
            </div> */}
            
                {/* <p> city:  {this.props.item.city_name} , {this.props.item.state_code} </p> 
            <p> temperature: {this.props.item.app_temp} </p> */}


{/*                 
                {this.props.item
    .map((item,idx)=>{
        
// console.log(this.state.country)
// console.log(item.country)
        if(this.state.city.toLowerCase() === item.city_name.toLowerCase()){
            return (
                <div style={{
                    width:'40%',
                }} key={idx}>
</div>
                    )
                } 
                
            }
            
                )} */}
                

            </div>
            
        )
        
    }
    

}}