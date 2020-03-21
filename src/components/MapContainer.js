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
        zoom: 15
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
            <div style={{ height: '80vh', width: '60%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCE6qR2VZH07JiSuIDmV65qImfCcgDXWrE",
                        libraries: ['places']
                    }}
                    onChange={this._onChange}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                >
                    <div
                        className="place pin bounce"
                        style={{ backgroundColor: "red", cursor: 'pointer' }}
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
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