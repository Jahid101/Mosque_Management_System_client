import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const UpdateEvent = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);
    const [event, setEvent] = useState([]);

    const [name, setName] = useState('');
    const [eventDetails, setEventDetails] = useState('');
    const [eventBudget, setEventBudget]  = useState('');
    const [eventImage, setEventImage] = useState('');

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/updateEvent/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])


    const handleEventName = e => {
        setName(e.target.value);
    }

    const handleEventDetails = e => {
        setEventDetails(e.target.value);
    }

    const handleEventBudget = e => {
        setEventBudget(e.target.value);
    }

    const handleEventImage = () => {
        setEventImage(imageURL || event.imageURL);
    }

    console.log(name, eventDetails, eventBudget, eventImage);


    const handleEventUpdate = (id) => {

        const updatedEvent = { id, name, eventDetails, eventBudget, eventImage };

        console.log(updatedEvent)

        const url = `http://localhost:9999/updateEvent/${id}`;
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
                if(response){
                    alert('Image Updated Successfully')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Update Event</h2>
                <br />
                {/* <form onSubmit={() => handleServiceSubmit(event._id)}> */}
                <h5>Event Name</h5>
                <input type="text" onBlur={handleEventName} class="form-control w-50" autoFocus name="name" defaultValue={event.name} aria-label="First name" />
                <br />

                <h5>Event Details</h5>
                <textarea type="text" onBlur={handleEventDetails} class="form-control w-50" defaultValue={event.eventDetails} name="eventDetails" aria-label="Last name" />
                <br />

                <h5>Event Budget</h5>
                <input type="number" onBlur={handleEventBudget} class="form-control w-50" defaultValue={event.eventBudget} name="eventBudget" aria-label="Last name" />
                <br />

                <h5>Event Image</h5>
                <input type="file" onBlur={handleEventImage} defaultValue={event.imageURL} onChange={handleImageUpload} class="mb-5" aria-label="Last name" />

                {
                    <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                }

                <br />
                <button onClick={() => handleEventUpdate(event._id)} className="btn btn-success mb-3">Submit</button>
                {
                    <span style={{ color: 'green' }}> {dbStatus ? "Event updated successfully." : ""}</span>
                }
                {/* </form> */}
            </div>
        </div>
    );
};

export default UpdateEvent;
