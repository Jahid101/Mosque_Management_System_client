import React from 'react';
import { useHistory } from 'react-router';

const AnnouncementCard = (props) => {

    const { title, imageURL, _id } = props.announcement;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/announcementShow/${_id}`);
    }

    return (
        <div onClick={handleCardClick} class="col-md-3 row container productCardInfo cardDesign mt-5 p-3 btn">
            <div>
                <img src={imageURL} alt="" />
                <div>
                    <h3 className="text-center mt-4 mb-4">{title}</h3>
                    <button className="btn btn-success">See more</button>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementCard;
