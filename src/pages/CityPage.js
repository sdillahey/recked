import React, { Component } from 'react';

class CityPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(`/api/cities/${this.props.params.cityurl}`)
            .then(res => res.json())
            .then(city => this.setState({city}));
    }

    render() {
        return (
            <div>
                {this.state.city.name}
            </div>
        );
    }
};

export default CityPage;