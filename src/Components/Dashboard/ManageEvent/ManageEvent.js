import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import { Link, useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

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



    const handleRemove = (id, budget, name, eventDetails, imageURL, time, eventStart, eventEnd) => {

        const deletedEventInfo = {
            name: name,
            eventDetails: eventDetails,
            imageURL: imageURL,
            time: time,
            eventBudget: budget,
            eventStart: eventStart,
            eventEnd: eventEnd
        };

        console.log(deletedEventInfo)

        fetch('http://localhost:9999/deletedEvent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(deletedEventInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    handleDelete(id);
                }
            })
    }



    const history = useHistory();
    const handleUpdate = (id) => {
        history.push(`/updateEvent/${id}`);
    }



    const handleDelete = (id) => {

        fetch(`http://localhost:9999/deleteEvent/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Event Deleted successfully');
                    deleted();
                }
            })
    }

    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

            <div className="mt-3" style={{ marginLeft: '240px' }}>
                <h3 className="ml-5 mb-2">Total Events: {event.length}</h3>
                <Link to="/addEvent">
                    <button style={{ marginLeft: '' }} className="btn btn-info mb-3 mt-3">Add Event</button>
                </Link>

                <Link to="/event">
                    <button style={{ marginRight: '3%', float: 'right' }} className="btn btn-primary mb-3 mt-3">View all Events</button>
                </Link>

                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Event Name</th>
                            <th scope="col">Event Details</th>
                            <th scope="col">Event Image</th>
                            <th scope="col">Event Start & End</th>
                            <th scope="col">Event Budget</th>
                            <th scope="col">Event Created</th>
                            <th scope="col" style={{ paddingLeft: '' }}>Action</th>
                        </tr>
                    </thead>
                    {
                        event.map(event =>
                            <tbody>
                                <tr>
                                    <th scope="row">{event.name}</th>
                                    <td>{event.eventDetails}</td>
                                    <td>
                                        <img className="" style={{ width: '50px', height: '50px' }} src={event.imageURL} alt="" />
                                    </td>
                                    <td>
                                        {new Date(event.eventStart).toLocaleDateString()}
                                        <br />

                                        {new Date(event.eventEnd).toLocaleDateString()}
                                    </td>
                                    
                                    <td>{event.eventBudget} Tk</td>

                                    <td>
                                        {new Date(event.time).toLocaleDateString()}
                                    </td>

                                    <td>
                                        <button onClick={() => handleUpdate(event._id)} className="btn btn-success mt-3">Update</button>

                                        <button onClick={() => handleDelete(event._id)} className="btn btn-primary ms-1 mt-3">Refund and Remove</button>

                                        <button
                                            onClick={() => handleRemove
                                                (
                                                    event._id,
                                                    event.eventBudget,
                                                    event.name,
                                                    event.eventDetails,
                                                    event.imageURL,
                                                    event.time,
                                                    event.eventStart,
                                                    event.eventEnd
                                                )
                                            } className="btn btn-danger ms-1 mt-3">Delete</button>
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
