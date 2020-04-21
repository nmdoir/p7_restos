import React from 'react';
import "./Components.css";
import {CommentsModal} from "./CommentsModal";

const RestoBloc = (props: any) => {
    const {name, address, rating, stars, lat, lng} = props;

    return (
        <li
            className={"list-group-item commentsModal"}
            title={name}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <h4>{name}</h4>
                        <p className={"font-larger"}>{address}</p>
                        <div className={"stars-outer far fa-star"}>
                            <div
                                className={"stars-inner fas fa-star"}
                                style={{ width: stars }}
                            />
                        </div>
                        <span className={"font-larger bold"}> {rating}</span>
                        <span className={"float-right"}>
                        <button type="button" className="btn btn-light" onClick={CommentsModal} title={name}>
                            Commentaires
                        </button>
                        </span>
                    </div>

                    <div className="col-3">
                        <img
                            src={"https://maps.googleapis.com/maps/api/streetview?size=110x110&location=" + lat + "," + lng + "&key=AIzaSyDqUz5uWh3Bc32cdHvUQ-JZo1r9TJilfIw" }
                            alt={"Streetview"}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};

export default RestoBloc;