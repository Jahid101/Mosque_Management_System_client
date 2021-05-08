import React, { useEffect, useState } from 'react';
import AnnouncementCard from '../AnnouncementCard/AnnouncementCard';
import "./Announcement.css";

const Announcement = () => {

    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/announcement')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [])

    return (
        <div className="mt-2 announcementBg" id="announcement">
            <h1 className="text-center mb-3 text-light" style={{ color: 'black', fontSize: '55px' }}>Announcements</h1>
            <div className="row">
                {
                    announcement.map(announcement => <AnnouncementCard announcement={announcement}></AnnouncementCard>)
                }
            </div>
        </div>
    );
};

export default Announcement;
