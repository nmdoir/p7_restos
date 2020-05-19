import React from 'react';
import "./Components.css";

const CommentBody = (props) => {
    const {stars, comment} = props;
    return (
        <li
            className={"list-group-item"}
        >
            <p>Note : <span className={"bold"}>{stars}/5</span></p>
            <p>{comment}</p>
        </li>
    );
};


export default CommentBody;