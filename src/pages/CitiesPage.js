import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CitiesList from '../components/CitiesList';
import TopNav from '../components/TopNav';
import CityPage from './CityPage';

class CitiesPage extends Component {
    constructor(props) {
        super(props);
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
                    setCities={this.props.setCities}/>
                <div className="container">
                    <div className="row">
                        <Switch>
                            <Route exact path='/places' render={() =>
                                <CitiesList 
                                    setCity={this.props.setCity}
                                    cities={this.props.cities}
                                />
                            }/>
                            <Route path='/places/:cityurl' render={() =>
                                <CityPage city={this.props.city}/>
                            }/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    };
}

export default CitiesPage;