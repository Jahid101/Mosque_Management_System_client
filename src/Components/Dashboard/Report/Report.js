import 'date-fns';
import React, { useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Sidebar from '../Sidebar/Sidebar';
import './Report.css';



const Report = () => {

    const [printStatus, setPrintStatus] = useState(false);

    //Donation show in Report
    const [donationStatus, setDonationStatus] = useState(false);
    const [selectedFromDate, setSelectedFromDate] = useState(new Date());
    const [selectedToDate, setSelectedToDate] = useState(new Date());
    const [donationCheck, setDonationCheck] = useState([]);
    const [donation, setDonation] = useState([]);


    const received = 'Received';
    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => {
                setDonation(data)
            })
    }, [received])


    const handleFromDateChange = (date) => {
        setSelectedFromDate(date)
    };

    const handleToDateChange = (date) => {
        setSelectedToDate(date)
    };


    var clickedFromDate = selectedFromDate.getTime()
    var clickedToDate = selectedToDate.getTime()
    // var clickedFromMonth = selectedFromDate.getMonth() + 1
    // var clickedToMonth = selectedToDate.getMonth() + 1
    console.log(selectedFromDate.getTime()-selectedToDate.getTime())

    const handleDonation = () => {

        // let newListy = donation.filter(dn => new Date(dn.donationTime).getMonth()+1 === clickedFromMonth && new Date(dn.donationTime).getMonth()+1 <= clickedToMonth)
        // console.log(newListy)

        let newList = donation.filter(dn => new Date(dn.donationTime).getTime() >= clickedFromDate && new Date(dn.donationTime).getTime() <= clickedToDate)

        console.log(newList)
        setDonationCheck(newList)
        setDonationStatus(true)
        setWSStatus(false)
        setPrintStatus(true)
    }


    let totalDonation = 0;
    for (let i = 0; i < donationCheck.length; i++) {
        const element = parseFloat(donationCheck[i].Amount);
        totalDonation = totalDonation + element;
    }
    console.log(totalDonation)




    //Event show in Report

    const [WSStatus, setWSStatus] = useState(false);
    const [WSCheck, setWSCheck] = useState([]);
    const [WS, setWS] = useState([]);


    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/WSList')
            .then(res => res.json())
            .then(data => {
                setWS(data)
            })
    }, [])


    const handleWS = () => {
        let newList = WS.filter(WS => new Date(WS.time).getTime() >= clickedFromDate && new Date(WS.time).getTime() <= clickedToDate)

        console.log(newList)
        setWSCheck(newList)
        setWSStatus(true)
        setDonationStatus(false)
        setPrintStatus(true)
    }


    let totalWSCost = 0;
    for (let i = 0; i < WSCheck.length; i++) {
        const element = parseFloat(WSCheck[i].amount);
        totalWSCost = totalWSCost + element;
    }
    console.log(totalWSCost)



    const printDiv = (print) => {

        const printContents = document.getElementById(print).innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        // window.location.reload(false);
        document.body.innerHTML = originalContents;
    }



    return (
        <div>
            <Sidebar></Sidebar>
            <div className="mt-3" style={{ marginLeft: '230px' }}>
                {/* <h2 style={{ marginLeft: '30%' }} className="mt-3 mb-4">Report</h2> */}

                {printStatus &&
                    <button style={{ marginLeft: '80%' }} className="btn btn-primary" onClick={() => window.print()}>Print</button>
                }

                <div >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            style={{ marginLeft: '15%' }}
                            margin="normal"
                            id="date-picker-dialog"
                            label="From"
                            format="MM/dd/yyyy"
                            minDate="2021-01-01"
                            value={selectedFromDate}
                            onChange={handleFromDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>


                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            style={{ marginRight: '30%', float: 'right' }}
                            margin="normal"
                            id="date-picker-dialog"
                            label="TO"
                            format="MM/dd/yyyy"
                            minDate="2021-01-01"
                            value={selectedToDate}
                            onChange={handleToDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>

                    <div style={{ float: 'right' }} className="mb-4 mt-3 mr-5">
                        <button onClick={handleDonation} className="btn btn-success ms-5 mt-2">Donations</button>

                        <button onClick={handleWS} className="btn btn-info ms-2 mt-2">Work Spends</button>
                    </div>
                </div>



                {/* Donation Stats */}
                {donationStatus && <div id="donate">
                    {
                        <table id="table" class="table text-center mb-5">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Donated For</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            {
                                donationCheck.map(donation =>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{donation.name || donation.email || ''}</th>
                                            <td>{donation.email}</td>
                                            <td><strong>{donation.Amount} Tk</strong></td>
                                            <td>{donation.DonationFor || 'General'}</td>
                                            <td>
                                                {/* {new Date(donation.donationTime).toLocaleTimeString()}
                                                <br /> */}

                                                {new Date(donation.donationTime).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        </table>
                    }<hr />
                    <div style={{ marginLeft: '80%' }}>
                        <strong>Total: {totalDonation} Tk</strong>
                    </div>
                    <hr />
                </div>}


                {/* WS Stats */}
                {WSStatus && <div id="event">
                    {
                        <table id="table" class="table text-center mb-5">
                            <thead>
                                <tr>
                                    <th scope="col">Spend For</th>
                                    <th scope="col" >Details</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            {
                                WSCheck.map(WS =>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{WS.spendFor}</th>
                                            <th scope="row">{WS.details}</th>
                                            <td><strong>{WS.amount} Tk</strong></td>
                                            <td>
                                                {new Date(WS.time).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        </table>
                    }<hr />
                    <div style={{ marginLeft: '80%' }}>
                        <strong>Total: {totalWSCost} Tk</strong>
                    </div>
                    <hr />
                </div>}

            </div>
        </div>
    );
};

export default Report;
