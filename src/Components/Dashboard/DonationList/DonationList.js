import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const DonationList = () => {

    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])


    const statusUpdated = () => {
        fetch('http://localhost:9999/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }


    const handleDoneBtn = (id) => {

        const status = 'Received'
        const user = { id, status };

        const url = `http://localhost:9999/donationList/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status Updated');
                    statusUpdated();
                }
            })
    }



    return (
        <div>
            <Sidebar></Sidebar>

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
                            <th scope="col">Action</th>
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

                                    <td>
                                        {/* <button onClick={() => handlePendingBtn(donation._id)} className="btn btn-primary m-1">Pending</button> */}

                                        {/* <button onClick={() => handleOnGoingBtn(donation._id)} className="btn btn-info m-2">On going</button> */}

                                        <button onClick={() => handleDoneBtn(donation._id)} className="btn btn-success m-1">Received</button>

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

export default DonationList;
