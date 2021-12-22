import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Home = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        const url = 'https://restcountries.com/v2/all';
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data));
    },[])

    const handleClick = () =>{
        console.log("click add");
    }
    return (
        <div>
            <h4>Total Country {country.length}</h4>
            {
                country.map(user => <Country 
                    handleClick ={handleClick}
                    user={user}></Country>)
            }
        </div>
    );
};

export default Home;