import React from 'react';
import { useHistory } from 'react-router';

const WorkCard = (props) => {

    const { spendFor, workingImageURL, _id } = props.WS;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/showWork/${_id}`);
    }

    return (
        <div onClick={handleCardClick} class="row container cardDesign wsCardInfo mt-5 p-3 btn">
            <div>
                <img src={workingImageURL} alt="" />
                <div>
                    <br />
                    <h2 className="text-center mt-4 mb-4">{spendFor}</h2>
                    <button className="btn btn-info">See more</button>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
