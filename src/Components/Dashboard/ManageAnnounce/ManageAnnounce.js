import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const ManageAnnounce = () => {

    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/announcement')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [])


    const deleted = () => {
        fetch('http://localhost:9999/announcement')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }


    const handleDelete = (id) => {

        fetch(`http://localhost:9999/deleteAnnouncement/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                alert('Announcement Deleted')
                deleted();
            }
        })
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-5">Total Product : {announcement.length}</h3>
                {
                    announcement.map(announcement =>
                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h5 className="m-5">{announcement.title}</h5>
                            <h5 className="m-3">{announcement.announcementDetails}</h5>
                            <img  className="mb-3 mt-3" style={{ width: '100px', height:'100px' }} src={announcement.imageURL} alt="" />
                            <button onClick={() => handleDelete(announcement._id)} className="btn btn-danger m-5">Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageAnnounce;
