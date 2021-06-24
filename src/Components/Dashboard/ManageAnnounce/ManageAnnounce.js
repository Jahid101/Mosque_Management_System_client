import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

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

    const history = useHistory();

    const handleUpdate = (id) => {
        history.push(`/updateAnnouncement/${id}`);
    }

    const handleDelete = (id) => {

        fetch(`http://localhost:9999/deleteAnnouncement/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Announcement Deleted')
                    deleted();
                }
            })
    }


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

            <div className="mt-3" style={{ marginLeft: '230px' }}>
                <h3 className="ml-5 mb-5">Total Announcements: {announcement.length}</h3>
                <Link to="/addAnnouncement">
                    <button style={{ marginLeft: '' }} className="btn btn-info mb-3">Add Announcement</button>
                </Link>

                <Link to="/announcement">
                    <button style={{marginRight: '3%', float: 'right' }} className="btn btn-primary mb-3">View all Announcements</button>
                </Link>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Details</th>
                            <th scope="col">Image</th>
                            <th scope="col">Date & Time</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                    </thead>
                    {
                        announcement.map(announcement =>
                            <tbody>
                                <tr>
                                    <th scope="row">{announcement.title}</th>
                                    <td className="">{announcement.announcementDetails}</td>
                                    <td>
                                        <img className="" style={{ width: '75px', height: '75px' }} src={announcement.imageURL} alt="" />
                                    </td>
                                    <td>
                                        {new Date(announcement.time).toLocaleTimeString()}
                                        <br />

                                        {new Date(announcement.time).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <button onClick={() => handleUpdate(announcement._id)} className="btn btn-success ms-3 mt-3">Update</button>

                                        <button onClick={() => handleDelete(announcement._id)} className="btn btn-danger ms-3 mt-3">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageAnnounce;
