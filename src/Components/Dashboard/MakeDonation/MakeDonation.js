import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import PaymentProcess from '../Payment/PaymentProcess';
import UserSidebar from '../UserSidebar/UserSidebar';

const MakeDonation = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [name, setName] = useState(null);
    const [paymentPhone, setPaymentPhone] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState(null);
    const [donationFor, setDonationFor] = useState(null);
    const [isInfoGiven, setIsInfoGiven] = useState(false);



    const handleDonationName = e => {
        setName(e.target.value);
    }

    const handleDonationFor = e => {
        setDonationFor(e.target.value);
    }

    const handlePaymentPhone = e => {
        setPaymentPhone(e.target.value);
    }

    const handlePaymentAddress = e => {
        setPaymentAmount(e.target.value);
    }

    const handleD = e => {
        console.log(e.target.value)
    }


    const handleDonationSubmit = e => {
        if (paymentAmount) {
            setIsInfoGiven(true);
        }
        e.preventDefault();
        e.target.reset();
        
    }

    // const handleClick = (e) => {
    //     if (paymentAmount) {
    //         setIsInfoGiven(true);
    //     }
    //     e.preventDefault();
    // }


    const handlePayment = paymentId => {

        const donationDetails = {
            name: name || loggedInUser.displayName || loggedInUser.email,
            email: loggedInUser.email,
            DonationFor: donationFor,
            Amount: paymentAmount,
            phone: paymentPhone,
            paymentId,
            status: 'Pending',
            donationTime: new Date()
        };

        fetch('https://mysterious-sands-88815.herokuapp.com/makeDonation', {
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
                    setIsInfoGiven(false);
                }
            })
    }


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            {/* <Sidebar></Sidebar> */}
            <UserSidebar></UserSidebar>
            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Make Donation</h2>
                <br />
                <form onSubmit={handleDonationSubmit}>
                    <h5>Your Name</h5>
                    <input type="text" class="form-control w-50" name="name" defaultValue={loggedInUser.displayName} onBlur={handleDonationName} placeholder="Name" aria-label="First name" />
                    <br />

                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Your Email" name="email" value={loggedInUser.email} aria-label="Last name" required />
                    <br />

                    <h5>Donate For</h5>
                    <input type="text" onBlur={handleDonationFor} class="form-control w-50" name="donationFor" placeholder="Donation For" aria-label="Last name" required/>
                    <br />

                    {/* <select onChange={handleD} name="donationFor" id="browsers" class="form-control w-50">
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Other</option>
                    </select>
                    <br /> */}

                    <h5>Amount</h5>
                    <input type="number" min="1" onBlur={handlePaymentAddress} class="form-control w-50" placeholder="Amount" name="description" aria-label="Last name" required />
                    <br />

                    <h5>Your Phone</h5>
                    <input type="number" min="999999999" max="9999999999" onBlur={handlePaymentPhone} class="form-control w-50" placeholder="Your Phone" name="phone" aria-label="Last name" />

                    <br />
                    <input className="btn btn-info mb-3" type="submit" value="Go for Payment" />
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
