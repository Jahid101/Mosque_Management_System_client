import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';


const AddPrayerTime = () => {

    const [prayerTime, setPrayerTime] = useState([]);

    const [FAJR, setFAJR] = useState('');
    const [ZUHR, setZUHR] = useState('');
    const [ASR, setASR] = useState('');
    const [MAGRIB, setMAGRIB] = useState('');
    const [ISHA, setISHA] = useState('');
    const [JUMAH, setJUMAH] = useState('');

    useEffect(() => {
        fetch('http://localhost:9999/prayerTime')
            .then(res => res.json())
            .then(data => {
                data.map(data => setPrayerTime(data))
            })
    }, [])

    
    const handleFajrBlur = (e) => {
        setFAJR(e.target.value)
    }

    const handleZuhrBlur = (e) => {
        setZUHR(e.target.value)
    }

    const handleAsrBlur = (e) => {
        setASR(e.target.value)
    }

    const handleMagribBlur = (e) => {
        setMAGRIB(e.target.value)
    }

    const handleIshaBlur = (e) => {
        setISHA(e.target.value)
    }

    const handleJumahBlur = (e) => {
        setJUMAH(e.target.value)
    }

    console.log(FAJR, ZUHR, ASR, MAGRIB, ISHA, JUMAH)


    const newPrayerTime = () => {
        fetch('http://localhost:9999/prayerTime')
            .then(res => res.json())
            .then(data => {
                data.map(data => setPrayerTime(data))
            })
    }

    const handlePrayerTime = (id) => {

        // setFAJR(e.target.FAJR.value)
        // setZUHR(e.target.ZUHR.value)
        // setASR(e.target.ASR.value)
        // setMAGRIB(e.target.MAGRIB.value)
        // setISHA(e.target.ISHA.value)
        // setJUMAH(e.target.JUMAH.value)

        const updatedPrayerTime = { id, FAJR, ZUHR, ASR, MAGRIB, ISHA, JUMAH };

        console.log(updatedPrayerTime)

        const url = `http://localhost:9999/updatePrayerTime/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPrayerTime)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Prayer Time Updated');
                    newPrayerTime();
                }
            })
            // e.preventDefault();
    }


    return (
        <div>
            <div>
                <Dashboardpage></Dashboardpage>
                <div style={{ marginLeft: '300px' }}>
                    <h2 className="mb-4">Update Prayer Time</h2>
                    <br />
                    {/* <form> */}
                    <h5>FAJR</h5>
                    <input type="text" onBlur={handleFajrBlur} class="form-control w-50" name="FAJR" aria-label="First name" defaultValue={prayerTime.FAJR} required />
                    <br />

                    <h5>ZUHR</h5>
                    <input type="text" onBlur={handleZuhrBlur} class="form-control w-50" name="ZUHR" aria-label="Last name" defaultValue={prayerTime.ZUHR} required />
                    <br />

                    <h5>ASR</h5>
                    <input type="text" onBlur={handleAsrBlur} class="form-control w-50" name="ASR" aria-label="Last name" defaultValue={prayerTime.ASR} required />
                    <br />

                    <h5>MAGRIB</h5>
                    <input type="text" onBlur={handleMagribBlur} class="form-control w-50" name="MAGRIB" aria-label="Last name" defaultValue={prayerTime.MAGRIB} required />
                    <br />

                    <h5>ISHA'A</h5>
                    <input type="text" onBlur={handleIshaBlur} class="form-control w-50" name="ISHA" aria-label="Last name" defaultValue={prayerTime.ISHA} required />
                    <br />

                    <h5>JUMAH</h5>
                    <input type="text" onBlur={handleJumahBlur} class="form-control w-50" name="JUMAH" aria-label="Last name" defaultValue={prayerTime.JUMAH} required />
                    <br />

                    <br />
                    <button onClick={() => handlePrayerTime(prayerTime._id)}  className="btn btn-success mb-3">Update</button>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
};

export default AddPrayerTime;
