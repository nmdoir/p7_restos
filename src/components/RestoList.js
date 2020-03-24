import React from 'react';
import {Restos} from "./RestosData";
import RestoBloc from "./RestoBloc";
import './Components.css';

const arrAvg = arr => Math.round((arr.reduce((a,b) => a + b, 0) / arr.length) * 10) / 10;

    //document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

function stars(resto) {
    const rating = arrAvg(resto.ratings.map(rating => rating.stars)
    );
    const starTotal = 5;
    const starPercentage = (rating / starTotal) * 100;
    return `${(Math.round(starPercentage / 10) * 10)}%`;
}

console.log(
    Restos.map(resto =>
        arrAvg(resto.ratings.map(rating => rating.stars))
    )
);

function RestoList() {

    return (

    <div style={{ width: '100%' }}>
        <ul className={"listGroup"}>
        {
                Restos.map(resto =>
                    <RestoBloc
                        name={resto.name}
                        address={resto.address}
                        rating={arrAvg(resto.ratings.map(rating => rating.stars))}
                        stars={stars(resto)}
                        lat={resto.lat}
                        lng={resto.long}
                    />
                )
            }
        </ul>

    </div>

);
}

export default RestoList;