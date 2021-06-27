import React, { useEffect, useState } from 'react';
import OMCard from '../OMCard/OMCard';
import './OM.css';

const OM = () => {

    const [OM, setOM] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/OM')
            .then(res => res.json())
            .then(data => setOM(data))
    }, [])


    return (
        <div className="mt-3 omBg" id="committeeMember">
            <div className="container">
                <h1 className="text-center mb-3" style={{ color: 'white', fontSize: '50px' }}> <strong>Other Members</strong> </h1>
                <div className="row">
                    {
                        OM.map(OM => <OMCard OM={OM} ></OMCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OM;
