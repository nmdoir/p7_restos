import React from 'react';
import "./CommentsModal.css";
import Modal from "react-bootstrap/Modal";

const CommentsModal = (props) => {

    const {name, address, rating, stars, comments, openModal, hideModal} = props;

    return (

        <div>
            <Modal show={openModal} onHide={hideModal}>
                <Modal.Header>Avis du restaurant</Modal.Header>
                <Modal.Body>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                                <h4>{name}</h4>
                            </div>
                            <div className="col-4">
                                <div className={"stars-outer far fa-star margin-bottom"}>
                                    <div
                                        className={"stars-inner fas fa-star"}
                                        style={{ width: stars }}
                                    />
                                </div>
                                <span className={"font-larger bold"}> {rating}</span>
                            </div>
                            <div className="col-12">
                                <p className={"font-larger"}>{address}</p>
                                <p>{comments}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Fermer</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export {CommentsModal};