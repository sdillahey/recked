import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CitiesList from '../components/CitiesList';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import CityPage from './CityPage';

class CitiesPage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        //will need to update to provide the search results - not all cities
        if (!this.props.cities.length)
            fetch(`/api/cities`)
                .then(res => res.json())
                .then(cities => this.props.setCities(cities));
    }

        //will need to update to initiate a fetch request if the link was hit through the url ie. no props
    render() {
        return(
            <div>
                <TopNav 
                    setCities={this.props.setCities}
                    user={this.props.user}/>
                        <Switch>
                            <Route exact path='/places' render={() =>
                                <CitiesList 
                                    setCity={this.props.setCity}
                                    cities={this.props.cities}
                                />
                            }/>
                            <Route path='/places/:cityurl' render={(match) =>
                                <CityPage 
                                    city={this.props.city}
                                    setFetchedCity={this.props.setFetchedCity}
                                    match={match}
                                    user={this.props.user}/>
                            }/>
                        </Switch>
            </div>
        )
    };
}

export default CitiesPage;