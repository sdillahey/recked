import React from 'react';

let cities = ['Barcelona', 'Santiago', 'Chiang Mai'];

const CitiesList = (props) => (
    <div className="col-md-8">
    {cities.map(city => (
        <div>
            {city}
        </div>
    ))}
    </div>
)

export default CitiesList;