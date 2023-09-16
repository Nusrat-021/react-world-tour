import React from 'react';

const CountryData = (props) => {
    const {country, handleVisited } = props;
    return (
        <div>
            <h4>country data: {country.name.common}</h4>
        </div>
    );
};

export default CountryData;