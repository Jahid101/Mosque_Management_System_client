import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const ServiceList = () => {

    const [service, setService] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:9999/serviceList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setService(data))
    }, [loggedInUser.email])


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h2 className="ml-5 mb-5">Total Booked Service : {service.length}</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope="col">Service</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        service.map(service =>
                            <tbody>
                                <tr>
                                    <th scope="row">{service.name || service.email} </th>
                                    <td>{service.orderTime}</td>
                                    <td>{service.service}</td>
                                    <td>
                                        <button  className="btn btn-primary m-2"><strong>{service.status}</strong></button>
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

export default ServiceList;
