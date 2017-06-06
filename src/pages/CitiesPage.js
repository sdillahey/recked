import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import CitiesList from '../components/CitiesList';
import CityPage from './CityPage';

class CitiesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            city: {}
        }
    }

    componentDidMount() {
        //will need to update to provide the search results - not all cities
        fetch(`/api/cities`)
            .then(res => res.json())
            .then(cities => this.setState({cities}));
    }

        //will need to update to initiate a fetch request if the link was hit through the url ie. no props
    render() {
        return(
            <div>
                <Route exact path='/places/:cityurl' render={() =>
                    <CityPage />
                }/>
                <CitiesList cities={this.state.cities} />
            </div>
        )
    };
}

export default CitiesPage;