import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faTasks, faListAlt, faFunnelDollar, faUpload, faFileAlt, faHandHoldingUsd, faClipboard, faClipboardList, faFileInvoiceDollar, faMoneyCheckAlt, faClock, faUsers, faChalkboardTeacher, faMosque, faBullhorn } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {

    return (
        <div className="sidebar col-md-3 abcd col-lg-2 pt-3 pb-3 rounded d-md-block m-1 collapse" style={{ height: "600px" }}>
            <ul className="list-unstyled">

                {/* <li>
                    <Link to="/addAdmin" className="text-white" >
                        <FontAwesomeIcon icon={faListAlt} /> <span>Add Admin</span>
                    </Link>
                </li> */}
                <li>
                    <Link to="/donationList" className="text-white">
                        <FontAwesomeIcon icon={faHandHoldingUsd} /> <span className="ms-1">Donation list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/otherAddition" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span className="ms-1">Other Addition</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addWS" className="text-white">
                        <FontAwesomeIcon icon={faFileInvoiceDollar} /> <span className="ms-1">Work Spending</span>
                    </Link>
                </li>
                <li>
                    <Link to="/otherAdditionList" className="text-white">
                        <FontAwesomeIcon icon={faClipboardList} /> <span className="ms-1">Other Addition List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/workingSpendList" className="text-white">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} /> <span className="ms-1">Work spending List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addPrayerTime" className="text-white" >
                        <FontAwesomeIcon icon={faClock} /> <span className="ms-1">Update Prayer Time</span>
                    </Link>
                </li>
                <li>
                    <Link to="/fund" className="text-white" >
                        <FontAwesomeIcon icon={faFunnelDollar} /> <span className="ms-1">Fund</span>
                    </Link>
                </li>
                <li>
                    <Link to="/report" className="text-white" >
                        <FontAwesomeIcon icon={faFileAlt} /> <span className="ms-1">Report</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageCM" className="text-white" >
                        <FontAwesomeIcon icon={faChalkboardTeacher} /> <span className="ms-1">Committee Members</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageOM" className="text-white" >
                        <FontAwesomeIcon icon={faUsers} /> <span className="ms-1">Employee Members</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageEvent" className="text-white">
                        <FontAwesomeIcon icon={faMosque} /> <span className="ms-1">Events</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageAnnouncement" className="text-white">
                        <FontAwesomeIcon icon={faBullhorn} /> <span className="ms-1">Announcements</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
