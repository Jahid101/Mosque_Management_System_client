import React from 'react';
import "./PrayerTime.css";

const PrayerTime = () => {

    return (
        <div class="mt-5 prayerTimeBg m-2" id="prayerTime">
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
                            <td>4.10 am<br />IQAMAH: 5:00 AM</td>
                            <td>1.30 pm<br />IQAMAH: 5:00 AM</td>
                            <td>4.50 pm<br />IQAMAH: 5:00 AM</td>
                            <td>6.05 pm<br />IQAMAH: 5:00 AM</td>
                            <td>8.30 pm<br />IQAMAH: 5:00 AM</td>
                            <td>1.20 pm<br />IQAMAH: 5:00 AM</td>
                        </tr>

                    </tbody>
                </table>
            </strong>
        </div>
    );
};

export default PrayerTime;
