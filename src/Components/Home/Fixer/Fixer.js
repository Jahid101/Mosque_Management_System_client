import React from 'react';
import FixerCard from '../FixerCard/FixerCard';
import './Fixer.css';

const experts = [
    {
        name: "Thor",
        designation: "HARDWARE ENGINEER",
        img: "https://i.pinimg.com/736x/ed/89/c9/ed89c923d11d239965269d9c859e4d62.jpg"
    }, {
        name: "Iron Man",
        designation: "CHIEF ENGINEER",
        img: "https://21tattoo.files.wordpress.com/2010/05/robertdowneyjrironman2a1.jpg"
    }, {
        name: "Captain America",
        designation: "SOFTWARE ENGINEER",
        img: "https://i.pinimg.com/originals/d5/81/79/d58179ac3e5781037d0fbf2bf3a97cdc.jpg"
    }
]

const Fixer = () => {
    return (
        <div>
            <div className="mt-5 fixerBg">
                <h1 className="text-center mb-3 text-light" style={{ color: 'black', fontSize: '55px' }}>OUR EXPERTS</h1>
                <div className="row">
                    {
                        experts.map(expert => <FixerCard  expert ={ expert }></FixerCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Fixer;
