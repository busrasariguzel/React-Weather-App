import React, { Component, createContext } from 'react';
export const WeatherContext = createContext();


export default class WeatherContextProvider extends Component {
    state={
        hasLocation : false

    }
    toggleLocation = () => {
        this.setState({ hasLocation : !this.state.hasLocation})
    }
    render() {
        return (
           <WeatherContextProvider value={{...this.state, toggleLocation: this.toggleLocation}}>
                {this.props.children}
           </WeatherContextProvider>
        )
    }
}
