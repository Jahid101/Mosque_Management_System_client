import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = (props) => {

    const { name, eventDetails, imageURL, _id } = props.event;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/eventShow/${_id}`);
    }

    return (
        <div onClick={handleCardClick} class="row container cardDesign eventCardInfo mt-5 p-3 btn">
            <div>
                <img src={imageURL} alt="" />
                <div>
                    <h2 className="text-center mt-4">{name}</h2>
                    <h5 className=" mt-4">{eventDetails}</h5>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
