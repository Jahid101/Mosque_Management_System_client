import 'date-fns';
import React, { useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Sidebar from '../Sidebar/Sidebar';
import { Redirect } from 'react-router';


const Report = () => {

    const [status, setStatus] = useState(false);

    //Donation show in Report
    const [selectedFromDate, setSelectedFromDate] = useState(new Date());
    const [selectedToDate, setSelectedToDate] = useState(new Date());
    const [donationCheck, setDonationCheck] = useState([]);
    const [donation, setDonation] = useState([]);


    const received = 'Received';
    useEffect(() => {
        fetch('http://localhost:9999/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => {
                // data.map(data => setCheckAdmin(data))
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
    console.log(clickedFromDate, clickedToDate)
    const handleDonations = () => {
        let newList = donation.filter(dn => new Date(dn.donationTime).getTime() >= clickedFromDate && new Date(dn.donationTime).getTime() <= clickedToDate)
        console.log(newList)
        setDonationCheck(newList)
        setStatus(true)
    }

    // console.log(donationCheck)

    let totalDonation = 0;
    for (let i = 0; i < donationCheck.length; i++) {
        const element = parseFloat(donationCheck[i].Amount);
        totalDonation = totalDonation + element;
    }
    console.log(totalDonation)


    const printDiv = (print) => {

        var printContents = document.getElementById(print).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    }



    return (
        <div>
            <Sidebar></Sidebar>
            <div className="mt-3" style={{ marginLeft: '230px' }}>
                <h2 style={{ marginLeft: '30%' }} className="mt-3 mb-4">Report</h2>

                {/* <button style={{ marginLeft: '80%' }} className="btn btn-primary" onClick={() => printDiv('print')}>Print</button> */}

                <div >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            style={{ marginLeft: '50%' }}
                            margin="normal"
                            id="date-picker-dialog"
                            label="From Date picker dialog"
                            format="MM/dd/yyyy"
                            minDate="2021-01-01"
                            value={selectedFromDate}
                            // defaultValue={selectedDate}
                            onChange={handleFromDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>


                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            style={{ marginLeft: '50%' }}
                            margin="normal"
                            id="date-picker-dialog"
                            label="TO Date picker dialog"
                            format="MM/dd/yyyy"
                            minDate="2021-01-01"
                            value={selectedToDate}
                            // defaultValue={selectedDate}
                            onChange={handleToDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>

                    <button onClick={handleDonations} className="btn btn-success ms-5 mt-2">Donations</button>
                </div>




                {status && <div id="print">
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

            </div>
        </div>
    );
};

export default Report;
