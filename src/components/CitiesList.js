import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CitiesList extends Component {              
    render() {   
        return (
            <div>
                {this.props.cities.map((city, idx) => (
                    <Link to={`/places/${city.cityurl}`} key={city.cityurl}>
                        <div className="col-md-3" onClick={(e) => this.props.cityClick(idx)}>
                            <img src={city.heximg} alt={city.city} />
                        </div>
                    </ Link>
                ))}
            </div>
        );
    }
}

export default CitiesList;