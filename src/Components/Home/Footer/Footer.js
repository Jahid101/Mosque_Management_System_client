import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <>
            <div style={{backgroundColor: '#00022e'}} className="text-center p-5 text-light mt-3 mb-4 m-2 rounded">
                <h1>Address</h1>

                <strong>
                    <div className="mt-5 mb-5">
                        <p>Akdom Tola, BakdomPur</p>
                        <p>Dhaka 1206, Bangladesh</p>
                        <p>phone: <button className="btn btn-info ms-3">+88012345678910</button></p>
                    </div>
                </strong>
                <div>
                    <>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <span className="btn">
                                <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebookSquare} /><span className="ms-2">Facebook</span></button>
                            </span>
                        </a>

                        <Link to="/email">
                            <span className="btn">
                                <button className="btn btn-success"><FontAwesomeIcon icon={faMailBulk} /><span className="ms-2">Email us</span></button>
                            </span>
                        </Link>
                    </>
                </div>
            </div>

            <footer className="text-center mb-3">
                <strong>© Abc Mosque {(new Date()).getFullYear()}</strong>
            </footer>
        </>
        
    );
};

export default Footer;
