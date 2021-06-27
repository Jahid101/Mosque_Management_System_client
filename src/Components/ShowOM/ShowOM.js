import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ShowOM = () => {

    const [OM, setOM] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://mysterious-sands-88815.herokuapp.com/showOM/${id}`)
            .then(res => res.json())
            .then(data => setOM(data))
    }, [id])

    let defaultImage = <img src="https://cdn3.iconfinder.com/data/icons/islamic-5/512/avatar_muslim_man_profile_man_islamic-512.png" alt="" />

    return (
        <div className="pb-3" style={{ backgroundColor: 'teal' }}>
            <h1 className="text-center pt-5 text-light">Member Details</h1>

            <div style={{ marginLeft: '75px', backgroundColor: '#00022e' }} className="row mt-5 rounded container text-light p-5">
                <h3 className="text-center text-light mb-5">
                    <strong>"{OM.name}"</strong>
                </h3>

                <div className="col-md-6 mt-4 mb-5">
                <h4>Email: <span style={{ color: 'purple' }}>{OM.email}</span></h4>
                    <br />
                    <h4>Designation: <span style={{ color: 'purple' }}>{OM.designation}</span></h4>
                    <br />
                    <h4>Phone: <span style={{ color: 'purple' }}>{OM.phone}</span></h4>
                    <br />

                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary mb-5">Facebook</button>
                    </a>

                    <br />
                    <br />
                    <h4><span style={{ color: 'purple' }}>{OM.details}</span></h4>
                </div>

                <div className="col-md-6 mt-3">
                    <img className="w-75" src={OM.imageURL || defaultImage} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ShowOM;
