import React from 'react';
import { useHistory } from 'react-router';
import "./CommitteeMemberCard.css";

const ServiceCard = (props) => {

    const { name, designation, imageURL, _id } = props.CM;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/showCM/${_id}`);
    }

    return (
        <div onClick={handleCardClick} class="row container cardDesign cmCardInfo mt-5 p-3 btn">
            <div>
                <img src={imageURL} alt="" />
                <div>
                    <h2 className="text-center mt-4 mb-4">{name}</h2>
                    <h4 className="text-center text-primary mt-4 mb-4">{designation}</h4>
                    <button className="btn btn-info">See more</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
