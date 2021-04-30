import React from 'react';
import Fixer from '../Fixer/Fixer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Services from '../Services/Services'; 
import PrayerTime from '../PrayerTime/PrayerTime'; 
import Testimonial from '../Testimonial/Testimonial';
import PillarsOfIslam from '../PillarsOfIslam/PillarsOfIslam';
import FastingTime from '../FastingTime/FastingTime';

const Homepage = () => {
    
    return (
        <div>
            <Header></Header>
            <PrayerTime></PrayerTime>
            <PillarsOfIslam></PillarsOfIslam>
            <FastingTime></FastingTime>
            <Services></Services>
            <Fixer></Fixer>
            <Product></Product>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
