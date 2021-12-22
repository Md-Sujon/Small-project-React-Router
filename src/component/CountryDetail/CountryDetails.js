import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import CountryDetailsCard from "../CountryDetailsCard/CountryDetailsCard";

const CountryDetails = () => {
  const { name } = useParams([]);

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      {country.map((pd) => (
        <CountryDetailsCard pd={pd}></CountryDetailsCard>
      ))}

      <Link to="/home">Home</Link>
    </div>
  );
};

export default CountryDetails;
