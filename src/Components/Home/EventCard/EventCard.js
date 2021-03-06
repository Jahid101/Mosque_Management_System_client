import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = (props) => {

    const { name, imageURL, _id } = props.event;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/showEvent/${_id}`);
    }

    return (
        <div onClick={handleCardClick} class="row container cardDesign eventCardInfo mt-2 p-3 btn">
            <div>
                <img src={imageURL} alt="" />
                <div>
                    <h2 className="text-center mt-4 mb-4">{name}</h2>
                    <button className="btn btn-info">See more</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
