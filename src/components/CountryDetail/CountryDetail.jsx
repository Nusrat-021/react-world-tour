import React from "react";
import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    const { country, handleVisited } = props;
  return (
    <div>
      <h4>Country Detail</h4>
      <hr />
      {/* <CountryData
        country={country}
        handleVisited={handleVisited}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
