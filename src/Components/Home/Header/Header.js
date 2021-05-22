import React from 'react';
import pic from '../../../images/HeaderBg.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className="m-2">
            <img src={pic} class="d-block w-100" alt="" />
            <div style={{ marginBottom: '140px' }} class="carousel-caption d-none d-md-block">
                <h5 style={{ fontSize: '50px' }}>Allah Help Those<br />Who Help Themselves</h5>
                {/* <p class="mt-3">We are Promoting A Comprehensive Islamic Way Of Life Based On The Holy Quran</p> */}
            </div>
        </div>
    );
};

export default Header;
