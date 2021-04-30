import React from 'react';
import "./Donation.css";


const Donation = () => {

    return (
        <div style={{ color: 'black', padding: '15px' }} className="row mt-5 m-2 donation">
            <h1 className="text-center mt-5 mb-4"><strong>Sadakah</strong></h1>
            <div className="col-md-6 text-center">
                <h1 className="mt-5">"Please Help Keep Families <br /> Healthy and Safe when <br />Lives are at Risk"</h1>
            </div>
            
            <div className="col-md-6 text-center donationCardInfo p-5">
                <div>
                    <h2 className="text-center mt-4">Donation Collected: 30000 Tk</h2>
                    <h5 className="mt-4">Donors: 20</h5>
                    <br />
                    <button className="btn btn-success">Make Donation</button>
                </div>
            </div>

        </div>
    );
};

export default Donation;
