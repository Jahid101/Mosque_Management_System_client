import React from 'react';


const FixerCard = ({ expert }) => {
    return (
        <div class="col-md-3 container fixerCardInfo cardDesign mt-5 p-3 btn">
            <div>
                <img src={expert.img} alt="" />
                <div>
                    <h3 className="text-center mt-4">{expert.name}</h3>
                    <h6 className=" mt-4">{expert.designation}</h6>
                </div>
            </div>
        </div>
    );
};

export default FixerCard;
