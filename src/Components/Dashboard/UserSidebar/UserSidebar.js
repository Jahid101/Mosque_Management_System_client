import { faCommentDots, faList, faMoneyBill,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const UserSidebar = () => {
    
    return (
        <div className="sidebar col-md-3 abcd col-lg-2 pt-3 pb-3 rounded d-md-block m-1 collapse" style={{ height: "600px" }}>
            <ul className="list-unstyled">

                <li>
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
                </li>
                
            </ul>
        </div>
    );
};

export default UserSidebar;
