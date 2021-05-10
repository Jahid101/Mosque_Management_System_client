import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Fund = () => {

    //Total Donation Amount
    const [receivedDonation, setReceivedDonation] = useState([]);

    const received = 'Received';

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



    //Total PaidSalary Amount
    const [paidSalary, setPaidSalary] = useState([]);

    const salaryStatus = 'Paid';

    useEffect(() => {
        fetch('http://localhost:9999/paidSalary?salaryStatus=' + salaryStatus)
            .then(res => res.json())
            .then(data => setPaidSalary(data))
    }, [salaryStatus])

    let totalPaidSalary = 0;
    for (let i = 0; i < paidSalary.length; i++) {
        const element = parseFloat(paidSalary[i].salary);
        totalPaidSalary = totalPaidSalary + element;
    }
    console.log(totalPaidSalary);



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



    //Work spending
    const [workSpend, setWorkSpend] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/WSList')
            .then(res => res.json())
            .then(data => setWorkSpend(data))
    }, [])

    let totalWorkSpending = 0;
    for (let i = 0; i < workSpend.length; i++) {
        const e = parseFloat(workSpend[i].amount);
        totalWorkSpending = totalWorkSpending + e;
    }

    console.log(totalWorkSpending)



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
    const totalFund = ((totalDonation + totalOtherDonation) - (totalEventSpending + totalDeletedEventBudget + totalPaidSalary + totalWorkSpending))


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

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
                                    <h1><strong style={{ color: 'purple' }}>{totalFund}</strong> Tk</h1>
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
                                    <h5> <small>Total Donor</small> </h5>
                                    <h1>{receivedDonation.length}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div style={{ marginLeft: '150px' }} class="container pt-3 mt-3">
                    <div class="row ">
                        <div class="col-md-3">
                            <div class="card bg-primary text-white shadow" style={{ width: '15rem', height: '10rem' }}>
                                <div class="card-body text-center">
                                    <h5> <small>Salary Paid ({paidSalary.length})</small></h5>
                                    <h1>{totalPaidSalary} Tk</h1>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-md-3">
                            <div class="card bg-primary text-white shadow" style={{ width: '15rem', height: '10rem' }}>
                                <div class="card-body text-center">
                                    <h5> <small>Others Additions ({otherAddition.length})</small></h5>
                                    <h1>{totalOtherDonation} Tk</h1>
                                </div>
                            </div>
                        </div> */}
                        <div class="col-md-3">
                            <div class="card bg-info text-white shadow" style={{ width: '15rem', height: '10rem' }}>
                                <div class="card-body text-center">
                                    <h5> <small>Work Spending ({workSpend.length})</small> </h5>
                                    <h1>{totalWorkSpending} Tk</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-success text-white shadow" style={{ width: '15rem', height: '10rem' }}>
                                <div class="card-body text-center">
                                    <h5> <small>Total Event Cost ({eventSpend.length + deletedEvent.length})</small> </h5>
                                    <h1>{totalEventSpending + totalDeletedEventBudget} Tk</h1>
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
