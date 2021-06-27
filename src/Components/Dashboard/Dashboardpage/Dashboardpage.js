import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Welcome from '../Welcome/Welcome';

const Dashboardpage = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkAdmin, setCheckAdmin] = useState(false);


    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/checkAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setCheckAdmin(data));
    }, [loggedInUser.email])


    return (
        <div>
            {/* {checkAdmin && */}
                {/* <div> */}
                    {/* <Sidebar></Sidebar> */}
                    <Welcome></Welcome>
                {/* </div> */}
            {/* } */}
        </div>
    );
};

export default Dashboardpage;
