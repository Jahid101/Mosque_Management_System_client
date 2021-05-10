import 'date-fns';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Sidebar from '../Sidebar/Sidebar';



const Report = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date)
        if (date >= new Date()) {
            console.log('in')
        }
        else {
            console.log('out')
        }
    };


    const [check, setCheck] = useState([]);

    const callDate = (d) => {
        //     fetch('http://localhost:9999/donationTime?donationTime=' + d)
        //         .then(res => res.json())
        //         .then(data => {
        //             data.map(data => setCheck(data))
        //         })
        //         console.log(check)


    }



    const received = 'Received';
    const [checkAdmin, setCheckAdmin] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => {
                // data.map(data => setCheckAdmin(data))
                setCheckAdmin(data)
            })
    }, [received])

    console.log(checkAdmin.donationTime)

    var a = selectedDate.toLocaleDateString()
    var b = new Date(checkAdmin.donationTime).toLocaleDateString()
    console.log(a, b)

    // for (let i = 0; i < checkAdmin.length; i++) {
    //     setCheck(checkAdmin[i].donationTime)
    // }
    // console.log(check)

    const clicka = () => {
        // if (a === b) {
        //     console.log('big', b)
        //     console.log(selectedDate)
        //     callDate(selectedDate);
        // }
        // else {
        //     console.log('small', a)
        // }
        for (let i = 0; i < checkAdmin.length; i++) {
            let c = new Date(checkAdmin[i].donationTime).toLocaleDateString()
            if (c === a){
                console.log('object')
            }
        }
        // console.log(check)
    }


    return (
        <div>
            <Sidebar></Sidebar>
            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h2 className="ml-5 mb-5">Report</h2>

                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
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
                </div>
                {/* <input  type="date" name="" id="" /> */}
                <button onClick={clicka}>sacdasd</button>

            </div>
        </div>
    );
};

export default Report;
