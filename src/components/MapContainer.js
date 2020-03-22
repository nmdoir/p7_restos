 import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import {Restos} from "./RestosData";
import './Marker.css';

class MapContainer extends React.Component {
    state = {
        center: {
            lat: 48.87,
            lng: 2.36
        },
        zoom: 15,
        userPos: {
            lat: null,
            lng: null
        }
    };

    _onChange = ({center, zoom}) => {
        this.setState({
            center: center,
            zoom: zoom,
        });
    };

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        center : {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        className: "place pin bounce",
                        userPos : {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    });
                }
            );

        } else {
            alert("Votre localisation n'a pas été trouvée.")
        }
    };

    render() {
        return (
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyDqUz5uWh3Bc32cdHvUQ-JZo1r9TJilfIw",
                        libraries: ['places']
                    }}
                    onChange={this._onChange}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                >
                    <div
                        className={this.state.className}
                        style={{ backgroundColor: "red", cursor: 'pointer' }}
                        lat={this.state.userPos.lat}
                        lng={this.state.userPos.lng}
                    />
                    {
                        Restos.map(marker =>
                            <Marker
                                lat={marker.lat}
                                lng={marker.long}
                                name={marker.name}
                                color="#348680"
                            />
                        )
                    }
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;