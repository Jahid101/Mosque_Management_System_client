import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const WorkCard = (props) => {

    const { spendFor, workingImageURL, _id } = props.WS;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [receivedDonation, setReceivedDonation] = useState([]);

    const received = 'Received';

    useEffect(() => {
        fetch('http://localhost:9999/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => {
                data.map(data => setReceivedDonation(data))
            })
    }, [received])

    const [admin, setAdmin] = useState({})

    useEffect(() => {
        fetch('http://localhost:9999/admin')
            .then(res => res.json())
            .then(data => {
                data.map(data => setAdmin(data))
            })
    }, [])

    // console.log(admin.email)


    const history = useHistory();

    const handleCardClick = () => {

        if (loggedInUser.email === receivedDonation.email) {
            history.push(`/showWork/${_id}`);
        }
        else {
            if (loggedInUser.email === admin.email) {
                history.push(`/showWork/${_id}`);
                console.log('in')
            }
            else {
                alert('Access Denied !!!')
            }
        }
    }



    return (
        <div onClick={handleCardClick} class="row container cardDesign wsCardInfo mt-5 p-3 btn">
            <div>
                <img src={workingImageURL} alt="" />
                <div>
                    <br />
                    <h2 className="text-center mt-4 mb-4">{spendFor}</h2>
                    <button className="btn btn-info">See more</button>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
