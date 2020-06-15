import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import '../public/site.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVzcmFjb2RlIiwiYSI6ImNrYjlxMmVobzBjMGcycXIxbzFvazZyc2UifQ.5m3VJPNtLqw3QiVebGCRIA';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 5,
        lat: 34,
        zoom: 2
        };
        }
        componentDidMount() {
            const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
            });

            map.on('move', () => {
                this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
                });
                });
            }
            render() {
                return (
                <div>
                    <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
                </div>
                </div>
                )
                }




    }
     
    // ReactDOM.render(<Application />, document.getElementById('app'));

    export default Application