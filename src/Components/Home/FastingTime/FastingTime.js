import React, { useEffect, useState } from 'react';
import "./FastingTime.css";


const FastingTime = () => {

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

    let m = prayerTime.MAGRIB + '';
    let mhr = m.substring(0, 2);
    let mmin = m.substring(3, 5);
    let mpp = mhr >= 12 ? "PM" : "AM";
    let mt = mhr > 12 ? mhr % 12 : mhr;



    return (
        <div style={{ color: 'purple' }}>
            <div class="mt-3 mb-3 fastingTimeBg  m-2 p-5">
                <h1 class="text-center"><strong>Fasting Time in Our City</strong></h1>
                <table class="table mt-3">
                    <thead>
                        <tr className="text-center">
                            <th scope="col"><h3>Sehr Time Today:</h3></th>
                            <th scope="col"><h3>Iftar Time Today:</h3></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="text-center" style={{ width: '45%' }}>
                                <strong>{ft}:{fmin} {fpp}</strong>
                                <br />
                                <br />
                                <span className="m-5"><strong>وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ</strong></span>
                                <br />
                                <br />
                                <span><strong>হে আল্লাহ! আমি আগামীকাল পবিত্র রমজানের তোমার পক্ষ থেকে নির্ধারিত ফরজ রোজা রাখার ইচ্ছা পোষণ (নিয়্যত) করলাম। অতএব তুমি আমার পক্ষ থেকে (আমার রোযা তথা পানাহার থেকে বিরত থাকাকে) কবুল কর, নিশ্চয়ই তুমি সর্বশ্রোতা ও সর্বজ্ঞানী।</strong></span>
                                <br />
                                <br />
                                <span><strong>I intend to keep the fast for tomorrow in the month of Ramadan</strong></span>
                                <br />
                                <br />
                                <a href="https://alormela.org/attachments/article/118/Ramadan_Calendar_Sheheri-Ifter_Time_Table.jpg" target="_blank" rel="noopener noreferrer">
                                    <button class="btn btn-success btn-lg">Ramadan Calendar 2021</button>
                                </a>
                            </td>


                            <td className="text-center" style={{ width: '45%' }}>
                                <strong>{mt}:{mmin} {mpp}</strong>
                                <br />
                                <br />
                                <span className="m-5"><strong>اللّٰهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ اٰمَنْتُ وَعَليْكَ تَوَكَّلتُ وَ عَلٰى رِزْقِكَ اَفْطَرْتُ</strong></span>
                                <br />
                                <br />
                                <span><strong>হে আল্লাহ! আমি তোমারই সন্তুষ্টির জন্য রোজা রেখেছি এবং তোমারই দেয়া রিযিক্বের মাধ্যমে ইফতার করছি।</strong></span>
                                <br />
                                <br />
                                <span><strong>O Allah! I fasted for You and I believe in You and I put my trust in You and I break my fast with Your sustenance</strong></span>
                                <br />
                                <br />
                                <br />
                                <a href="#prayerTime" rel="noopener noreferrer">
                                    <button class="btn btn-success btn-lg">Prayer Times</button>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FastingTime;
