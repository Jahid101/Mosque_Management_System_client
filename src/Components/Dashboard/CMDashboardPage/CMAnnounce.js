import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CMDashboard from '../CMDashboard/CMDashboard';

const CMAnnounce = () => {

    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/announcement')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [])



    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <CMDashboard></CMDashboard>

            <div className="mt-3" style={{ marginLeft: '240px' }}>
                <h3 className="ml-5 mb-4">Total Announcements: {announcement.length}</h3>
                {/* <Link to="/announcement">
                    <button style={{marginRight: '3%', float: 'right' }} className="btn btn-primary mb-3">View all Announcements</button>
                </Link> */}
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Announcement Title</th>
                            <th scope="col">Announcement Details</th>
                            <th scope="col">Announcement Image</th>
                            <th scope="col">Announcement Date & Time</th>
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
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default CMAnnounce;
