import React from 'react';
import {Restos} from "./RestosData";
import RestoBloc from "./RestoBloc";

function RestoList() {

    return (

    <div style={{ height: '80vh', width: '100%' }}>
        <ul className={"listGroup"}>
        {
                Restos.map(resto =>
                    <RestoBloc
                        name={resto.name}
                        address={resto.address}
                        ratings={resto.ratings.stars}
                    />
                )
            }
        </ul>

    </div>

);
}

export default RestoList;