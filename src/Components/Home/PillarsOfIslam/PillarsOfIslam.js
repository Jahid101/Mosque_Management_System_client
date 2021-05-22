import React from 'react';
import Shahadah from '../../../images/sahadah.png';
import Salah from '../../../images/salah.webp';
import Sawm from '../../../images/sawm.webp';
import Zakat from '../../../images/zakat.png';
import Hajj from '../../../images/hajj.webp';
import "./PillarsOfIslam.css";

const PillarsOfIslam = () => {
    return (
        <div class="row mt-2 pillarBg ">
            <h1 class="text-center mb-4">The Pillars of Islam</h1>
            <div class="col-md-2 ms-4">
                <img class="w-75" src={Shahadah} alt="" />
                <br />
                <h3 class="mt-2">Shahadah</h3>
                <h5>FAITH</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src={Salah} alt="" />
                <br />
                <h3 class="mt-3">Salah</h3>
                <h5>PRAYER</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src={Sawm} alt="" />
                <br />
                <h3 class="mt-3">Sawm</h3>
                <h5>FASTING</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src={Zakat} alt="" />
                <br />
                <h3 class="mt-3">Zakat</h3>
                <h5>ALMSGIVING</h5>
            </div>
            <div class="col-md-2 ms-4">
                <img class="w-75" src={Hajj} alt="" />
                <br />
                <h3 class="mt-3">Hajj</h3>
                <h5>PILGRIMAGE</h5>
            </div>
        </div>
    );
};

export default PillarsOfIslam;
