import React from 'react';
import {Restos} from "./RestosData";
import RestoBloc from "./RestoBloc";
import './Marker.css';

const arrAvg = arr => Math.round((arr.reduce((a,b) => a + b, 0) / arr.length) * 10) / 10;

function RestoList() {

    return (

    <div style={{ height: '80vh', width: '100%' }}>
        <ul className={"listGroup"}>
        {
                Restos.map(resto =>
                    <RestoBloc
                        name={resto.name}
                        address={resto.address}
                        rating={arrAvg(resto.ratings.map(rating => rating.stars))}
                    />
                )
            }
        </ul>

    </div>

);
}

export default RestoList;