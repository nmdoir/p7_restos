import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

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
                    <Marker
                        lat={48.869292}
                        lng={2.366272}
                        name="IMA Cantine"
                        color="#348680"
                    />
                    <Marker
                        lat={48.8737815}
                        lng={2.3501649}
                        name="Bronco"
                        color="#348680"
                    />
                    <Marker
                        lat={48.870779}
                        lng={2.360557}
                        name="Les Résistants"
                        color="#348680"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;