import React from 'react';
import "./Components.css";

const RestoBloc = (props: any) => {
    const {name, address, rating, stars} = props;
    return (
        <li
            className={"list-group-item"}
            title={name}
        >
            <h4>{name}</h4>
            <p className={"font-larger"}>{address}</p>
            <div className={"stars-outer far fa-star"}>
                <div
                    className={"stars-inner fas fa-star"}
                    style={{ width: stars }}
                />
            </div>
            <span className={"font-larger bold"}> {rating}</span>
        </li>
    );
};

export default RestoBloc;