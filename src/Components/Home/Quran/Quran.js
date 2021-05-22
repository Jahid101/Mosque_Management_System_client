import React from 'react';
import "./Quran.css";

const Quran = () => {
    
    return (
        <div style={{ height: '750px', color: 'white', padding: '15px' }} className="row mt-3 mb-3 m-2 quran">
            <h1 className="text-center mt-5"><strong>Listen to holy Quran</strong></h1>
            <div className="col-md-6 text-center">
                <h1 className="mt-2">"The word Quran occurs some 70 times in the text itself, and other names and words are also said to refer to the Quran. The Quran is thought by Muslims to be not simply divinely inspired, but the literal word of Allah."</h1>
            </div>

            <div className="col-md-6 text-center quranCardInfo p-5">
                <div>
                    <img className="w-50 rounded" src="https://muslimmatters.org/wp-content/uploads/shutterstock_60478804-e1586745305866.jpg" alt="" />
                    <br />
                    <br />
                    <a href="https://quran.com" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-success btn-lg">Listen</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Quran;
