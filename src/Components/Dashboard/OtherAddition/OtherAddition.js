import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import Sidebar from '../Sidebar/Sidebar';

const OtherAddition = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [amount, setAmount] = useState(null);
    const [additionType, setAdditionType] = useState(null);
    const [additionDetails, setAdditionDetails] = useState(null);

    
    const handleDonationFor = e => {
        setAdditionType(e.target.value);
    }

    const handleAmount = e => {
        setAmount(e.target.value);
    }

    const handleDetails = e => {
        setAdditionDetails(e.target.value);
    }


    const handleAdditionSubmit = (e) => {

        const OtherAddition = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            additionType: additionType,
            additionDetails: additionDetails,
            amount: amount,
            time: new Date()
        };

        fetch('http://localhost:9999/otherAddition', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(OtherAddition)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Successfully Submitted')
                    e.target.reset();
                }
            })

            e.preventDefault();
    }


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Other Addition</h2>
                <br />
                <form onSubmit={handleAdditionSubmit}>
                    <h5>Name</h5>
                    <input type="text" class="form-control w-50" autoFocus name="name" value={loggedInUser.displayName} aria-label="First name" />
                    <br />

                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Your Email" name="email" value={loggedInUser.email} aria-label="Last name" required />
                    <br />

                    <h5>Amount</h5>
                    <input type="number" onBlur={handleAmount} class="form-control w-50" placeholder="Addition Amount" name="additionAmount" aria-label="Last name" required />
                    <br />

                    <h5>Addition type</h5>
                    <input type="text" onBlur={handleDonationFor} class="form-control w-50" name="additionType" placeholder="Addition type" aria-label="Last name" required />
                    <br />

                    <h5>Addition Details</h5>
                    <textarea type="text" onBlur={handleDetails} class="form-control w-50" name="additionDetails" placeholder="Addition Details" aria-label="Last name"/>
                    <br />

                    <input className="btn btn-info mb-5" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default OtherAddition;
