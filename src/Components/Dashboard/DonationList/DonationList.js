import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const DonationList = () => {

    const [donation, setDonation] = useState([]);
    const [nameSearch, setNameSearch] = useState('');
    const [donateForSearch, setDonateForSearch] = useState('');
    const [nameData, setNameData] = useState([]);
    const [donateForData, setDonateForData] = useState([]);
    const [allDonationStatus, setAllDonationStatus] = useState(false);
    const [nameStatus, setNameStatus] = useState(false);
    const [donateForStatus, setDonateForStatus] = useState(false);


    //All Donation List
    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])


    const statusUpdated = () => {
        fetch('https://mysterious-sands-88815.herokuapp.com/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }


    const handleAllDonationClick = () => {
        setAllDonationStatus(true);
        setNameStatus(false);
        setDonateForStatus(false);
    }

    const [userInfo, setUserInfo] = useState({});
    // console.log(userInfo)

    const sendEmail = (abc) => {

        console.log(abc)
        const userMail = {
            email: userInfo.email && userInfo.email
        }

        const url1 = `https://mysterious-sands-88815.herokuapp.com/send`;
        abc && fetch(url1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: abc })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Mail send Successfully.')
                }
            })
    }


    const handleReceivedBtn = (id) => {

        const status = 'Received'
        const user = { id, status };

        const url = `https://mysterious-sands-88815.herokuapp.com/donationList/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status Updated');
                    handleAllDonationClick();
                    statusUpdated();
                }
            })


        const emailById = (id) => {
            fetch(`https://mysterious-sands-88815.herokuapp.com/donationList/${id}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setUserInfo(data)
                        sendEmail(data.email);
                    }
                })
        }

        // if (userInfo.status === 'Received') {
        //     alert('Status already updated')
        // }
        // else {
            emailById(id);
            // sendEmail(userInfo.email);
        // }

    }



    //DonationList Name Search
    let uniqName = [];
    for (let i = 0; i < donation.length; i++) {
        let element = donation[i].name;
        let index = uniqName.indexOf(element);
        if (index === -1) {
            uniqName.push(element);
        }
    }
    console.log(uniqName)


    const handleNameSearch = (e) => {
        setNameSearch(e.target.value);
    }


    const searchByName = () => {
        fetch('https://mysterious-sands-88815.herokuapp.com/donationListName?name=' + nameSearch)
            .then(res => res.json())
            .then(data => {
                if (data[0]) {
                    setNameData(data)
                    setAllDonationStatus(false);
                    setNameStatus(true);
                    setDonateForStatus(false);
                }
            })
    }


    const handleNameClick = () => {
        if (nameSearch === '') {
            alert('Select a name First');
        }
        else {
            searchByName();
        }
    }



    //DonationList DonateFor Search
    let uniqDonateFor = [];
    for (let i = 0; i < donation.length; i++) {
        let element = donation[i].DonationFor;
        let index = uniqDonateFor.indexOf(element);
        if (index === -1) {
            uniqDonateFor.push(element);
        }
    }
    console.log(uniqDonateFor)

    const handleDonationForSearch = (e) => {
        setDonateForSearch(e.target.value)
    }


    const searchByDonateType = () => {
        fetch('https://mysterious-sands-88815.herokuapp.com/donationListDonateFor?donateFor=' + donateForSearch)
            .then(res => res.json())
            .then(data => {
                if (data[0]) {
                    setDonateForData(data)
                    console.log(data)
                    setAllDonationStatus(false);
                    setNameStatus(false);
                    setDonateForStatus(true);
                }
            })
    }


    const handleDonateForClick = () => {
        if (donateForSearch === '') {
            alert('Select a name First');
        }
        else {
            searchByDonateType();
        }
    }



    return (
        <div>
            <Sidebar></Sidebar>

            <div className="mt-3 p-2" style={{ marginLeft: '230px' }}>

                {/* DonationList Name Search Option*/}
                <div className="d-flex">
                    <div className="d-flex" style={{ marginRight: '15%' }}>
                        <select onChange={handleNameSearch} name="donationFor" id="browsers" class="form-control w-50">
                            <option value=""></option>
                            {
                                uniqName.map(uniqName =>
                                    <option value={uniqName}>{uniqName}</option>
                                )
                            }
                        </select>

                        <button onClick={handleNameClick} className="btn btn-primary ms-1">Search by Name</button>
                    </div>


                    {/* DonationList DonationFor Search Option*/}
                    <div className="d-flex">
                        <select onChange={handleDonationForSearch} name="donationFor" id="browsers" class="form-control w-50">
                            <option value=""></option>
                            {
                                uniqDonateFor.map(uniqDonateFor =>
                                    <option value={uniqDonateFor}>{uniqDonateFor}</option>
                                )
                            }
                        </select>

                        <button onClick={handleDonateForClick} style={{ width: '120px' }} className="btn btn-success ms-1">Donate Type</button>
                    </div>

                    <button style={{ marginLeft: '15%' }} onClick={handleAllDonationClick} className="btn btn-info">All Donation</button>
                </div>



                {/* Donation List By Name Search */}
                {nameStatus && <div>
                    <h2 className="ml-5 mb-4 mt-5">Total Donation : {nameData.length}</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Donated For</th>
                                <th scope="col">Donated Time & Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            nameData.map(donation =>
                                <tbody>
                                    <tr>
                                        <th scope="row">{donation.name || donation.email || ''}</th>
                                        <td>{donation.email}</td>
                                        <td><strong>{donation.Amount} Tk</strong></td>
                                        <td>{donation.DonationFor || 'General'}</td>
                                        <td>
                                            {new Date(donation.donationTime).toLocaleTimeString()}
                                            <br />

                                            {new Date(donation.donationTime).toLocaleDateString()}
                                        </td>
                                        <td><strong>{donation.status || 'Pending'}</strong></td>

                                        <td>
                                            {/* <button onClick={() => handlePendingBtn(donation._id)} className="btn btn-primary m-1">Pending</button> */}

                                            {/* <button onClick={() => handleOnGoingBtn(donation._id)} className="btn btn-info m-2">On going</button> */}

                                            <button onClick={() => handleReceivedBtn(donation._id)} className="btn btn-success m-1">Received</button>

                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>}



                {/* Donation List By DonateFor Search */}
                {donateForStatus && <div>
                    <h2 className="ml-5 mb-4 mt-5">Total Donation : {donateForData.length}</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Donated For</th>
                                <th scope="col">Donated Time & Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            donateForData.map(donation =>
                                <tbody>
                                    <tr>
                                        <th scope="row">{donation.name || donation.email || ''}</th>
                                        <td>{donation.email}</td>
                                        <td><strong>{donation.Amount} Tk</strong></td>
                                        <td>{donation.DonationFor || 'General'}</td>
                                        <td>
                                            {new Date(donation.donationTime).toLocaleTimeString()}
                                            <br />

                                            {new Date(donation.donationTime).toLocaleDateString()}
                                        </td>
                                        <td><strong>{donation.status || 'Pending'}</strong></td>

                                        <td>
                                            {/* <button onClick={() => handlePendingBtn(donation._id)} className="btn btn-primary m-1">Pending</button> */}

                                            {/* <button onClick={() => handleOnGoingBtn(donation._id)} className="btn btn-info m-2">On going</button> */}

                                            <button onClick={() => handleReceivedBtn(donation._id)} className="btn btn-success m-1">Received</button>

                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>}



                {/* All Donation List */}
                {allDonationStatus && <div>
                    <h2 className="ml-5 mb-4 mt-5">Total Donation : {donation.length}</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Donated For</th>
                                <th scope="col">Donated Time & Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            donation.map(donation =>
                                <tbody>
                                    <tr>
                                        <th scope="row">{donation.name || donation.email || ''}</th>
                                        <td>{donation.email}</td>
                                        <td><strong>{donation.Amount} Tk</strong></td>
                                        <td>{donation.DonationFor || 'General'}</td>
                                        <td>
                                            {new Date(donation.donationTime).toLocaleTimeString()}
                                            <br />

                                            {new Date(donation.donationTime).toLocaleDateString()}
                                        </td>
                                        <td><strong>{donation.status || 'Pending'}</strong></td>

                                        <td>
                                            {/* <button onClick={() => handlePendingBtn(donation._id)} className="btn btn-primary m-1">Pending</button> */}

                                            {/* <button onClick={() => handleOnGoingBtn(donation._id)} className="btn btn-info m-2">On going</button> */}

                                            <button onClick={() => handleReceivedBtn(donation._id)} className="btn btn-success m-1">Received</button>

                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>}
            </div>
        </div>
    );
};

export default DonationList;
