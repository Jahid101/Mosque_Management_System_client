import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Email from '../Email/Email';
import ViewMap from '../ViewMap/ViewMap';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#2c003f' }} className="text-center p-5 text-light mt-2 mb-4 m-2 rounded row">
            <h1>Contact us</h1>

            <div className="col-md-6">
                <strong>
                    <div className="mt-5 mb-5">
                        <p>Akdom Tola, BakdomPur</p>
                        <p>Dhaka 1206, Bangladesh</p>
                        <p>phone: <button className="btn btn-info ms-3">+88012345678910</button></p>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <span className="btn">
                                <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebookSquare} /><span className="ms-2">Facebook</span></button>
                            </span>
                        </a>
                    </div>
                </strong>
            </div>

            <div className=" mt-5 col-md-6">
                <div className="rounded">
                    <ViewMap></ViewMap>
                </div>
            </div>

            <div className="mt-5">
                <Email></Email>
            </div>
        </div>
    );
};

export default Contact;
