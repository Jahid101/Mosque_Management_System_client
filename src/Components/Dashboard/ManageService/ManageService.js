import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const ManageService = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const deleted = () => {
        fetch('http://localhost:9999/service')
            .then(res => res.json())
            .then(data => setService(data))
    }


    const handleDelete = (id) => {

        fetch(`http://localhost:9999/deleteService/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                alert('Service Deleted')
                deleted();
            }
        })
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-5">Total Product : {service.length}</h3>
                {
                    service.map(service =>
                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h5 className="m-5">{service.name}</h5>
                            <h5 className="m-3">{service.serviceDetails}</h5>
                            <img  className="mb-3 mt-3" style={{ width: '100px', height:'100px' }} src={service.imageURL} alt="" />
                            <button onClick={() => handleDelete(service._id)} className="btn btn-danger m-5">Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageService;
