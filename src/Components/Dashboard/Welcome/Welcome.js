import React from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';


const Welcome = () => {
    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '220px' }}>
                <img className="p-3 rounded" style={{ height: '100vh', width: '100%' }} src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" />

                <div style={{ marginBottom: '140px', marginRight: '400px'}} class="carousel-caption d-none d-md-block">
                    <h5 style={{ fontSize: '50px' }}>Welcome to<br />Dashboard</h5>
                    {/* <p class="mt-3">We are Promoting A Comprehensive Islamic Way Of Life Based On The Holy Quran</p> */}
                </div>
            </div>
        </div>
    );
};

export default Welcome;
