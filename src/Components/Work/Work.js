import React, { useEffect, useState } from 'react';
import WorkCard from '../WorkCard/WorkCard';
import './Work.css';

const Work = () => {

    const [WS, setWS] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/WSList')
            .then(res => res.json())
            .then(data => setWS(data))
    }, [])


    return (
        <div className="mt-3 wsBg" id="WS">
            <div className="container">
                <h1 className="text-center mb-3" style={{ color: 'white', fontSize: '50px' }}> <strong>Other Members</strong> </h1>
                <div className="row">
                    {
                        WS.map(WS => <WorkCard WS={WS} ></WorkCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Work;
