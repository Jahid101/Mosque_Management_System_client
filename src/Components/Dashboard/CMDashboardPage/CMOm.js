import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CMDashboard from '../CMDashboard/CMDashboard';
import Sidebar from '../Sidebar/Sidebar';

const CMOm = () => {

    const [OM, setOM] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/OM')
            .then(res => res.json())
            .then(data => setOM(data))
    }, [])



    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <CMDashboard></CMDashboard>

            <div className="mt-3" style={{ marginLeft: '235px' }}>
                <h3 className="ml-5 mb-2">Other Members: {OM.length}</h3>
                {/* <Link to="/OM">
                    <button style={{ marginRight: '3%', float: 'right' }} className="btn btn-primary mb-3 mt-3">View all Members</button>
                </Link> */}

                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Details</th>
                            <th scope="col">Image</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Salary Status</th>
                            {/* <th scope="col">Date & Time</th> */}
                        </tr>
                    </thead>
                    {
                        OM.map(OM =>
                            <tbody>
                                <tr>
                                    <th scope="row">{OM.name}</th>
                                    <td>{OM.email}</td>
                                    <td>{OM.designation}</td>
                                    <td>{OM.details || 'N/A'}</td>
                                    <td>
                                        <img className="" style={{ width: '50px', height: '50px' }} src={OM.imageURL} alt="" />
                                    </td>
                                    <td>{OM.phone}</td>
                                    <td>{OM.salary} Tk</td>
                                    <td><strong>{OM.salaryStatus || 'Pending'}</strong></td>
                                    {/* <td>
                                        {new Date(OM.time).toLocaleTimeString()}
                                        <br />

                                        {new Date(OM.time).toLocaleDateString()}
                                    </td> */}
                                    
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default CMOm;
