import React from 'react';
import "./RestoBloc.css";
import {CommentsModal} from "./CommentsModal";

const RestoBloc = (props) => {
    const {name, address, rating, stars, lat, lng, comments, visibility} = props;

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <li
            className={"list-group-item"}
            title={name}
            style={{ display: visibility}}
        >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 no-padding-left">
                            <h4>{name}</h4>
                            <p className={"margin-bottom"}>{address}</p>
                            <div className={"stars-outer far fa-star padding"}>
                                <div
                                    className={"stars-inner fas fa-star"}
                                    style={{ width: stars }}
                                />
                            </div>
                            <span className={"font-larger bold inline-block"}> {rating}</span>
                            <button type="button" className="btn btn-light margin-bottom" onClick={showModal} title={name}>
                                Voir les avis
                            </button>
                        </div>

                        <div className="col-md-4 no-padding">
                            <img
                                className={"streetview-img"}
                                src={"https://maps.googleapis.com/maps/api/streetview?size=110x110&location=" + lat + "," + lng + "&key=AIzaSyDqUz5uWh3Bc32cdHvUQ-JZo1r9TJilfIw" }
                                alt={"Streetview"}
                            />
                        </div>
                    </div>
                </div>
                {
                    <CommentsModal
                        name={name}
                        address={address}
                        rating={rating}
                        stars={stars}
                        comments={comments}
                        openModal={isOpen}
                        hideModal={hideModal}
                    />
                }
        </li>


    );
};

export default RestoBloc;