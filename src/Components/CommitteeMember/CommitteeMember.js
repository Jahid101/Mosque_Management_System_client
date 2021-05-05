import React, { useEffect, useState } from 'react';
import CommitteeMemberCard from '../CommitteeMemberCard/CommitteeMemberCard';

const CommitteeMember = () => {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/event')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])

    return (
        <div className="mt-3 cmBg" id="committeeMember">
            <div className="container">
                <h1 className="text-center mb-3" style={{color: 'white', fontSize:'50px'}}> <strong>Committee Members</strong> </h1>
                <div className="row">
                    {
                        event.map(event => <CommitteeMemberCard event={event} ></CommitteeMemberCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CommitteeMember;
