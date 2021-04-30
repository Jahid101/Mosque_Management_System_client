import axios from 'axios';
import React, { useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const AddService = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);


    const handleServiceSubmit = e => {
        const serviceInfo = {
            name: e.target.name.value,
            serviceDetails: e.target.serviceDetails.value,
            imageURL: imageURL
        };


        const url = `http://localhost:9999/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDbStatus(data);
                if (data) {
                    e.target.reset();
                    alert('Service added successfully.')
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
                    <h5>Name</h5>
                    <input type="text" class="form-control w-50" placeholder="Service Name" name="name" aria-label="First name" required />
                    <br />

                    <h5>Service Details</h5>
                    <input type="text" class="form-control w-50" placeholder="Service Details" name="serviceDetails" aria-label="Last name" required />
                    <br />

                    <h5>Service Image</h5>
                    <input type="file" onChange={handleImageUpload} class="mb-5" placeholder="Last name" aria-label="Last name" required />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Service added successfully." : ""}</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddService;
