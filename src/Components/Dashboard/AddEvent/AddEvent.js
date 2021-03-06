import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import Sidebar from '../Sidebar/Sidebar';

const AddEvent = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);

    const handleServiceSubmit = e => {
        const eventInfo = {
            name: e.target.name.value,
            eventDetails: e.target.eventDetails.value,
            eventBudget: e.target.eventBudget.value,
            eventStart: e.target.eventStart.value,
            eventEnd: e.target.eventEnd.value,
            time: new Date(),
            imageURL: imageURL
        };

        const url = `https://mysterious-sands-88815.herokuapp.com/addEvent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDbStatus(data);
                if (data) {
                    alert('Event added successfully.')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }


    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '737956e4412761b2bafa98f14afe9c86');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
                setImageURLStatus(true);
                if (response) {
                    alert('Image Updated Successfully')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    // Checking Fund Value with event budget
    const [receivedDonation, setReceivedDonation] = useState([]);

    const received = 'Received';


    //Total Donation Amount
    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => setReceivedDonation(data))
    }, [received])

    let totalDonation = 0;
    for (let i = 0; i < receivedDonation.length; i++) {
        const element = parseFloat(receivedDonation[i].Amount);
        totalDonation = totalDonation + element;
    }


    //Others Addition
    const [otherAddition, setOtherAddition] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/otherAdditionList')
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
        fetch('https://mysterious-sands-88815.herokuapp.com/event')
            .then(res => res.json())
            .then(data => setEventSpend(data))
    }, [])

    let totalEventSpending = 0;
    for (let i = 0; i < eventSpend.length; i++) {
        const e = parseFloat(eventSpend[i].eventBudget);
        totalEventSpending = totalEventSpending + e;
    }



    //Work spending
    const [workSpend, setWorkSpend] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/WSList')
            .then(res => res.json())
            .then(data => setWorkSpend(data))
    }, [])

    let totalWorkSpending = 0;
    for (let i = 0; i < workSpend.length; i++) {
        const e = parseFloat(workSpend[i].amount);
        totalWorkSpending = totalWorkSpending + e;
    }

    console.log(totalWorkSpending)



    //Total PaidSalary Amount
    const [paidSalary, setPaidSalary] = useState([]);

    const salaryStatus = 'Paid';

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/paidSalary?salaryStatus=' + salaryStatus)
            .then(res => res.json())
            .then(data => setPaidSalary(data))
    }, [salaryStatus])

    let totalPaidSalary = 0;
    for (let i = 0; i < paidSalary.length; i++) {
        const element = parseFloat(paidSalary[i].salary);
        totalPaidSalary = totalPaidSalary + element;
    }
    console.log(totalPaidSalary);



    //deleted Event budget
    const [deletedEvent, setDeletedEvent] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/deletedEvent')
            .then(res => res.json())
            .then(data => setDeletedEvent(data))
    }, [])

    let totalDeletedEventBudget = 0;
    for (let i = 0; i < deletedEvent.length; i++) {
        const e = parseFloat(deletedEvent[i].eventBudget);
        totalDeletedEventBudget = totalDeletedEventBudget + e;
    }


    const totalFund = ((totalDonation + totalOtherDonation) - (totalEventSpending + totalDeletedEventBudget + totalPaidSalary + totalWorkSpending))

    console.log(totalFund)


    const handleBudgetCheck = (e) => {
        console.log(e.target.value)
    }


    //Time
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let today = `${year}-0${month}-${date}`
    console.log(today)


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Add Event</h2>
                <br />
                <form onSubmit={handleServiceSubmit}>
                    <h5>Event Name</h5>
                    <input type="text" class="form-control w-50" autoFocus placeholder="Event Name" name="name" aria-label="First name" required />
                    <br />

                    <h5>Event Details</h5>
                    <textarea type="text" class="form-control w-50" placeholder="Event Details" name="eventDetails" aria-label="Last name" required />
                    <br />

                    <h5>Event Budget</h5>
                    <input type="number" min="1" max={totalFund} onBlur={handleBudgetCheck} class="form-control w-50" placeholder="Event Budget" name="eventBudget" aria-label="Last name" required />
                    <br />

                    <h5>Event Start</h5>
                    <input type="date" min={today} max="2022-05-07" class="form-control w-50" placeholder="Event Budget" name="eventStart" aria-label="Last name" required />
                    <br />

                    <h5>Event End</h5>
                    <input type="date" min={today} max="2022-05-07" class="form-control w-50" placeholder="Event Budget" name="eventEnd" aria-label="Last name" required />
                    <br />

                    <h5>Event Image</h5>
                    <input type="file" onChange={handleImageUpload} class="mb-3 form-control w-50" aria-label="Last name" required />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    {imageURLStatus ?
                        <input className="btn btn-success mb-3" type="submit" value="Submit" />
                        : ''}
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Event added successfully." : ""}</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
