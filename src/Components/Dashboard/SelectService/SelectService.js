import React from 'react';
import { Link } from 'react-router-dom';

const SelectService = () => {
    return (
        <div className="container text-center mt-3">
            <h3>Select a Service First</h3>
            <Link to="/home">
                <button class="btn btn-success">Select Service</button>
            </Link>
        </div>
    );
};

export default SelectService;
