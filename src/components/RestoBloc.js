import React from 'react';

const RestoBloc = (props: any) => {
    const {name, address, rating} = props;
    return (
        <li
            className={"list-group-item"}
            title={name}
        >
            <h5>{name}</h5>
            <p>{address}</p>
            <p>{rating}</p>
        </li>
    );
};

export default RestoBloc;