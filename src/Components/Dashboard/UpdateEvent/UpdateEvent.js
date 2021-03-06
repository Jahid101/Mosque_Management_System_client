import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import Sidebar from '../Sidebar/Sidebar';

const UpdateEvent = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);
    const [event, setEvent] = useState([]);

    const [name, setName] = useState('');
    const [eventDetails, setEventDetails] = useState('');
    const [eventBudget, setEventBudget] = useState('');
    const [eventStart, setEventStart] = useState('');
    const [eventEnd, setEventEnd] = useState('');
    const [eventImage, setEventImage] = useState('');

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://mysterious-sands-88815.herokuapp.com/updateEvent/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])


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

    //Total Fund
    const totalFund = ((totalDonation + totalOtherDonation) - (totalEventSpending + totalDeletedEventBudget + totalPaidSalary + totalWorkSpending))



    // const handleServiceSubmit = () => {

    // }


    //update Event
    const [checkFundBudget, setCheckFundBudget] = useState(true);

    const handleEventName = e => {
        setName(e.target.value);
    }

    const handleEventDetails = e => {
        setEventDetails(e.target.value);
    }

    const handleEventBudget = e => {
        setEventBudget(e.target.value);
        if (e.target.value > totalFund) {
            setCheckFundBudget(false);
        }
        else {
            setCheckFundBudget(true);
        }
    }

    const handleEventStart = (e) => {
        setEventStart(e.target.value);
    }

    const handleEventEnd = (e) => {
        setEventEnd(e.target.value);
    }

    const handleEventImage = () => {
        setEventImage(imageURL);
    }

    console.log(name || event.name, eventDetails || event.eventDetails, eventBudget || event.eventBudget, eventImage || event.imageURL);


    const handleEventUpdate = (id) => {

        const updatedEvent = {
            id,
            name: name || event.name,
            eventDetails: eventDetails || event.eventDetails,
            eventBudget: eventBudget || event.eventBudget,
            eventStart: eventStart || event.eventStart,
            eventEnd: eventEnd || event.eventEnd,
            eventImage: eventImage || event.imageURL
        };

        console.log(updatedEvent)

        const url = `https://mysterious-sands-88815.herokuapp.com/updateEvent/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setDbStatus(data);
                    alert('Event Updated');
                }
            })
        // e.preventDefault();
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



    //Time
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let today = `${year}-0${month}-${date}`
    console.log(today)

    const handleServiceSubmit = e => {
        e.preventDefault();
    }


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Update Event</h2>
                <br />
                <form onSubmit={handleServiceSubmit}>
                <h5>Event Name</h5>
                <input type="text" onBlur={handleEventName} class="form-control w-50" autoFocus name="name" defaultValue={event.name} aria-label="First name" />
                <br />

                <h5>Event Details</h5>
                <textarea type="text" onBlur={handleEventDetails} class="form-control w-50" defaultValue={event.eventDetails} name="eventDetails" aria-label="Last name" />
                <br />

                <h5>Event Budget</h5>
                <input type="number" min="1" onBlur={handleEventBudget} class="form-control w-50" defaultValue={event.eventBudget} name="eventBudget" aria-label="Last name" />
                <br />

                <h5>Event Start</h5>
                <input type="date" onBlur={handleEventStart} min={today} max="2022-05-07" class="form-control w-50" placeholder="Event Budget" name="eventStart" defaultValue={event.eventStart} aria-label="Last name" required />
                <br />

                <h5>Event End</h5>
                <input type="date" onBlur={handleEventEnd} min={today} max="2022-05-07" class="form-control w-50" placeholder="Event Budget" defaultValue={event.eventEnd} name="eventEnd" aria-label="Last name" required />
                <br />

                <h5>Event Image</h5>
                <input type="file" onBlur={handleEventImage} defaultValue={event.imageURL} onChange={handleImageUpload} class="mb-5 form-control w-50" aria-label="Last name" />

                {
                    <p style={{ color: 'green' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                }

                <br />
                {checkFundBudget ?
                // <input onClick={() => handleEventUpdate(event._id)} type="button" className="btn btn-success mb-3" value="Submit" />
                    <button onClick={() => handleEventUpdate(event._id)} className="btn btn-success mb-3">Submit</button>
                    :
                    <p style={{ color: 'red' }}>Event Budget more than your fund amount</p>
                }

                {
                    <span style={{ color: 'green' }}> {dbStatus ? "Event updated successfully." : ""}</span>
                }
                </form>
            </div>
        </div>
    );
};

export default UpdateEvent;
