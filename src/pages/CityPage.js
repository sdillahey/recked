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
                                recks={this.props.city.data.recks}
                                city={this.props.city}
                                setFetchedCity={this.props.setFetchedCity}
                                {...props}/>
                        </div>
                        <Link className="btn" to={`/places/${this.props.city.cityurl}/new`}>Add a Reck</Link>
                        <Link className="btn" to={'/places'}>Back to Search</Link>
                    </div>
                        )
                    }
                    }
                }/>
                <Route path='/places/:cityurl/new' render={(props) =>
                    {this.props.user ?
                    <ReckForm {...props} city={this.props.city.city}/> :
                    <Redirect to='/auth/google' />}
                }/>
            </Switch>
        );
    }
};

export default CityPage;