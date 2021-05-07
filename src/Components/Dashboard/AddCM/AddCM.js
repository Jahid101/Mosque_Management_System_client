import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const AddCM = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);


    const handleCMSubmit = e => {
        const CMInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            designation: e.target.designation.value,
            details: e.target.details.value,
            phone: e.target.phone.value,
            time: new Date(),
            imageURL: imageURL
        };

        const url = `http://localhost:9999/addCM`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CMInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDbStatus(data);
                if (data) {
                    alert('Committee Member added successfully.')
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
                    alert('Image Uploaded Successfully')
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
                <h2 className="mb-3">Add Committee Member</h2>
                <br />
                <form onSubmit={handleCMSubmit}>
                    <h5>Name</h5>
                    <input type="text" class="form-control w-50" autoFocus placeholder="Name" name="name" aria-label="First name" required />
                    <br />

                    <h5>Email</h5>
                    <input type="email" class="form-control w-50" placeholder="Event Email" name="email" aria-label="Last name" />
                    <br />

                    <h5>Designation</h5>
                    <input type="text" class="form-control w-50" placeholder="Designation" name="designation" aria-label="Last name" />
                    <br />

                    <h5>Details</h5>
                    <textarea type="text" class="form-control w-50" placeholder="Details" name="details" aria-label="Last name" />
                    <br />

                    <h5>Phone</h5>
                    <input type="number" min="999999999" max="9999999999" class="form-control w-50" placeholder="Phone" name="phone" aria-label="Last name" />
                    <br />

                    <h5>Image</h5>
                    <input type="file" onChange={handleImageUpload} class="mb-2 form-control w-50" aria-label="Last name" />

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

export default AddCM;
