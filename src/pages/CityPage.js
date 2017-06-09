import React, { Component } from 'react';
import ReckDisplay from '../components/ReckDisplay';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import ReckForm from './ReckForm';

class CityPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!Object.keys(this.props.city).length) {
            fetch(`/api/cities/${this.props.match.match.params.cityurl}`)
                .then(res => res.json())
                .then(city => {
                    this.props.setFetchedCity(city)
            });
        }
    }

    render() {
        return (
             <Switch>
                <Route exact path='/places/:cityurl' render={(props) => {
                    if (!Object.keys(this.props.city).length) {
                        return <p>Loading...</p>
                    } else {
                        return (
                        <div className="col-md-8 col-md-offset-2">
                        <h1>{this.props.city.city}</h1>
                        <div className="row">
                            <h3>Take it to the Streets...</h3>
                            <ReckDisplay 
                                user={this.props.user}
                                recks={this.props.city.data.recks}
                                city={this.props.city}
                                setFetchedCity={this.props.setFetchedCity}
                                {...props}/>
                        </div>
                        <div className="city-buttons">
                        <Link to={'/places'}><button className="btn btn-default citybtn">Back to Search</button></Link>
                        <Link to={`/places/${this.props.city.cityurl}/new`}><button className="btn btn-default citybtn" >Add a Reck</button></Link>
                        </div>
                    </div>
                        )
                    }
                    }
                }/>
                <Route path='/places/:cityurl/new' render={(props) =>
                    {if (this.props.user) <ReckForm {...props} city={this.props.city.city}/>
                    else props.history.push('/auth/google')}
                }/>
            </Switch>
        );
    }
};

export default CityPage;