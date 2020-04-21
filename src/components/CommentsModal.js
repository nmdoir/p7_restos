import {Restos} from "./RestosData";
import RestoBloc from "./RestoBloc";
import {arrAvg, stars} from "./RestoList";
import React from "react";
import CommentBody from "./CommentBody";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentsModal = (resto) => {

    
    for (let i = 0; i < Restos.length; i++) {
        if (Restos[i].name === resto) {
            resto = Restos[i];
        }
    }

    return (
        <Modal show={true}>
            <Modal.Header>Avis du restaurant</Modal.Header>
            <Modal.Body>
                {
                    <RestoBloc
                        name={resto.name}
                        address={resto.address}
                        rating={arrAvg(resto.ratings.map(rating => rating.stars))}
                        stars={stars(resto)}
                        lat={resto.lat}
                        lng={resto.long}
                    />
                }

                {
                    resto.ratings.map(comment =>
                        <CommentBody
                            rating={comment.stars}
                            comment={comment.comment}
                        />
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <button>Fermer</button>
            </Modal.Footer>
        </Modal>
    );
};

export {CommentsModal};