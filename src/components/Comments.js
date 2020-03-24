import React from 'react';
import "./Components.css";

const CommentsModal = (props: any) => {
    const {stars, comment} = props;
    return (
        <li
            className={"list-group-item"}
        >
            <h4>Note : {stars}</h4>
            <p className={"font-larger"}>{comment}</p>
        </li>
    );
};


export default CommentsModal;