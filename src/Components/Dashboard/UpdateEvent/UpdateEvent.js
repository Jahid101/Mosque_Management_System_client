import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const UpdateEvent = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);
    const [event, setEvent] = useState([]);


    useEffect(() => {
        fetch('http://localhost:9999/event')
            .then(res => res.json())
            .then(data => {
                data.map(data => setEvent(data))
            })
    }, [])

    // const handleServiceSubmit = (id, e) => {
    //     const name = e.target.name.value;
    //     const eventDetails = e.target.eventDetails.value;
    //     const eventBudget = e.target.eventBudget.value;
    //     const image = imageURL;

    //     const updatedEvent = { id, name, eventDetails, eventBudget, image };

    //     console.log(updatedEvent)

    //     const url = `http://localhost:9999/updateEvent/${id}`;
    //     fetch(url, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedEvent)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 setDbStatus(data);
    //                 alert('Event Updated');
    //             }
    //         })
    //     e.preventDefault();
    // }


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
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>
            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Add Event</h2>
                <br />
                {/* <form onSubmit={() => handleServiceSubmit(event._id)}> */}
                    <h5>Event Name</h5>
                    <input type="text" class="form-control w-50" placeholder="Event Name" name="name" defaultValue={event.name} aria-label="First name"  />
                    <br />

                    <h5>Event Details</h5>
                    <textarea type="text" class="form-control w-50" placeholder="Event Details" defaultValue={event.eventDetails} name="eventDetails" aria-label="Last name"  />
                    <br />

                    <h5>Event Budget</h5>
                    <input type="number" class="form-control w-50" placeholder="Event Budget" defaultValue={event.eventBudget} name="eventBudget" aria-label="Last name"  />
                    <br />

                    <h5>Event Image</h5>
                    <input type="file" defaultValue={event.imageURL} onChange={handleImageUpload} class="mb-5" aria-label="Last name" />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Event updated successfully." : ""}</span>
                    }
                {/* </form> */}
            </div>
        </div>
    );
};

export default UpdateEvent;
