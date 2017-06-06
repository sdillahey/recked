import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
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

    cityClick = (idx) => {
        this.setState({city: this.state.cities[idx]})
    }
/*--
    upVote = (idx) => {
        this.setState{{city.data.recks[idx].votecount}: ++ 1}
    }

    downVote = (idx) => {
        this.setState{{city.data.recks[idx].votecount}: ++ 1}
    }
--*/
    
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
                <div className="container">
                    <div className="row">
                        <Switch>
                            <Route exact path='/places' render={() =>
                                <CitiesList 
                                    cityClick={this.cityClick}
                                    cities={this.state.cities}
                                />
                            }/>
                            <Route path='/places/:cityurl' render={() =>
                                <CityPage city={this.state.city}/>
                            }/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    };
}

export default CitiesPage;