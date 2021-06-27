import React, { useEffect, useState } from 'react';
import Dashboardpage from '../Dashboardpage/Dashboardpage';
import Sidebar from '../Sidebar/Sidebar';


const AddPrayerTime = () => {

    const [prayerTime, setPrayerTime] = useState([]);

    const [FAJR, setFAJR] = useState('');
    const [ZUHR, setZUHR] = useState('');
    const [ASR, setASR] = useState('');
    const [MAGRIB, setMAGRIB] = useState('');
    const [ISHA, setISHA] = useState('');
    const [JUMAH, setJUMAH] = useState('');

    useEffect(() => {
        fetch('https://mysterious-sands-88815.herokuapp.com/prayerTime')
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
        fetch('https://mysterious-sands-88815.herokuapp.com/prayerTime')
            .then(res => res.json())
            .then(data => {
                data.map(data => setPrayerTime(data))
            })
    }

    const handlePrayerTime = (id) => {

        const updatedPrayerTime = {
            id,
            FAJR: FAJR || prayerTime.FAJR,
            ZUHR: ZUHR || prayerTime.ZUHR,
            ASR: ASR || prayerTime.ASR,
            MAGRIB: MAGRIB || prayerTime.MAGRIB,
            ISHA: ISHA || prayerTime.ISHA,
            JUMAH: JUMAH || prayerTime.JUMAH
        };

        console.log(updatedPrayerTime)

        const url = `https://mysterious-sands-88815.herokuapp.com/updatePrayerTime/${id}`;
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

    const handlePrayerTimeSubmit = (e) => {
        e.preventDefault();
    } 


    return (
        <div>
            <div>
                {/* <Dashboardpage></Dashboardpage> */}
                <Sidebar></Sidebar>
                
                <div style={{ marginLeft: '300px' }}>
                    <h2 className="mb-4">Update Prayer Time</h2>
                    <br />
                    <form onSubmit={handlePrayerTimeSubmit}>
                    <h5>FAJR</h5>
                    <input type="time" onBlur={handleFajrBlur} class="form-control w-50" name="FAJR" aria-label="First name" autoFocus defaultValue={prayerTime.FAJR} required />
                    <br />

                    <h5>ZUHR</h5>
                    <input type="time" onBlur={handleZuhrBlur} class="form-control w-50" name="ZUHR" aria-label="Last name" defaultValue={prayerTime.ZUHR} required />
                    <br />

                    <h5>ASR</h5>
                    <input type="time" onBlur={handleAsrBlur} class="form-control w-50" name="ASR" aria-label="Last name" defaultValue={prayerTime.ASR} required />
                    <br />

                    <h5>MAGRIB</h5>
                    <input type="time" onBlur={handleMagribBlur} class="form-control w-50" name="MAGRIB" aria-label="Last name" defaultValue={prayerTime.MAGRIB} required />
                    <br />

                    <h5>ISHA'A</h5>
                    <input type="time" onBlur={handleIshaBlur} class="form-control w-50" name="ISHA" aria-label="Last name" defaultValue={prayerTime.ISHA} required />
                    <br />

                    <h5>JUMAH</h5>
                    <input type="time" onBlur={handleJumahBlur} class="form-control w-50" name="JUMAH" aria-label="Last name" defaultValue={prayerTime.JUMAH} required />
                    <br />

                    <br />
                    <button onClick={() => handlePrayerTime(prayerTime._id)} className="btn btn-success mb-3">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPrayerTime;
