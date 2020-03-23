import React from 'react';
import "./Marker.css";

const RestoBloc = (props: any) => {
    const {name, address, rating} = props;
    return (
        <li
            className={"list-group-item"}
            title={name}
        >
            <h4>{name}</h4>
            <p className={"font-larger"}>{address}</p>
            <p className={"font-larger"}>{rating}</p>
        </li>
    );
};

export default RestoBloc;