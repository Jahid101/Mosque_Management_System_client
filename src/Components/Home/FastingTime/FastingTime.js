import React from 'react';
import "./FastingTime.css";


const FastingTime = () => {

    return (
        <div>
            <div class="mt-5 fastingTimeBg  m-2 p-5">
                <h1 class="text-center text-dark"><strong>Fasting Time in Our City</strong></h1>
                <table class="table mt-3 text-dark">
                    <thead>
                        <tr className="text-center">
                            <th scope="col"><h3>Sehr Time Today:</h3></th>
                            <th scope="col"><h3>Iftar Time Today:</h3></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="text-center" style={{ width: '45%' }}><strong>4.10 am</strong>
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
                                <a href="https://alormela.org/general/118-ramadan-calendar" target="_blank" rel="noopener noreferrer">
                                    <button class="btn btn-success btn-lg">Ramadan Calendar 2021</button>
                                </a>
                            </td>


                            <td className="text-center" style={{ width: '45%' }}><strong>6.30 pm</strong>
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
