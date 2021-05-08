import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CMDashboard from '../CMDashboard/CMDashboard';

const CMEvnt = () => {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/event')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])



    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <CMDashboard></CMDashboard>

            <div className="mt-3" style={{ marginLeft: '240px' }}>
                <h3 className="ml-5 mb-2">Total Events: {event.length}</h3>

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
                        </tr>
                    </thead>
                    {
                        event.map(event =>
                            <tbody>
                                <tr>
                                    <th scope="row">{event.name}</th>
                                    <td>{event.eventDetails}</td>
                                    <td>
                                        <img className="" style={{ width: '75px', height: '75px' }} src={event.imageURL} alt="" />
                                    </td>
                                    <td>
                                        {new Date(event.eventStart).toLocaleDateString()}
                                        <br />

                                        {new Date(event.eventEnd).toLocaleDateString()}
                                    </td>
                                    <td>{event.eventBudget} Tk</td>
                                    
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default CMEvnt;
