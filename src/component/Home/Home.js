import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Country from '../Country/Country';


const Home = () => {
    const [country, setCountry] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        const url = 'https://restcountries.com/v2/all';
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data));
    },[])

    // Button Click Show Details
    const handleClick = (name) =>{
        console.log("click add", name);
        const url = `/country/${name}`
           history.push(url)
    }

    return (
        <div>
            <h4>Total Country {country.length} Show Details click button or name</h4>
            {
                country.map(user => <Country
                    key={user.name} 
                    handleClick ={handleClick}
                    user={user}></Country>)
            }
        </div>
    );
};

export default Home;