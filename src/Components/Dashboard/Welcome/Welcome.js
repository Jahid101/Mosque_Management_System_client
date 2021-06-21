import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import CMDashboard from '../CMDashboard/CMDashboard';
import Sidebar from '../Sidebar/Sidebar';
import UserSidebar from '../UserSidebar/UserSidebar';
import dashboardPic from '../../../images/welcome dashboard.jpg';


const Welcome = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkAdmin, setCheckAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:9999/checkAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setCheckAdmin(data));
    }, [loggedInUser.email])



    const [checkCM, setCheckCM] = useState(false);

    useEffect(() => {
        fetch('http://localhost:9999/checkCM', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setCheckCM(data));
    }, [loggedInUser.email])



    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <UserSidebar></UserSidebar>

            {checkAdmin && <div>
                <Sidebar></Sidebar>
            </div>
            }

            {checkCM && <div>
                <CMDashboard></CMDashboard>
            </div>
            }

            <div className="mt-2" style={{ marginLeft: '220px' }}>
                <img className="p-3 rounded" style={{ height: '100vh', width: '100%' }} src={dashboardPic} alt="" />

                <div style={{ marginBottom: '140px', marginRight: '400px' }} class="carousel-caption d-none d-md-block">
                    <h5 style={{ fontSize: '50px' }}>Welcome to<br />Dashboard</h5>
                    {/* <p class="mt-3">We are Promoting A Comprehensive Islamic Way Of Life Based On The Holy Quran</p> */}
                </div>
            </div>
        </div>
    );
};

export default Welcome;
