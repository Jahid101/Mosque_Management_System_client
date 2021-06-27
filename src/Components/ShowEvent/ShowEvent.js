import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ShowEvent = () => {

    const [event, setEvent] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://mysterious-sands-88815.herokuapp.com/showEvent/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])


    return (
        <div className="pb-3" style={{ backgroundColor: 'teal' }}>
            <h1 className="text-center pt-5 text-light">Event Details</h1>

            <div style={{ marginLeft: '75px', backgroundColor: '#2c003f' }} className="row mt-5 rounded container text-light p-5">
                <h3 className="text-center text-light mb-5">
                    <strong>"{event.name}"</strong>
                </h3>

                <div className="col-md-6 mt-3">
                    <img className="w-75" src={event.imageURL} alt="" />
                </div>

                <div className="col-md-6 mt-4 mb-5">
                    <p>Event Start: <span style={{color: 'yellow', fontSize: '20px'}}>{new Date(event.eventStart).toLocaleDateString()}</span></p>
                    <br/>
                    <p>Event End: <span style={{color: 'yellow', fontSize: '20px'}}>{new Date(event.eventEnd).toLocaleDateString()}</span></p>
                    <br/>
                    <p>Event Details: <span style={{color: 'yellow', fontSize: '20px'}}>{event.eventDetails}</span></p>
                    
                    <br />

                    <Link to="/makeDonation">
                        <button className="btn btn-success btn-lg">Donate</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowEvent;
