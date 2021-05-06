import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import { Link, useHistory } from 'react-router-dom';

const ManageCM = () => {

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
                <Link to="/addCM">
                    <button style={{ marginLeft: '' }} className="btn btn-info mb-3 mt-3">Add Committee Member</button>
                </Link>

                <Link to="/committeeMember">
                    <button style={{ marginRight: '3%', float: 'right' }} className="btn btn-primary mb-3 mt-3">View all Committee Members</button>
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

                                        <button onClick={() => handleDelete(event._id, event.eventBudget)} className="btn btn-danger ms-3 mt-3">Delete</button>
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

export default ManageCM;
