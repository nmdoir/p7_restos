 import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import {Restos} from "./RestosData";
import './MapContainer.css';
import CommentBody from "./CommentBody";
import {arrAvg, stars} from "./RestoList";

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
            <div style={{ height: '80vh', width: '100%' }} className={"map-margin"}>
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
                        Restos.map(resto =>
                            <Marker
                                color="#348680"
                                name={resto.name}
                                address={resto.address}
                                rating={arrAvg(resto.ratings.map(rating => rating.stars))}
                                stars={stars(resto)}
                                lat={resto.lat}
                                lng={resto.long}
                                comments={resto.ratings.map(rating =>
                                    <CommentBody
                                        stars={`${(rating.stars * 100) / 5}%`}
                                        comment={rating.comment}
                                    />
                                )}
                            />
                        )
                    }
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;