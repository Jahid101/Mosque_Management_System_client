import React, { useEffect, useState } from 'react';
import CMDashboard from '../CMDashboard/CMDashboard';


const CMDtnList = () => {

    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])


    return (
        <div>
            <CMDashboard></CMDashboard>

            <div className="mt-3 p-2" style={{ marginLeft: '230px' }}>
                <h2 className="ml-5 mb-5">Total Donated List : {donation.length}</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" >Email</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Donated For</th>
                            <th scope="col">Donated Time & Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        donation.map(donation =>
                            <tbody>
                                <tr>
                                    <th scope="row">{donation.name || donation.email || ''}</th>
                                    <td>{donation.email}</td>
                                    <td><strong>{donation.Amount} Tk</strong></td>
                                    <td>{donation.DonationFor || 'General'}</td>
                                    <td>
                                        {new Date(donation.donationTime).toLocaleTimeString()}
                                        <br />

                                        {new Date(donation.donationTime).toLocaleDateString()}
                                    </td>
                                    <td><strong>{donation.status || 'Pending'}</strong></td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default CMDtnList;
