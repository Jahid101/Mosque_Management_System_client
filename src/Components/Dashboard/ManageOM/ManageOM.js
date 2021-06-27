import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import { Link, useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const ManageOM = () => {

    const [OM, setOM] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/OM')
            .then(res => res.json())
            .then(data => setOM(data))
    }, [])


    const deleted = () => {
        fetch('https://mysterious-sands-88815.herokuapp.com/OM')
            .then(res => res.json())
            .then(data => setOM(data))
    }



    const history = useHistory();
    const handleUpdate = (id) => {
        history.push(`/updateOM/${id}`);
    }


    const handleDelete = (id) => {

        fetch(`https://mysterious-sands-88815.herokuapp.com/deleteOM/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Member Deleted successfully');
                    deleted();
                }
            })
    }



    //Total Donation Amount
    const [receivedDonation, setReceivedDonation] = useState([]);

    const received = 'Received';

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/receivedDonation?status=' + received)
            .then(res => res.json())
            .then(data => setReceivedDonation(data))
    }, [received])

    let totalDonation = 0;
    for (let i = 0; i < receivedDonation.length; i++) {
        const element = parseFloat(receivedDonation[i].Amount);
        totalDonation = totalDonation + element;
    }
    console.log(totalDonation);



    //Total PaidSalary Amount
    const [paidSalary, setPaidSalary] = useState([]);

    const salaryStatus = 'Paid';

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/paidSalary?salaryStatus=' + salaryStatus)
            .then(res => res.json())
            .then(data => setPaidSalary(data))
    }, [salaryStatus])

    let totalPaidSalary = 0;
    for (let i = 0; i < paidSalary.length; i++) {
        const element = parseFloat(paidSalary[i].salary);
        totalPaidSalary = totalPaidSalary + element;
    }
    console.log(totalPaidSalary);



    //Others Addition
    const [otherAddition, setOtherAddition] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/otherAdditionList')
            .then(res => res.json())
            .then(data => setOtherAddition(data))
    }, [])

    let totalOtherDonation = 0;
    for (let i = 0; i < otherAddition.length; i++) {
        const elmnt = parseFloat(otherAddition[i].amount);
        totalOtherDonation = totalOtherDonation + elmnt;
    }



    //Event spending
    const [eventSpend, setEventSpend] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/event')
            .then(res => res.json())
            .then(data => setEventSpend(data))
    }, [])

    let totalEventSpending = 0;
    for (let i = 0; i < eventSpend.length; i++) {
        const e = parseFloat(eventSpend[i].eventBudget);
        totalEventSpending = totalEventSpending + e;
    }

    console.log(totalEventSpending)



    //Work spending
    const [workSpend, setWorkSpend] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/WSList')
            .then(res => res.json())
            .then(data => setWorkSpend(data))
    }, [])

    let totalWorkSpending = 0;
    for (let i = 0; i < workSpend.length; i++) {
        const e = parseFloat(workSpend[i].amount);
        totalWorkSpending = totalWorkSpending + e;
    }

    console.log(totalWorkSpending)


    
    //deleted Event budget
    const [deletedEvent, setDeletedEvent] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/deletedEvent')
            .then(res => res.json())
            .then(data => setDeletedEvent(data))
    }, [])

    let totalDeletedEventBudget = 0;
    for (let i = 0; i < deletedEvent.length; i++) {
        const e = parseFloat(deletedEvent[i].eventBudget);
        totalDeletedEventBudget = totalDeletedEventBudget + e;
    }

    console.log(totalDeletedEventBudget)



    //Total Fund
    var totalFund = ((totalDonation + totalOtherDonation) - (totalEventSpending + totalDeletedEventBudget + totalPaidSalary + totalWorkSpending))




    const handleSalaryPending = (id) => {

        const updatedOMSalary = {
            id,
            salaryStatus: 'Pending'
        }

        console.log(updatedOMSalary)

        const url = `https://mysterious-sands-88815.herokuapp.com/paySalary/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedOMSalary)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Salary Pending');
                    deleted();
                }
            })
    }


    const handleSalaryPaid = (id, salary) => {

        if (salary > totalFund) {
            alert('Insufficient Amount in Fund')
        }
        else {

            const updatedOMSalary = {
                id,
                salaryStatus: 'Paid'
            }

            console.log(updatedOMSalary)

            const url = `https://mysterious-sands-88815.herokuapp.com/paySalary/${id}`;
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedOMSalary)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Salary Paid');
                        deleted();
                    }
                })
        }
    }


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

            <div className="mt-3" style={{ marginLeft: '225px' }}>
                <h3 className="ml-5 mb-2">Employee members: {OM.length}</h3>
                <Link to="/addOM">
                    <button style={{ marginLeft: '' }} className="btn btn-info mb-3 mt-3">Add Member</button>
                </Link>

                <Link to="/OM">
                    <button style={{ marginRight: '3%', float: 'right' }} className="btn btn-primary mb-3 mt-3">View all Members</button>
                </Link>

                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Designation</th>
                            {/* <th scope="col">Details</th> */}
                            <th scope="col">Image</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Salary Status</th>
                            {/* <th scope="col">Date & Time</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        OM.map(OM =>
                            <tbody>
                                <tr>
                                    <th scope="row">{OM.name}</th>
                                    <td>{OM.email}</td>
                                    <td>{OM.designation}</td>
                                    {/* <td>{OM.details || 'N/A'}</td> */}
                                    <td>
                                        <img className="" style={{ width: '40px', height: '40px' }} src={OM.imageURL} alt="" />
                                    </td>
                                    <td>{OM.phone}</td>
                                    <td>{OM.salary} Tk</td>
                                    <td><strong>{OM.salaryStatus || 'Pending'}</strong></td>
                                    {/* <td>
                                        {new Date(OM.time).toLocaleTimeString()}
                                        <br />

                                        {new Date(OM.time).toLocaleDateString()}
                                    </td> */}
                                    <td>
                                        <button onClick={() => handleUpdate(OM._id)} className="btn-sm btn-success mt-1">Update</button>

                                        {/* <button onClick={() => handleSalaryPending(OM._id)} className="btn btn-primary ms-1 mt-3">Salary Pending</button> */}

                                        <button onClick={() => handleSalaryPaid(OM._id, OM.salary)} className="btn-sm btn-info ms-1 mt-1">Give Salary</button>

                                        <button onClick={() => handleDelete(OM._id)} className="btn-sm btn-danger ms-1 mt-1">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageOM;
