import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';


const OtherAdditionList = () => {

    const [otherAddition, setOtherAddition] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/otherAdditionList')
            .then(res => res.json())
            .then(data => setOtherAddition(data))
    }, [])


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3 p-2" style={{ marginLeft: '230px' }}>
                <h2 className="ml-5 mb-5">Other Addition List : {otherAddition.length}</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" >Email</th>
                            <th scope="col" >Addition Details</th>
                            <th scope="col">Addition Amount</th>
                            <th scope="col">Addition Type</th>
                            <th scope="col">Addition Time & Date</th>
                        </tr>
                    </thead>
                    {
                        otherAddition.map(otherAddition =>
                            <tbody>
                                <tr>
                                    <th scope="row">{otherAddition.name || otherAddition.email || ''}</th>
                                    <td>{otherAddition.email}</td>
                                    <td>{otherAddition.additionDetails}</td>
                                    <td><strong>{otherAddition.amount} Tk</strong></td>
                                    <td>{otherAddition.additionType || 'N/A'}</td>
                                    <td>
                                        {new Date(otherAddition.time).toLocaleTimeString()}
                                        <br />

                                        {new Date(otherAddition.time).toLocaleDateString()}
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

export default OtherAdditionList;
