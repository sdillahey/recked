import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CitiesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            city: {}
        }
    }

    componentDidMount() {
        //will need to update with search results
        fetch(`/api/cities`)
            .then(res => res.json())
            .then(cities => this.setState({cities}));
    }

    render() {
        return(
            <div className="col-md-8">
                {this.state.cities.map(city => (
                    <Link to={`/places/${city.cityurl}`}>
                         <div className="col-md-3">
                            <img src={city.hexurl} alt={city.name} />
                        </div>
                    </ Link>
                 ))}
            </div>
        )
    };
}

export default CitiesPage;