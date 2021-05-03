import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';


const DonationList = () => {

    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3 p-2" style={{ marginLeft: '230px' }}>
                <h2 className="ml-5 mb-5">Total Donated List : {donation.length}</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Donated For</th>
                            <th scope="col">Donated Time</th>
                            <th scope="col">Donated Date</th>
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
                                    <td>{new Date(donation.donationTime).toLocaleTimeString()}</td>
                                    <td>{new Date(donation.donationTime).toLocaleDateString()}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default DonationList;
