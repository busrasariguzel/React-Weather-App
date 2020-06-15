import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import '../public/site.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVzcmFjb2RlIiwiYSI6ImNrYjlxMmVobzBjMGcycXIxbzFvazZyc2UifQ.5m3VJPNtLqw3QiVebGCRIA';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: '',
        lat: '',
        zoom: 8
        };
        }

        componentDidMount() {
            const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.props.lon, this.props.lat],
            zoom: this.state.zoom
            });

            map.on('move', () => {
                this.setState({
                lng: this.props.lon,
                // map.getCenter().this.props.lon.toFixed(4),
                lat: this.props.lat,
                // map.getCenter().this.props.lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
                });
                });
            }
            render() {
                console.log('lat...' , this.props.lat)
                console.log('long...' , this.props.lon)
                
                return (
                <div>
                    <div className='sidebarStyle'>
                    
                    <div>Longitude: {this.props.lon} | Latitude: {this.props.lat} | Zoom: {this.state.zoom}</div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
                </div>
                </div>
                )
                }




    }
     
    // ReactDOM.render(<Application />, document.getElementById('app'));

    export default Application