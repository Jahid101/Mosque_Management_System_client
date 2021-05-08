import React, { useEffect, useState } from 'react';
import "./Event.css";
import EventCard from "../EventCard/EventCard";

const Event = () => {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/event')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])

    return (
        <div className="mt-2 eventBg" id="event">
            <div className="container">
                <h1 className="text-center mb-3" style={{color: 'white', fontSize:'50px'}}> <strong>Events</strong> </h1>
                <div className="row">
                    {
                        event.map(event => <EventCard event={event} ></EventCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Event;
