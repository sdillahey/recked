import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CitiesList extends Component {              
    render() {   
        return (
            <div className="col-md-8">
                {this.props.cities.map(city => (
                    <Link to={`/places/${city.cityurl}`}>
                        <div className="col-md-3">
                            <img src={city.hexurl} alt={city.city} />
                        </div>
                    </ Link>
                ))}
            </div>
        );
    }
}

export default CitiesList;