import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const UpdateCM = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);
    const [CM, setCM] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');
    const [designation, setDesignation] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/updateCM/${id}`)
            .then(res => res.json())
            .then(data => setCM(data))
    }, [id])


    //update CM

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handleDetails = e => {
        setDetails(e.target.value);
    }

    const handleDesignation = e => {
        setDesignation(e.target.value);
    }

    const handlePhone = e => {
        setPhone(e.target.value);
    }

    const handleImage = () => {
        setImage(imageURL || CM.imageURL);
    }


    const handleCMClick = (id) => {

        const updatedCM = {
            id,
            name: name || CM.name,
            email: email || CM.email,
            designation: designation || CM.designation,
            details: details || CM.details,
            phone: phone || CM.phone,
            imageURL: image || CM.imageURL
        }

        console.log(updatedCM)

        const url = `http://localhost:9999/updateCommitteeMember/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCM)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setDbStatus(data);
                    alert('Committee Member Updated');
                }
            })
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

    // const handleCMSubmit = () => {

    // }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-3">Update Committee Member</h2>
                <br />
                {/* <form onSubmit={() => handleCMSubmit}> */}
                <h5>Name</h5>
                <input type="text" onBlur={handleName} class="form-control w-50" autoFocus name="name" defaultValue={CM.name} aria-label="First name" required />
                <br />

                <h5>Email</h5>
                <input type="email" onBlur={handleEmail} class="form-control w-50" name="email" defaultValue={CM.email} aria-label="Last name" />
                <br />

                <h5>Designation</h5>
                <input type="text" onBlur={handleDesignation} class="form-control w-50" defaultValue={CM.designation} name="designation" aria-label="Last name" />
                <br />

                <h5>Details</h5>
                <textarea type="text" onBlur={handleDetails} class="form-control w-50" defaultValue={CM.details} name="details" aria-label="Last name" />
                <br />

                <h5>Phone</h5>
                <input type="number" onBlur={handlePhone} min="999999999" max="9999999999" class="form-control w-50" defaultValue={CM.phone} name="phone" aria-label="Last name" />
                <br />

                <h5>Image</h5>
                <input type="file" onBlur={handleImage} name="imageURL" onChange={handleImageUpload} defaultValue={CM.imageURL} class="mb-2 form-control w-50" aria-label="Last name" />

                {<>
                    <img style={{ width: '75px', height: '75px' }} src={CM.imageURL} alt="" />
                    <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                </>
                }

                <br />
                {/* {imageURLStatus ? */}
                <button onClick={() => handleCMClick(CM._id)} className="btn btn-success mb-3">Submit</button>
                {/* :''} */}
                {
                    <span style={{ color: 'green' }}> {dbStatus ? "Committee Member updated successfully." : ""}</span>
                }
                {/* </form> */}
            </div>
        </div>
    );
};

export default UpdateCM;
