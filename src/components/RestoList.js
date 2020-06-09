import React from 'react';
import {Restos} from "./RestosData";
import RestoBloc from "./RestoBloc";
import './RestoList.css';
import CommentBody from "./CommentBody";
import Marker from "./Marker";


export const arrAvg = arr => Math.round((arr.reduce((a,b) => a + b, 0) / arr.length) * 10) / 10;

export function stars(resto) {
    const rating = arrAvg(resto.ratings.map(rating => rating.stars)
    );
    const starTotal = 5;
    const starPercentage = (rating / starTotal) * 100;
    return `${(Math.round(starPercentage / 10) * 10)}%`;
}

class RestoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 1,
            max: 5
        };

        this.changeMin = this.changeMin.bind(this);
        this.changeMax = this.changeMax.bind(this);
    }

    changeMin(event) {
        this.setState({min: event.target.value});
    }
    changeMax(event) {
        this.setState({max: event.target.value});
    }

    filter(rating) {
        if (rating < this.state.min || rating > this.state.max) {
            return 'none';
        }
    }



render() {

    return (

    <div style={{ width: '100%' }}>
        <ul className={"listGroup"}>
        <div className="row align-items-center margin-bottom">
            <div className="col-auto">
                <label>Note minimum</label>
                <select
                    className="custom-select mr-sm-2"
                    id="selectMin"
                    value={this.state.min}
                    onChange={this.changeMin}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="col-auto">
                <label>Note maximum</label>
                <select
                    className="custom-select mr-sm-2"
                    id="selectMax"
                    value={this.state.max}
                    onChange={this.changeMax}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>

            {
                Restos.map(resto =>
                    <RestoBloc
                        visibility={this.filter(arrAvg(resto.ratings.map(rating => rating.stars)))}
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
                        marker={
                            <Marker
                                lat={resto.lat}
                                lng={resto.long}
                                color="#348680"
                            />
                        }
                    />
                )
            }
        </ul>
    </div>

);
}
}

export default RestoList;