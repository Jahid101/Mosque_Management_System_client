import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import { Link } from 'react-router-dom';

const ManageEvent = () => {

    const [event, setEvent] = useState([]);

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

    const handleUpdate = () => {

    }

    const handleDelete = (id) => {

        fetch(`http://localhost:9999/deleteEvent/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Event Deleted')
                    deleted();
                }
            })
    }

    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-5">Events: {event.length}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Event Title</th>
                            <th scope="col">Event Details</th>
                            <th scope="col">Event Image</th>
                            <th scope="col" style={{ paddingLeft: '135px' }}>Action</th>
                        </tr>
                    </thead>
                    {
                        event.map(event =>
                            <tbody>
                                <tr>
                                    <th scope="row">{event.name}</th>
                                    <td className="w-25">{event.eventDetails}</td>
                                    <td>
                                        <img className="" style={{ width: '75px', height: '75px' }} src={event.imageURL} alt="" />
                                    </td>
                                    <td>
                                        <Link to="/updateEvent">
                                            <button onClick={() => handleUpdate(event._id)} className="btn btn-success ms-5 mt-3">Update</button>
                                        </Link>
                                        <button onClick={() => handleDelete(event._id)} className="btn btn-danger ms-5 mt-3">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageEvent;
