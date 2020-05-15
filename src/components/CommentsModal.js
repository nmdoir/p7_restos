import {Restos} from "./RestosData";
//import RestoBloc from "./RestoBloc";
//import {arrAvg, stars} from "./RestoList";
import React from "react";
import CommentBody from "./CommentBody";
import "bootstrap/dist/css/bootstrap.min.css";


const CommentsModal = (props) => {

    const {name, address, rating, stars} = props;

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h4>{name}</h4>
                    <p className={"font-larger"}>{address}</p>
                    <div className={"stars-outer far fa-star"}>
                        <div
                            className={"stars-inner fas fa-star"}
                            style={{ width: stars }}
                        />
                    </div>
                    <span className={"font-larger bold"}> {rating}</span>


                </div>
            </div>
        </div>


    );
};

export {CommentsModal};