import React, { Component } from 'react'

export default class EachWeatherData extends Component {
    constructor(props){
        super()
    }
    render() {
        console.log('item.....',this.props.item)
        return (
            <div>
            <p> city:  {this.props.item.city_name} , {this.props.item.state_code} </p> 
            <p> temperature: {this.props.item.app_temp} </p>
            
            </div>
        )
    }
}
