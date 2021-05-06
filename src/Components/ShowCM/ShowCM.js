import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowCM = () => {

    const [CM, setCM] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/showCM/${id}`)
            .then(res => res.json())
            .then(data => setCM(data))
    }, [id])


    return (
        <div className="pb-3" style={{ backgroundColor: 'teal' }}>
            <h1 className="text-center pt-5 text-light">Committee Member Details</h1>

            <div style={{ marginLeft: '75px', backgroundColor: '#00022e' }} className="row mt-5 rounded container text-light p-5">
                <h1 className="text-center text-light mb-5">
                    <strong>"{CM.name}"</strong>
                </h1>

                <div className="col-md-6 mt-4 mb-5">
                    <h4>Email: {CM.email}</h4>
                    <br />
                    <h4>Designation: {CM.designation}</h4>
                    <br />
                    <h4>Phone: {CM.phone}</h4>
                    <br />
                    <br />
                    <h4>{CM.description}</h4>
                </div>

                <div className="col-md-6 mt-3">
                    <img className="w-75" src={CM.imageURL} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ShowCM;
