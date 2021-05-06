import { faCommentDots, faFunnelDollar, faList, faListAlt, faMoneyBill, faPlus, faTasks, faUpload, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AddminSidebar = () => {
    return (
        <div className="sidebar col-md-3 abcd col-lg-2 pt-3 pb-3 rounded d-md-block m-1 collapse" style={{ height: "750px" }}>
            <ul className="list-unstyled">

                {/* <li>
                    <Link to="/makeDonation" className="text-white">
                        <FontAwesomeIcon icon={faMoneyBill} /> <span>
                            Make Donation
                            </span>
                    </Link>
                </li>
                <li>
                    <Link to="/donationYouMade" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>
                            Donations you made
                            </span>
                    </Link>
                </li>
                <li>
                    <Link to="/feedback" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Feedback</span>
                    </Link>
                </li> */}
                <li>
                    <Link to="/donationList" className="text-white">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Donation list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/otherAddition" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Other Addition</span>
                    </Link>
                </li>
                <li>
                    <Link to="/otherAdditionList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Other Addition List</span>
                    </Link>
                </li>
                {/* <li>
                        <Link to="/addEvent" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Event</span>
                        </Link>
                    </li> */}
                <li>
                    <Link to="/addPrayerTime" className="text-white" >
                        <FontAwesomeIcon icon={faUpload} /> <span>Update Prayer Time</span>
                    </Link>
                </li>
                {/* <li>
                        <Link to="/addAnnouncement" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Announcement</span>
                        </Link>
                    </li> */}
                <li>
                    <Link to="/fund" className="text-white" >
                        <FontAwesomeIcon icon={faFunnelDollar} /> <span>Fund</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addCM" className="text-white" >
                        <FontAwesomeIcon icon={faTasks} /> <span>Committee Members</span>
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
            </ul>
        </div>
    );
};

export default AddminSidebar;
