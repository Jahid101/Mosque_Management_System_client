import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const ManageEvent = () => {

    const [ event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/event')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])


    const deleted = () => {
        fetch('http://localhost:9999/event')
            .then(res => res.json())
            .then(data => setEvent(data))
    }


    const handleDelete = (id) => {

        fetch(`http://localhost:9999/deleteEvent/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                alert('Event Deleted')
                deleted();
            }
        })
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-5">Total Product : {event.length}</h3>
                {
                    event.map(event =>
                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h5 className="m-5">{event.name}</h5>
                            <h5 className="m-3">{event.eventDetails}</h5>
                            <img  className="mb-3 mt-3" style={{ width: '100px', height:'100px' }} src={event.imageURL} alt="" />
                            <button onClick={() => handleDelete(event._id)} className="btn btn-danger m-5">Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageEvent;
