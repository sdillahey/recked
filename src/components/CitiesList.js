import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackGrid, { easings } from 'react-stack-grid';



class CitiesList extends Component {              
    render() {   
        return (
            <div className="row">
                <br/>
                    <StackGrid columnWidth={300} gutterWidth={25} easing={easings.quadOut}>
                        {this.props.cities.map((city, idx) => (
                            <Link to={`/places/${city.cityurl}`} key={city.cityurl}>
                                <div onClick={(e) => this.props.setCity(idx)}>
                                    <img src={city.heximg} alt={city.city} />
                                </div>
                            </ Link>
                         ))}
                    </ StackGrid>
                </div>
        );
    }
}

export default CitiesList;