import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ShowWork = () => {

    const [WS, setWS] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/showWork/${id}`)
            .then(res => res.json())
            .then(data => setWS(data))
    }, [id])


    return (
        <div className="pb-3" style={{ backgroundColor: 'teal' }}>
            <h1 className="text-center pt-5 text-light">Working Details</h1>

            <div style={{ marginLeft: '75px', backgroundColor: '#00022e' }} className="row mt-5 rounded container text-light p-5">
                <h3 className="text-center text-light mb-5">
                    <strong>"{WS.spendFor}"</strong>
                </h3>

                <div className="col-md-6 mt-3">
                    <img className="w-75 mb-5" src={WS.workingImageURL} alt="" />
                </div>

                <div className="col-md-6 mt-4 mb-5">
                    <h4>Name: <span style={{ color: 'purple' }}>{WS.spendFor}</span></h4>
                    <br />
                    <h4>Total Cost: <span style={{ color: 'purple' }}>{WS.amount}Tk</span></h4>
                    <br />
                    <h4>Date: <span style={{ color: 'purple' }}>
                        {
                            new Date(WS.time).toLocaleDateString()
                        }
                    </span></h4>
                    <br />
                    <h4>Details: <span style={{ color: 'purple' }}>{WS.details}</span></h4>
                </div>



                <div className="col-md-6 mt-4 mb-5">
                    <h4>Name: <span style={{ color: 'purple' }}>{WS.name}</span></h4>
                    <br />
                    <h4>Email: <span style={{ color: 'purple' }}>{WS.email}</span></h4>
                    <br />
                    <h4>Designation: <span style={{ color: 'purple' }}>President</span></h4>
                </div>

                <div className="col-md-6 mt-3">
                    <img className="w-75" src={WS.receiptImageURL} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ShowWork;
