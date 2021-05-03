import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const Fund = () => {

    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])

    let total = 0;
    for (let i = 0; i < donation.length; i++) {
        const element = parseFloat(donation[i].Amount);
        total = total + element;
    }
    // setTotalFund(total);
    console.log(total);

    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '230px' }}>
                <h2 className="mt-3 text-center">This is Fund</h2>
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
                        <h1>{total} Tk</h1>
                    </div>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="card bg-secondary text-white shadow" style={{width: '15rem',height:'10rem'}}>
                    <div class="card-body text-center">
                        <h5> <small>Total Donations</small> </h5>
                        <h1>{donation.length}</h1>
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
