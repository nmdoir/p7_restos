import {Restos} from "./RestosData";
import RestoBloc from "./RestoBloc";
import {arrAvg, stars} from "./RestoList";
import React from "react";
import CommentsModal from "./Comments";

function CommentsList(resto) {

    for (let i = 0; i < Restos.length; i++) {
        if (Restos[i].name === resto) {
            resto = Restos[i];
        }
    }

    return (
        <div className="modal fade" id="commentsModal" tabIndex="-1" role="dialog"
             aria-labelledby="commentsModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="commentsModalTitle">Avis du restaurant</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                                <CommentsModal
                                    rating={comment.stars}
                                    comment={comment.comment}
                                />
                            )
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {CommentsList};