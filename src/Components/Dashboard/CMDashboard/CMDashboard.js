import { faFunnelDollar, faList, faListAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const CMDashboard = () => {

    return (
        <div className="sidebar col-md-3 abcd col-lg-2 pt-3 pb-3 rounded d-md-block m-1 collapse" style={{ height: "600px" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/donationList" className="text-white">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Donation list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/otherAdditionList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Other Addition List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/workingSpendList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Working spend List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/fund" className="text-white" >
                        <FontAwesomeIcon icon={faFunnelDollar} /> <span>Fund</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageCM" className="text-white" >
                        <FontAwesomeIcon icon={faTasks} /> <span>Committee Members</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageOM" className="text-white" >
                        <FontAwesomeIcon icon={faTasks} /> <span>Other Members</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageEvent" className="text-white">
                        <FontAwesomeIcon icon={faTasks} /> <span>Events</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageAnnouncement" className="text-white">
                        <FontAwesomeIcon icon={faTasks} /> <span>Announcements</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CMDashboard;
