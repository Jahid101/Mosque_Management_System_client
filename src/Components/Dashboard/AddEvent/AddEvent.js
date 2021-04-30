import axios from 'axios';
import React, { useState } from 'react';
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
                    e.target.reset();
                    alert('Event added successfully.')
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
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>
            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Add Service</h2>
                <br />
                <form onSubmit={handleServiceSubmit}>
                    <h5>Event Name</h5>
                    <input type="text" class="form-control w-50" placeholder="Event Name" name="name" aria-label="First name" required />
                    <br />

                    <h5>Event Details</h5>
                    <textarea type="text" class="form-control w-50" placeholder="Event Details" name="eventDetails" aria-label="Last name" required />
                    <br />

                    <h5>Event Budget</h5>
                    <input type="number" class="form-control w-50" placeholder="Event Budget" name="eventBudget" aria-label="Last name" required />
                    <br />

                    <h5>Event Image</h5>
                    <input type="file" onChange={handleImageUpload} class="mb-5" placeholder="Last name" aria-label="Last name" required />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Event added successfully." : ""}</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
