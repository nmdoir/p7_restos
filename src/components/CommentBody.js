import React from 'react';
import "./CommentBody.css";

const CommentBody = (props) => {
    const {stars, comment} = props;
    return (
        <li
            className={"list-group-item"}
        >
            <div className={"stars-outer far fa-star margin-bottom"}>
                <div
                    className={"stars-inner fas fa-star"}
                    style={{ width: stars }}
                />
            </div>
            <div>{comment}</div>
        </li>
    );
};


export default CommentBody;