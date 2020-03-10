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


    render() {
        return (
            <div style={{ height: '80vh', width: '60%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCkx4KGVE_1aFU2deJoQXKDC3-oWy8U1U4",
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