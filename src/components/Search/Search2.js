import React, { Component } from 'react'

export default class Search2 extends Component {
    constructor(props){
        super()
        this.state={
            city:''
        }
    }
    handleChange = (event)=> {
        this.setState({ city: event.target.value});
        // this.setState({ })
        this.props.getWeather(this.state.city)
        event.preventDefault();
      }
    render() {
        return (
            <div>
                <form>
                <input
            type="text" onChange={this.handleChange} value={this.state.city}/>
                </form>


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
    

    }