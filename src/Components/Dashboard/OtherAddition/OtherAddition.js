import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import PaymentProcess from '../Payment/PaymentProcess';

const MakeDonation = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [paymentPhone, setPaymentPhone] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState(null);
    const [donationFor, setDonationFor] = useState(null);
    const [isInfoGiven, setIsInfoGiven] = useState(false);

    

    const handleDonationFor = e => {
        setDonationFor(e.target.value);
    }

    const handlePaymentPhone = e => {
        setPaymentPhone(e.target.value);
        console.log(e.target.value)
    }

    const handlePaymentAddress = e => {
        setPaymentAmount(e.target.value);
    }

    const handleClick = (e) => {
        if (paymentAmount) {
            setIsInfoGiven(true);
        }
        e.preventDefault();
    }


    const handlePayment = paymentId => {

        const donationDetails = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            DonationFor: donationFor,
            Amount: paymentAmount,
            phone: paymentPhone,
            paymentId,
            status : 'Pending',
            donationTime: new Date()
        };

        fetch('http://localhost:9999/makeDonation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donationDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Donation successfully received')
                }
            })
    }

    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Other Addition</h2>
                <br />
                <form>
                    <h5>Your Name</h5>
                    <input type="text" class="form-control w-50" name="name" value={loggedInUser.displayName} aria-label="First name" />
                    <br />

                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Your Email" name="email" value={loggedInUser.email} aria-label="Last name" required />
                    <br />

                    <h5>Addition type</h5>
                    <input type="text" onBlur={handleDonationFor} class="form-control w-50" name="additionType" placeholder="Addition type" aria-label="Last name" required />
                    <br />

                    <h5>Amount</h5>
                    <input type="number" onBlur={handlePaymentAddress} class="form-control w-50" placeholder="additionAmount" name="description" aria-label="Last name" required />
                    <br />

                    <h5>Your Phone</h5>
                    <input type="text" onBlur={handlePaymentPhone} class="form-control w-50" placeholder="Your Phone" value={new Date('2021/6/5').toDateString()} name="phone" aria-label="Last name" />

                    <br />
                    <input onClick={handleClick} className="btn btn-info mb-3" type="submit" value="Go for Payment" />
                </form>
                {isInfoGiven && <div>
                    <h3 className="mt-4 mb-4">Payment</h3>
                    <PaymentProcess handlePayment={handlePayment}></PaymentProcess>
                </div>
                }
            </div>
        </div>
    );
};

export default MakeDonation;
