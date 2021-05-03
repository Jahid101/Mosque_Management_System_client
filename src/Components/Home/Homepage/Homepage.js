import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PrayerTime from '../PrayerTime/PrayerTime'; 
import Testimonial from '../Testimonial/Testimonial';
import PillarsOfIslam from '../PillarsOfIslam/PillarsOfIslam';
import FastingTime from '../FastingTime/FastingTime';
import Donation from '../Donation/Donation';
import Quran from '../Quran/Quran';
import Event from '../Event/Event';
import Announcement from '../Announcement/Announcement';

const Homepage = () => {
    
    return (
        <div>
            <Header></Header>
            <PrayerTime></PrayerTime>
            <PillarsOfIslam></PillarsOfIslam>
            <Event></Event>
            <Donation></Donation>
            <Announcement></Announcement>
            <FastingTime></FastingTime>
            <Quran></Quran>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
