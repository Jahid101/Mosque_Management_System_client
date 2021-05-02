import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCommentDots, faShoppingCart, faList, faPlus, faTasks, faListAlt, faUserAstronaut, faUserAlt, faUserTag, faUserFriends, faMoneyCheck, faFunnelDollar, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {

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


    return (
        <div className="sidebar col-md-3 abcd col-lg-2 pt-3 pb-3 rounded d-md-block m-1 collapse" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/makeDonation" className="text-white">
                        <FontAwesomeIcon icon={faMoneyBill} /> <span>
                            Make Donation
                            </span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>
                            Service list
                            </span>
                    </Link>
                </li>
                <li>
                    <Link to="/feedback" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Feedback</span>
                    </Link>
                </li>

                {checkAdmin && <div>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faListAlt} /> <span>Donation list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addEvent" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Event</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addPrayerTime" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Prayer Time</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAnnouncement" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Announcement</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/fund" className="text-white" >
                            <FontAwesomeIcon icon={faFunnelDollar} /> <span>Fund</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageEvent" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Event</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageAnnouncement" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Announcement</span>
                        </Link>
                    </li>
                </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;
