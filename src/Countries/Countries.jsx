import { useEffect } from "react";
import { useState } from "react";
import "./Countries.css";

import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleDeleteVisitedCountries=(country)=>{
     const deleteVisitedCountries=visitedCountries.filter((visitedCountry)=>(visitedCountry.cca3!==country.cca3));
     setVisitedCountries(deleteVisitedCountries);
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Total Countries:{countries.length}</h3>
      {visitedCountries
    .filter(
      (country, index, self) =>
        index === self.findIndex((c) => c.name.common === country.name.common)
    )
    .map((country) => (
      <li key={country.cca3}>
        {country.name.common}
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => handleDeleteVisitedCountries(country)}
          style={{ marginTop: 10 }}
        >
          Delete
        </button>
      </li>
    ))}

     
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitCountries={handleVisitCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
