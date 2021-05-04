import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const DonationYouMade = () => {

    const [donation, setDonation] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:9999/donationYouMade?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [loggedInUser.email])


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3 p-3" style={{ marginLeft: '230px' }}>
                <h2 className="ml-5 mb-5">Total Donation You Made : {donation.length}</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Donation For</th>
                            <th scope="col">Donation Time and & Date</th>
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
                                    <td>
                                        <button className="btn btn-primary">
                                        {donation.status || 'Pending'}
                                        </button>
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

export default DonationYouMade;
