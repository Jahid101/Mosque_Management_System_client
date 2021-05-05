import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-5">Announcements: {announcement.length}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Announcement Title</th>
                            <th scope="col">Announcement Details</th>
                            <th scope="col">Announcement Image</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                    </thead>
                    {
                        announcement.map(announcement =>
                            <tbody>
                                <tr>
                                    <th scope="row">{announcement.title}</th>
                                    <td className="w-25">{announcement.announcementDetails}</td>
                                    <td>
                                        <img className="" style={{ width: '75px', height: '75px' }} src={announcement.imageURL} alt="" />
                                    </td>
                                    <td>
                                        <button onClick={() => handleUpdate(announcement._id)} className="btn btn-success ms-5 mt-3">Update</button>

                                        <button onClick={() => handleDelete(announcement._id)} className="btn btn-danger ms-5 mt-3">Delete</button>
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
