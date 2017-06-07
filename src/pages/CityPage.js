import React, { Component } from 'react';
import ReckDisplay from '../components/ReckDisplay';
import { Link, Route, Switch } from 'react-router-dom';
import ReckForm from './ReckForm';

class CityPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.city) {
            fetch(`/api/cities/${this.props.params.cityurl}`)
                .then(res => res.json())
                .then(city => this.setState({city}));
        }
    }


    render() {
        return (
             <Switch>
                <Route exact path='/places/:cityurl' render={() =>
                    <div className="col-md-8 col-md-offset-2">
                        <h1>{this.props.city.city}</h1>
                        <div className="row">
                            <h3>Spotlight:</h3>
                            <ReckDisplay recks={this.props.city.data.spotlights}/>
                        </div>
                        <div className="row">
                            <h3>Take it to the Streets...</h3>
                            <ReckDisplay recks={this.props.city.data.recks}/>
                        </div>
                        <Link to={`/places/${this.props.city.cityurl}/new`}>Add a Reck</Link>
                    </div>
                }/>
                <Route path='/places/:cityurl/new' render={() =>
                    <ReckForm />
                }/>
            </Switch>
        );
    }
};

export default CityPage;