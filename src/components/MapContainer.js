import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 48.86,
            lng: 2.35
        },
        zoom: 14
    };

    render() {
        return (
            // Important! Always set the container height explicitly
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
                    <AnyReactComponent
                        lat={48.869292}
                        lng={2.366272}
                        text="IMA Cantine"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;