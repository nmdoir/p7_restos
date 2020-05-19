import React from 'react';
import './Components.css';
import {CommentsModal} from "./CommentsModal";

const Marker = (props: any) => {
    const {color, name, address, rating, stars, comments} = props;

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
                onClick={showModal}
            />
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
        </div>
    );
};

export default Marker;