import React from 'react';
import "./PillarsOfIslam.css";

const PillarsOfIslam = () => {
    return (
        <div class="row mt-5 pillarBg ">
            <h1 class="text-center mb-4">The Pillars of Islam</h1>
            <div class="col-md-2 ms-4">
                <img class="w-75" src="https://cdn.iconscout.com/icon/free/png-512/praying-dua-namaz-allah-is-one-faith-in-1-49580.png" alt="" />
                <br />
                <h3 class="mt-2">Shahadah</h3>
                <h5>FAITH</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src="https://cdn.iconscout.com/icon/free/png-512/muslim-prayer-1571196-1330401.png" alt="" />
                <br />
                <h3 class="mt-3">Salah</h3>
                <h5>PRAYER</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src="https://cdn0.iconfinder.com/data/icons/data-devices/614/23_-_Fasting-512.png" alt="" />
                <br />
                <h3 class="mt-3">Sawm</h3>
                <h5>FASTING</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src="https://static.thenounproject.com/png/2621754-200.png" alt="" />
                <br />
                <h3 class="mt-3">Zakat</h3>
                <h5>ALMSGIVING</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src="https://cdn1.iconfinder.com/data/icons/religion-jumpicon-line/32/-_Kabah-Mecca-Hajj-Muslim-Islam-512.png" alt="" />
                <br />
                <h3 class="mt-3">Hajj</h3>
                <h5>PILGRIMAGE</h5>
            </div>
        </div>
    );
};

export default PillarsOfIslam;
