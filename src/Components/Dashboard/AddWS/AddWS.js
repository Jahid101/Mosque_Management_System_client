import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import Sidebar from '../Sidebar/Sidebar';

const AddWS = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [receiptImageURL, setReceiptImageURL] = useState(null);
    const [workingImageURL, setWorkingImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();



    const handleSpendingSubmit = (e) => {

        const workingSpending = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            amount: e.target.amount.value,
            spendFor: e.target.spendFor.value,
            details: e.target.details.value || '',
            receiptImageURL: receiptImageURL,
            workingImageURL: workingImageURL,
            time: new Date()
        };

        fetch('https://mysterious-sands-88815.herokuapp.com/addWS', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(workingSpending)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Successfully Submitted')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }


    const handleReceiptImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '737956e4412761b2bafa98f14afe9c86');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setReceiptImageURL(response.data.data.display_url);
                setImageURLStatus(true);
                if (response) {
                    alert('Image Uploaded Successfully')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const handleWorkingImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '737956e4412761b2bafa98f14afe9c86');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setWorkingImageURL(response.data.data.display_url);
                if (response) {
                    alert('Image Uploaded Successfully')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    // Checking Fund Value with event budget
    const [receivedDonation, setReceivedDonation] = useState([]);

    const received = 'Received';


    //Total Donation Amount
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

    //Total Fund
    const totalFund = ((totalDonation + totalOtherDonation) - (totalEventSpending + totalDeletedEventBudget + totalPaidSalary + totalWorkSpending))



    console.log(totalFund)


    return (
        <div>
            {/* <Dashboardpage></Dashboardpage> */}
            <Sidebar></Sidebar>

            <div style={{ marginLeft: '300px' }}>
                <h2 className="mb-3">Work Spending</h2>
                <br />
                <form onSubmit={handleSpendingSubmit}>
                    <h5>Amount</h5>
                    <input type="number" min="1" max={totalFund} class="form-control w-50" placeholder="Amount" name="amount" aria-label="Last name" required />
                    <br />

                    <h5>Spend For</h5>
                    <input type="text" class="form-control w-50" name="spendFor" placeholder="Spend For" aria-label="Last name" required />
                    <br />

                    <h5>Details</h5>
                    <textarea type="text" class="form-control w-50" name="details" placeholder="Details" aria-label="Last name" />
                    <br />

                    <h5>Money receipt</h5>
                    <input type="file" onChange={handleReceiptImageUpload} class="mb-3 form-control w-50" aria-label="Last name" required />
                    <br />

                    <h5>Working Image</h5>
                    <input type="file" onChange={handleWorkingImageUpload} class="mb-3 form-control w-50" aria-label="Last name" required />
                    <br />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    {imageURLStatus ?
                        <input className="btn btn-success mb-3" type="submit" value="Submit" />
                        : ''}
                </form>
            </div>
        </div>
    );
};

export default AddWS;
