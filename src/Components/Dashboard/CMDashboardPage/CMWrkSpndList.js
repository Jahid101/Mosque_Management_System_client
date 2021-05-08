import React, { useEffect, useState } from 'react';
import CMDashboard from '../CMDashboard/CMDashboard';


const CMWrkSpndList = () => {

    const [WS, setWS] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/WSList')
            .then(res => res.json())
            .then(data => setWS(data))
    }, [])

    

    return (
        <div>

            <CMDashboard></CMDashboard>

            <div className="mt-3 p-2" style={{ marginLeft: '225px' }}>
                <h2 className="ml-5 mb-5">Work Spending List : {WS.length}</h2>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Email</th> */}
                            <th scope="col">Details</th>
                            <th scope="col">Money Receipt</th>
                            <th scope="col">Working Image</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Spend For</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    {
                        WS.map(WS =>
                            <tbody>
                                <tr>
                                    <th scope="row">{WS.name || WS.email || ''}</th>
                                    {/* <td>{WS.email}</td> */}
                                    <td>{WS.details}</td>
                                    <td>
                                        <img className="" style={{ width: '70px', height: '50px' }} src={WS.receiptImageURL} alt="" />
                                    </td>

                                    <td>
                                        <img className="" style={{ width: '70px', height: '50px' }} src={WS.workingImageURL} alt="" />
                                    </td>

                                    <td><strong>{WS.amount} Tk</strong></td>
                                    <td>{WS.spendFor || 'N/A'}</td>
                                    <td>
                                        {/* {new Date(WS.time).toLocaleTimeString()}
                                        <br /> */}

                                        {new Date(WS.time).toLocaleDateString()}
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

export default CMWrkSpndList;
