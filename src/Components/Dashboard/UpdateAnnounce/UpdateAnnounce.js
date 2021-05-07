import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const UpdateAnnounce = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);
    const [announcement, setAnnouncement] = useState([]);

    const [title, setTitle] = useState('');
    const [announcementDetails, setAnnouncementDetails] = useState('');
    const [announcementImage, setAnnouncementImage] = useState('');

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/updateAnnouncement/${id}`)
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [id])


    const handleAnnouncementName = e => {
        setTitle(e.target.value);
    }

    const handleAnnouncementDetails = e => {
        setAnnouncementDetails(e.target.value);
    }

    const handleAnnouncementImage = () => {
        setAnnouncementImage(imageURL || announcement.imageURL);
    }

    console.log(title, announcementDetails, announcementImage);


    const handleAnnouncementUpdate = (id) => {

        const updatedAnnouncement = {
            id,
            title: title || announcement.title,
            announcementDetails: announcementDetails || announcement.announcementDetails,
            announcementImage: announcementImage || announcement.imageURL
        };

        console.log(updatedAnnouncement)

        const url = `http://localhost:9999/updateAnnouncement/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAnnouncement)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setDbStatus(data);
                    alert('Announcement Updated');
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


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-4">Update Announcement</h2>
                <br />
                {/* <form onSubmit={() => handleServiceSubmit(event._id)}> */}
                <h5>Announcement Title</h5>
                <input type="text" onBlur={handleAnnouncementName} class="form-control w-50" autoFocus name="name" defaultValue={announcement.title} aria-label="First name" />
                <br />

                <h5>Announcement Details</h5>
                <textarea type="text" onBlur={handleAnnouncementDetails} class="form-control w-50" defaultValue={announcement.announcementDetails} name="eventDetails" aria-label="Last name" />
                <br />

                <h5>Announcement Image</h5>
                <input type="file" onBlur={handleAnnouncementImage} defaultValue={announcement.imageURL} onChange={handleImageUpload} class="mb-5 form-control w-50" aria-label="Last name" />

                {
                    <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                }

                <br />
                <button onClick={() => handleAnnouncementUpdate(announcement._id)} className="btn btn-success mb-3">Submit</button>
                {
                    <span style={{ color: 'green' }}> {dbStatus ? "Announcement updated successfully." : ""}</span>
                }
                {/* </form> */}
            </div>
        </div>
    );
};

export default UpdateAnnounce;
