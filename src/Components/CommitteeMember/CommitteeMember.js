import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CommitteeMemberCard from '../CommitteeMemberCard/CommitteeMemberCard';

const CommitteeMember = () => {

    const [CM, setCM] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/CM')
            .then(res => res.json())
            .then(data => setCM(data))
    }, [])

    const [admin, setAdmin] = useState([]);

    const email = 'jahidhasananik.official@gmail.com'

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/CMAdmin?email=' + email)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [email])

    const history = useHistory();

    const handleCardClick = (id) => {
        history.push(`/showCMAdmin/${id}`);
    }

    console.log(admin)

    return (
        <div className="mt-3 cmBg" id="committeeMember">
            <div className="container">
                <h1 className="text-center mb-3" style={{ color: 'white', fontSize: '50px' }}> <strong>Committee Members</strong> </h1>

                <div onClick={() =>handleCardClick(admin._id)} class="row container cardDesign cmAdminCardInfo mt-5 p-3 btn">
                    <div>
                        <img src={admin.imageURL} alt="" />
                        <div>
                            <h2 className="text-center mt-4 mb-4">{admin.name}</h2>
                            <h4 className="text-center text-primary mt-4 mb-4">{admin.designation}</h4>
                            <button className="btn btn-info">See more</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        CM.map(CM => <CommitteeMemberCard CM={CM} ></CommitteeMemberCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CommitteeMember;
