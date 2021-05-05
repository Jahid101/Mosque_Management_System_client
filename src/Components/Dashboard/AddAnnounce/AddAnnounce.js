import axios from 'axios';
import React, { useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';


const AddAnnounce = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);


    const handleServiceSubmit = e => {
        const eventInfo = {
            title: e.target.title.value,
            announcementDetails: e.target.announcementDetails.value,
            imageURL: imageURL
        };


        const url = `http://localhost:9999/addAnnouncement`;
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
                    alert('Announcement added successfully.')
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
                <h2 className="mb-4">Add Announcement</h2>
                <br />
                <form onSubmit={handleServiceSubmit}>
                    <h5>Announcement Title</h5>
                    <input type="text" autoFocus class="form-control w-50" placeholder="Announcement Name" name="title" aria-label="First name" required />
                    <br />

                    <h5>Announcement Details</h5>
                    <textarea type="text" class="form-control w-50" placeholder="Announcement Details" name="announcementDetails" aria-label="Last name" required />
                    <br />

                    <h5>Announcement Image</h5>
                    <input type="file" onChange={handleImageUpload} class="mb-5" aria-label="Last name" required />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Announcement added successfully." : ""}</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddAnnounce;
