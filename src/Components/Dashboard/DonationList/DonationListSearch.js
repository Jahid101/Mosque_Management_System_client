import React, { useEffect, useState } from 'react';

const DonationListSearch = () => {

    const [nameSearch, setNameSearch] = useState('');
    const [nameData, setNameData] = useState([]);
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/donationList')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])


    let uniqName = [];
    for (let i = 0; i < donation.length; i++) {
        let element = donation[i].name;
        let index = uniqName.indexOf(element);
        if (index === -1) {
            uniqName.push(element);
        }
    }
    console.log(uniqName)


    const handleNameSearch = (e) => {
        setNameSearch(e.target.value);
        console.log(e.target.value)
    }


    const handleNameClick = () => {
        if (nameSearch === '') {
            alert('Select a name First');
        }
        else {
            fetch('http://localhost:9999/donationListName?name=' + nameSearch)
                .then(res => res.json())
                .then(data => {
                    if (data[0]) {
                        setNameData(data)
                        console.log(data)
                    }
                    else {
                        alert('Not Found')
                    }
                })
        }
    }




    return (
        <div>
            <select onChange={handleNameSearch} name="donationFor" id="browsers" class="form-control w-25">
                <option value=""></option>
                {
                    uniqName.map(uniqName =>
                        <option defaultValue={uniqName[0]} value={uniqName}>{uniqName}</option>
                    )
                }
            </select>

            <button onClick={handleNameClick} className="btn btn-primary">Search by Name</button>
        </div>
    );
};

export default DonationListSearch;
