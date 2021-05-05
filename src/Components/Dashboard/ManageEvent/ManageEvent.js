import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import { Link, useHistory } from 'react-router-dom';

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



    const handleRemove = (id, budget) => {

        const deletedEventInfo = {
            eventBudget: budget
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
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-2">Total Events: {event.length}</h3>
                <Link to="/event">
                    <button style={{ marginLeft: '80%' }} className="btn btn-primary mb-3">View all Events</button>
                </Link>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Event Name</th>
                            <th scope="col">Event Details</th>
                            <th scope="col">Event Image</th>
                            <th scope="col">Event Budget</th>
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
                                    <th scope="row">{event.eventBudget} Tk</th>
                                    <td>
                                        <button onClick={() => handleUpdate(event._id)} className="btn btn-success mt-3">Update</button>

                                        <button onClick={() => handleDelete(event._id)} className="btn btn-primary ms-3 mt-3">Refund and Remove</button>

                                        <button onClick={() => handleRemove(event._id,event.eventBudget)} className="btn btn-danger ms-3 mt-3">Delete</button>
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
