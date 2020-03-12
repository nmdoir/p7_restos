import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import {Restos} from "./RestosData";

class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 48.87,
            lng: 2.36
        },
        zoom: 15
    };

    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords);
                    MapContainer.defaultProps = {
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    };
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
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                >
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