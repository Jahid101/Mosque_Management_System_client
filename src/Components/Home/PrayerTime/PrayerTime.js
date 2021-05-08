import React, { useEffect, useState } from 'react';
import "./PrayerTime.css";

const PrayerTime = () => {

    const [prayerTime, setPrayerTime] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/prayerTime')
            .then(res => res.json())
            .then(data => {
                data.map(data => setPrayerTime(data))
            })
    }, [])

    return (
        <div class="mt-2 prayerTimeBg m-2" id="prayerTime">
            <h1 class="text-center text-light">Prayer Time</h1>
            <strong>
                <table class="table mt-3 text-light">
                    <thead>
                        <tr>
                            <th scope="col">FAJR</th>
                            <th scope="col">ZUHR</th>
                            <th scope="col">ASR</th>
                            <th scope="col">MAGRIB</th>
                            <th scope="col">ISHA'A</th>
                            <th scope="col">JUMAH</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{prayerTime.FAJR}</td>
                            <td>{prayerTime.ZUHR}</td>
                            <td>{prayerTime.ASR}</td>
                            <td>{prayerTime.MAGRIB}</td>
                            <td>{prayerTime.ISHA}</td>
                            <td>{prayerTime.JUMAH}</td>
                        </tr>

                    </tbody>
                </table>
            </strong>
        </div>
    );
};

export default PrayerTime;
