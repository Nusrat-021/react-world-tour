import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

  console.log(country);
  const { name, flags,population,area,cca3 } = country;
  return (
    <div className={`country-container ${visited && 'visited-country'} `}>
      <h4 style={{color: visited ? 'purple' : 'black'}}>Country Name :{name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population} </p>
      <p>Area: {area} </p>
      <p>Code: {cca3} </p>
      <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisited}>{visited ? 'already visited' : 'Want to Visit'}</button>
      <hr />
      <CountryDetail
       country={country}
       handleVisited={handleVisited}
      ></CountryDetail>
    </div>
  );
};

export default Country;
