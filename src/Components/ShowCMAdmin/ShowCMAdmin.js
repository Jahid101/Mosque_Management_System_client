import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowCM = () => {

    const [CMAdmin, setCMAdmin] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/showCMAdmin/${id}`)
            .then(res => res.json())
            .then(data => setCMAdmin(data))
    }, [id])

    console.log(CMAdmin)


    return (
        <div className="pb-3" style={{ backgroundColor: 'teal' }}>
            <h1 className="text-center pt-5 text-light">Committee Member Details</h1>

            <div style={{ marginLeft: '75px', backgroundColor: '#00022e' }} className="row mt-5 rounded container text-light p-5">
                <h1 className="text-center text-light mb-5">
                    <strong>"{CMAdmin.name}"</strong>
                </h1>

                <div className="col-md-6 mt-4 mb-5">
                    <h4>Email: <span style={{ color: 'purple' }}>{CMAdmin.email}</span></h4>
                    <br />
                    <h4>Designation: <span style={{ color: 'purple' }}>{CMAdmin.designation}</span></h4>
                    <br />
                    <h4>Phone: <span style={{ color: 'purple' }}>{CMAdmin.phone}</span></h4>
                    <br />

                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary mb-5">Facebook</button>
                    </a>

                    <br />
                    <br />
                    <h4><span style={{ color: 'purple' }}>{CMAdmin.details}</span></h4>
                </div>

                <div className="col-md-6 mt-3">
                    <img className="w-75" src={CMAdmin.imageURL} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ShowCM;
