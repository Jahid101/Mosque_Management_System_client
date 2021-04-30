import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import PaymentProcess from '../Payment/PaymentProcess';

const ServiceBooking = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [paymentPhone, setPaymentPhone] = useState(null);
    const [paymentAddress, setPaymentAddress] = useState(null);
    const [service, setService] = useState({});
    const [isInfoGiven, setIsInfoGiven] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/serviceBooking/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const handlePaymentPhone = e => {
        setPaymentPhone(e.target.value);
    }

    const handlePaymentAddress = e => {
        setPaymentAddress(e.target.value);
    }

    const handleClick = (e) => {
        if (paymentPhone && paymentAddress) {
            setIsInfoGiven(true);
        }
        e.preventDefault();
    }


    const handlePayment = paymentId => {
        const bookingDetails = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            Address: paymentAddress,
            phone: paymentPhone,
            service: service.name,
            status: 'Pending',
            paymentId,
            orderTime: new Date()
        };

        fetch('http://localhost:9999/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order placed successfully')
                }
            })
    }

    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Service Booking</h2>
                <br />
                <form>
                    <h5>Name</h5>
                    <input type="text" class="form-control w-50" name="name" value={loggedInUser.displayName} aria-label="First name" required />
                    <br />

                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Your Email" name="email" value={loggedInUser.email} aria-label="Last name" required />
                    <br />

                    <h5>Service Name</h5>
                    <input type="text" class="form-control w-50" value={service.name} name="serviceName" aria-label="Last name" required />
                    <br />

                    <h5>Your Address *</h5>
                    <input type="text" onBlur={handlePaymentAddress} class="form-control w-50" placeholder="Address" name="description" aria-label="Last name" required />
                    <br />

                    <h5>Your Phone *</h5>
                    <input type="number" onBlur={handlePaymentPhone} class="form-control w-50" placeholder="Your Phone" name="phone" aria-label="Last name" required />

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

export default ServiceBooking;
