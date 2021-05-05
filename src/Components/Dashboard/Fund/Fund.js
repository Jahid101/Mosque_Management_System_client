import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const Fund = () => {

    const [receivedDonation, setReceivedDonation] = useState([]);

    const received = 'Received';

    useEffect(() => {
        fetch('http://localhost:9999/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => setReceivedDonation(data))
    }, [received])

    console.log(receivedDonation)

    let totalDonation = 0;
    for (let i = 0; i < receivedDonation.length; i++) {
        const element = parseFloat(receivedDonation[i].Amount);
        totalDonation = totalDonation + element;
    }
    // setTotalFund(total);
    console.log(totalDonation);

    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '230px' }}>
                <h1 className="mt-3 text-center">Fund</h1>
                <br />
                <div class="container pt-3">
        <div class="row ">
            <div class="col-md-3 ">
                <div class="card bg-success text-white shadow" style={{width: '15rem',height:'10rem'}}>
                    <div class="card-body text-center">
                        <h5> <small>Others Addition</small></h5>
                        <h1>5000 Tk</h1>
                    </div>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="card bg-info text-white shadow" style={{width: '15rem',height:'10rem'}}>
                    <div class="card-body text-center">
                        <h5> <small>Total Fund Amount </small> </h5>
                        <h1>1000 Tk</h1>
                    </div>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="card bg-primary text-white shadow" style={{width: '15rem',height:'10rem'}}>
                    <div class="card-body text-center">
                        <h5> <small>Total Donation Amount</small> </h5>
                        <h1>{totalDonation} Tk</h1>
                    </div>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="card bg-secondary text-white shadow" style={{width: '15rem',height:'10rem'}}>
                    <div class="card-body text-center">
                        <h5> <small>Total Donations</small> </h5>
                        <h1>{receivedDonation.length}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

            </div>
        </div>
    );
};

export default Fund;
