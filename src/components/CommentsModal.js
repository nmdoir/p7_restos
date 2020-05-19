import React from "react";
import "./Components.css";

const CommentsModal = (props) => {

    const {name, address, rating, stars, comments} = props;

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h4>{name}</h4>
                    <p className={"font-larger"}>{address}</p>
                    <div className={"stars-outer far fa-star margin-bottom"}>
                        <div
                            className={"stars-inner fas fa-star"}
                            style={{ width: stars }}
                        />
                    </div>
                    <span className={"font-larger bold"}>{rating}</span>
                    <p>{comments}</p>
                </div>
            </div>
        </div>


    );
};

export {CommentsModal};