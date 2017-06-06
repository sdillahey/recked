import React, { Component } from 'react';
import ReckDisplay from '../components/ReckDisplay';

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
            <div className="col-md-8">
                <h1>{this.props.city.city}</h1>
                <div className="row">
                    <h3>Spotlight:</h3>
                    <ReckDisplay recks={this.props.city.data.spotlights}/>
                </div>
                <div className="row">
                    <h3>Take it to the Streets...</h3>
                    <ReckDisplay recks={this.props.city.data.recks}/>
                </div>
            </div>
        );
    }
};

export default CityPage;