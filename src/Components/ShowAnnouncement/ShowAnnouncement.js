import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ShowAnnouncement = () => {

    const [announcement, setAnnouncement] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/showAnnouncement/${id}`)
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [id])


    return (
        <div className="pb-3" style={{ backgroundColor: 'teal' }}>
            <h1 className="text-center pt-5 text-light">Announcement Details</h1>

            <div style={{ marginLeft: '75px', backgroundColor: '#00022e' }} className="row mt-5 rounded container text-light p-5">
                <h3 className="text-center text-light mb-5">
                    <strong>"{announcement.title}"</strong>
                </h3>

                <div className="col-md-6 mt-4 mb-5">
                    <p>{announcement.announcementDetails}</p>
                </div>

                <div className="col-md-6 mt-3">
                    <img className="w-75" src={announcement.imageURL} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ShowAnnouncement;
