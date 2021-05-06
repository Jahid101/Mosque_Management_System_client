import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const Fund = () => {

    const [receivedDonation, setReceivedDonation] = useState([]);

    const received = 'Received';


    //Total Donation Amount
    useEffect(() => {
        fetch('http://localhost:9999/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => setReceivedDonation(data))
    }, [received])

    let totalDonation = 0;
    for (let i = 0; i < receivedDonation.length; i++) {
        const element = parseFloat(receivedDonation[i].Amount);
        totalDonation = totalDonation + element;
    }
    console.log(totalDonation);


    //Others Addition
    const [otherAddition, setOtherAddition] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/otherAdditionList')
            .then(res => res.json())
            .then(data => setOtherAddition(data))
    }, [])

    let totalOtherDonation = 0;
    for (let i = 0; i < otherAddition.length; i++) {
        const elmnt = parseFloat(otherAddition[i].amount);
        totalOtherDonation = totalOtherDonation + elmnt;
    }


    //Event spending
    const [eventSpend, setEventSpend] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/event')
            .then(res => res.json())
            .then(data => setEventSpend(data))
    }, [])

    let totalEventSpending = 0;
    for (let i = 0; i < eventSpend.length; i++) {
        const e = parseFloat(eventSpend[i].eventBudget);
        totalEventSpending = totalEventSpending + e;
    }

    console.log(totalEventSpending)


    //deleted Event budget
    const [deletedEvent, setDeletedEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/deletedEvent')
            .then(res => res.json())
            .then(data => setDeletedEvent(data))
    }, [])

    let totalDeletedEventBudget = 0;
    for (let i = 0; i < deletedEvent.length; i++) {
        const e = parseFloat(deletedEvent[i].eventBudget);
        totalDeletedEventBudget = totalDeletedEventBudget + e;
    }

    console.log(totalDeletedEventBudget)


    //Total Fund
    // const [fund, setFund] = useState(0);

        const totalFund = ((totalDonation + totalOtherDonation) - (totalEventSpending + totalDeletedEventBudget))

        // setFund(totalFund);
        // console.log(fund)

// useEffect(() => {
//         const totalFunding = {
//             fundAmount: totalFund
//         }

//         const url = `http://localhost:9999/fund`;
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(totalFunding)
//         })
//             .then(res => res.json())
//             .then(data => {

//             })
//     }, [])


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '230px' }}>
                <h1 className="mt-3 text-center">Fund</h1>
                <br />
                <div class="container pt-3">
                    <div class="row ">
                        <div class="col-md-3">
                            <div class="card bg-success text-white shadow" style={{ width: '15rem', height: '10rem' }}>
                                <div class="card-body text-center">
                                    <h5> <small>Others Addition ({otherAddition.length})</small></h5>
                                    <h1>{totalOtherDonation} Tk</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-info text-white shadow" style={{ width: '15rem', height: '10rem' }}>
                                <div class="card-body text-center">
                                    <h5> <small>Total Fund Amount</small> </h5>
                                    <h1>{totalFund} Tk</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-primary text-white shadow" style={{ width: '15rem', height: '10rem' }}>
                                <div class="card-body text-center">
                                    <h5> <small>Total Donation Amount</small> </h5>
                                    <h1>{totalDonation} Tk</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-secondary text-white shadow" style={{ width: '15rem', height: '10rem' }}>
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