import React from 'react';
import './Components.css';

const Marker = (props: any) => {
    const {color, name} = props;
    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
            />
        </div>
    );
};

export default Marker;