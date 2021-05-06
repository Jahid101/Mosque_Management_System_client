import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const AddEvent = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);


    const handleServiceSubmit = e => {
        const eventInfo = {
            name: e.target.name.value,
            eventDetails: e.target.eventDetails.value,
            eventBudget: e.target.eventBudget.value,
            imageURL: imageURL
        };

        const url = `http://localhost:9999/addEvent`;
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
        fetch('http://localhost:9999/receivedDonation?status=' + received)
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

    var totalFund = ((totalDonation + totalOtherDonation) - (totalEventSpending + totalDeletedEventBudget))

    console.log(totalFund)

    const handleBudgetCheck = (e) => {
        
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

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

                    <h5>Event Image</h5>
                    <input type="file" onChange={handleImageUpload} class="mb-5 form-control w-50" aria-label="Last name" required />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    {/* {imageURLStatus ? */}
                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                    {/* :''} */}
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Event added successfully." : ""}</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
