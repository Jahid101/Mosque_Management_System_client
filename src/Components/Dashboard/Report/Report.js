import 'date-fns';
import React, { useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Sidebar from '../Sidebar/Sidebar';



const Report = () => {

    const [status, setStatus] = useState(false);

    //Donation show in Report
    const [selectedDate, setSelectedDate] = useState(new Date());
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


    const handleDateChange = (date) => {
        setSelectedDate(date)
    };


    var a = selectedDate.toLocaleDateString()
    const handleDonations = () => {
        let r = donation.filter(dn => new Date(dn.donationTime).toLocaleDateString() === a)

        setDonationCheck(r)
        setStatus(true)
    }



    return (
        <div>
            <Sidebar></Sidebar>
            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h2 style={{ marginLeft: '30%' }} className="mt-3 mb-4">Report</h2>

                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            style={{ marginLeft: '50%' }}
                            margin="normal"
                            id="date-picker-dialog"
                            // label="Date picker dialog"
                            format="MM/dd/yyyy"
                            minDate="2021-01-01"
                            value={selectedDate}
                            // defaultValue={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <button onClick={handleDonations} className="btn btn-success ms-5 mt-2">Donations</button>
                </div>
            </div>



            {status &&
                <div className="mt-3" style={{ marginLeft: '240px' }}>
                    {
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Donated For</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
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
                                                {new Date(donation.donationTime).toLocaleTimeString()}
                                                <br />

                                                {new Date(donation.donationTime).toLocaleDateString()}
                                            </td>
                                            <td><strong>{donation.status || 'Pending'}</strong></td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        </table>
                    }
                </div>}

        </div>
    );
};

export default Report;
