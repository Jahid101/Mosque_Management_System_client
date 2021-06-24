import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
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

    let f = prayerTime.FAJR + '';
    let fhr = f.substring(0, 2);
    let fmin = f.substring(3, 5);
    let fpp = fhr >= 12 ? "PM" : "AM";
    let ft = fhr > 12 ? fhr % 12 : fhr;

    let z = prayerTime.ZUHR + '';
    let zhr = z.substring(0, 2);
    let zmin = z.substring(3, 5);
    let zpp = zhr >= 12 ? "PM" : "AM";
    let zt = zhr > 12 ? zhr % 12 : zhr;

    let a = prayerTime.ASR + '';
    let ahr = a.substring(0, 2);
    let amin = a.substring(3, 5);
    let app = ahr >= 12 ? "PM" : "AM";
    let at = ahr > 12 ? ahr % 12 : ahr;

    let m = prayerTime.MAGRIB + '';
    let mhr = m.substring(0, 2);
    let mmin = m.substring(3, 5);
    let mpp = mhr >= 12 ? "PM" : "AM";
    let mt = mhr > 12 ? mhr % 12 : mhr;

    let i = prayerTime.ISHA + '';
    let ihr = i.substring(0, 2);
    let imin = i.substring(3, 5);
    let ipp = ihr >= 12 ? "PM" : "AM";
    let it = ihr > 12 ? ihr % 12 : ihr;

    let j = prayerTime.JUMAH + '';
    let jhr = j.substring(0, 2);
    let jmin = j.substring(3, 5);
    let jpp = jhr >= 12 ? "PM" : "AM";
    let jt = jhr > 12 ? jhr % 12 : jhr;

let date = new Date().toLocaleDateString();

    return (
        <div class="mt-2 prayerTimeBg m-2" id="prayerTime">
            <h1 class="text-center text-light">Prayer Time</h1>

            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-light fw-bold ms-5 mb-5 mt-3">
                        <span>Time: </span> <br />
                        <Clock className="text-light fw-bold" format={'hh:mm:ss'} ticking={true} timezone={'UTC/GMT'} />
                    </h3>
                </div>

                <div className="col-md-6">
                    <h3 style={{marginLeft: '400px'}} className="text-light fw-bold mb-5 mt-3">
                        <span>Today Date: <br />{date}</span>
                    </h3>
                </div>
            </div>


            <strong>
                <table class="table text-light">
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
                    <tbody style={{ fontSize: '25px' }}>

                        <tr>
                            <td>{ft}:{fmin} {fpp}</td>
                            <td>{zt}:{zmin} {zpp}</td>
                            <td>{at}:{amin} {app}</td>
                            <td>{mt}:{mmin} {mpp}</td>
                            <td>{it}:{imin} {ipp}</td>
                            <td>{jt}:{jmin} {jpp}</td>
                        </tr>

                    </tbody>
                </table>
            </strong>
        </div>
    );
};

export default PrayerTime;
