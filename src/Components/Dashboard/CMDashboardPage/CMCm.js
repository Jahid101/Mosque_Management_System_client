import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CMDashboard from '../CMDashboard/CMDashboard';

const CMCm = () => {

    const [CM, setCM] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/CM')
            .then(res => res.json())
            .then(data => setCM(data))
    }, [])


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <CMDashboard></CMDashboard>

            <div className="mt-3" style={{ marginLeft: '240px' }}>
                <h3 className="ml-5 mb-2">Total Committee Members: {CM.length}</h3>
                {/* <Link to="/committeeMember">
                    <button style={{ marginRight: '3%', float: 'right' }} className="btn btn-primary mb-3 mt-3">View all Committee Members</button>
                </Link> */}

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th style={{ width: '50px' }} scope="col">Email</th>
                            <th scope="col">Designation</th>
                            <th style={{ width: '200px' }} scope="col">Details</th>
                            <th scope="col">Image</th>
                            <th scope="col">phone</th>
                            <th scope="col">Date & Time</th>
                        </tr>
                    </thead>
                    {
                        CM.map(CM =>
                            <tbody>
                                <tr>
                                    <th scope="row">{CM.name}</th>
                                    <td>{CM.email}</td>
                                    <td>{CM.designation}</td>
                                    <td>{CM.details || 'N/A'}</td>
                                    <td>
                                        <img className="" style={{ width: '75px', height: '75px' }} src={CM.imageURL} alt="" />
                                    </td>
                                    <td>{CM.phone}</td>
                                    <td>
                                        {new Date(CM.time).toLocaleTimeString()}
                                        <br />

                                        {new Date(CM.time).toLocaleDateString()}
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

export default CMCm;
