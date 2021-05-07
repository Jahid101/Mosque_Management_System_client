import React from 'react';
import { useHistory } from 'react-router';

const OMCard = (props) => {

    const { name, designation, imageURL, _id } = props.OM;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/showOM/${_id}`);
    }

    return (
        <div onClick={handleCardClick} class="row container cardDesign omCardInfo mt-5 p-3 btn">
            <div>
                <img src={imageURL} alt="" />
                <div>
                    <h2 className="text-center mt-4 mb-4">{name}</h2>
                    <h2 className="text-center mt-4 mb-4">{designation}</h2>
                    <button className="btn btn-info">See more</button>
                </div>
            </div>
        </div>
    );
};

export default OMCard;
