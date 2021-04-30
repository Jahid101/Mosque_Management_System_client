import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';

const OrderList = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/orderList')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    const statusUpdated = () => {
        fetch('http://localhost:9999/orderList')
            .then(res => res.json())
            .then(data => setOrder(data))
    }


    const handlePendingBtn = (id) => {

        const status = 'Pending'
        const user = { id, status };

        const url = `http://localhost:9999/updateOrderList/${id}`;
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
                    statusUpdated();
                }
            })
    }


    const handleOnGoingBtn = (id) => {

        const status = 'On going'
        const user = { id, status };

        const url = `http://localhost:9999/updateOrderList/${id}`;
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
                    statusUpdated();
                }
            })
    }


    const handleDoneBtn = (id) => {

        const status = 'Done'
        const user = { id, status };

        const url = `http://localhost:9999/updateOrderList/${id}`;
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
                    statusUpdated();
                }
            })
    }


    return (
        <div>
            <Dashboardpage></Dashboardpage>

            <div className="mt-3" style={{ marginLeft: '250px' }}>
                <h2 className="ml-5 mb-5">Total Ordered List : {order.length}</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        order.map(order =>
                            <tbody>
                                <tr>
                                    <th scope="row">{order.name || order.email}</th>
                                    <td>{order.email}</td>
                                    <td>{order.service}</td>
                                    <td><strong>{order.status}</strong></td>
                                    <td>
                                        <button onClick={() => handlePendingBtn(order._id)} className="btn btn-primary m-2">Pending</button>
                                        <button onClick={() => handleOnGoingBtn(order._id)} className="btn btn-info m-2">On going</button>
                                        <button onClick={() => handleDoneBtn(order._id)} className="btn btn-success m-2">Done</button>
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

export default OrderList;
