import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Sidebar from '../Sidebar/Sidebar';



const Report = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:10'));

    const handleDateChange = (date) => {
        setSelectedDate(date)
        if (date >= new Date()) {
            console.log('in')
        }
        else {
            console.log('out')
        }

    };

    const handleTimeChange = (date) => {
        setSelectedDate(date)
        console.log(new Date(date).toLocaleTimeString())
    };

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h2 className="ml-5 mb-5">Report</h2>

                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label=""
                            
                            value={selectedDate}
                            onChange={handleTimeChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>

            </div>
        </div>
    );
};

export default Report;
