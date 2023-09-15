import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const[visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  const handleVisitedCountries = (country) => {
    console.log('add this to your visited country');
    console.log(country);
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Countries</h5>
        <ul>
            <li></li>
        </ul>
      </div>
      <div className="countries-container">
        {
            countries.map(country => <Country country={country}
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;