import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import './Navbar.css';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }

    return (
        <nav class="navbar navbar-expand-lg navbarBg navbar-light mb-3 m-1 p-2 rounded">
            <div class="container-fluid text-light">
                <Link class="navbar-brand" to="/"><h3 class="text-light"><strong>ABC Mosque</strong></h3></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mr-2">
                            <Link class="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item mr-2">
                            <Link class="nav-link active text-light" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item mr-2">
                            <Link class="nav-link active text-light" aria-current="page" to="/event">Events</Link>
                        </li>
                        <li class="nav-item mr-2">
                            <Link class="nav-link active text-light" aria-current="page" to="/announcement">Announcements</Link>
                        </li>
                        <li class="nav-item mr-2">
                            <Link class="nav-link active text-light" aria-current="page" to="/committeeMember">Committee<br/><span className="ms-2">Members</span></Link>
                        </li>
                        <li class="nav-item mr-2">
                            <Link class="nav-link active text-light" aria-current="page" to="/OM">Other<br/><span className="">Members</span></Link>
                        </li>
                        <li class="nav-item mr-2">
                            <Link class="nav-link active text-light" aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-light" to="/register">
                                <button class="btn btn-info mr-2">
                                    Register
                            </button>
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <p>{loggedInUser.email}</p>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link active text-light" to="/login" tabindex="-1" aria-disabled="true">
                                <input type="submit" class="btn btn-success" onClick={handleSignOut} value={loggedInUser.email ? 'Log Out' : 'Log In'} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
