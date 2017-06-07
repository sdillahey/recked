import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackGrid, { easings } from 'react-stack-grid';



class CitiesList extends Component {              
    render() {   
        return (
            <div className="col-md-10 col-md-offset-1 col-xs-12">
                <div className="row">
                    <StackGrid columnWidth={300} gutterWidth={25} easing={easings.quadOut}>
                        {this.props.cities.map((city, idx) => (
                            <Link to={`/places/${city.cityurl}`} key={city.cityurl}>
                                <div className="col-md-3" onClick={(e) => this.props.setCity(idx)}>
                                    <img src={city.heximg} alt={city.city} />
                                </div>
                            </ Link>
                         ))}
                    </ StackGrid>
                </div>
            </div>
        );
    }
}

export default CitiesList;