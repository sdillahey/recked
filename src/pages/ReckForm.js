import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Input} from 'react-materialize';

class ReckForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            type: "activity",
            description: ""
        }
    }

    updateName = (e) => {
        this.setState({name: e.target.value})
    }

    updateAddress = (e) => {
        this.setState({address: e.target.value})
    }

    updateDescription = (e) => {
        this.setState({description: e.target.value})
    }

    handleType = (e) => {
        this.setState({type: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newReck = {};
        newReck.name = this.state.name;
        newReck.address = this.state.address;
        newReck.type = this.state.type;
        newReck.votecount = 0;
        newReck.description = this.state.description;
        fetch(`/api/cities/${this.props.match.params.cityurl}`, {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(newReck)
        }).then(res => res.json())
            .then(city => {
            this.props.setFetchedCity(city);
            this.props.history.push(`/places/${this.props.match.params.cityurl}`);
        }).catch(err => {
            console.log('err ', err)
        })
    }
 
    componentDidMount() {
        if (!this.props.user) window.location.pathname="/auth/google";
    }

    render() {
        return (
            <div className="row container">
                <div className="col s12 m6">
                    <div className="input-field">
                        <input type="text" onChange={this.updateName} value={this.state.name} id="name"/>
                        <label for="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" onChange={this.updateAddress} value={this.state.address} id="address"/>
                        <label for="address">Address</label>
                    </div>
                    <Row>
                        <Input value={this.state.type} onChange={this.handleType} s={6} type='select' label="Type">
                            <option value="activity">activity</option>
                            <option value="restaurant">restaurant</option>
                            <option value="bar">bar</option>
                            <option value="nightclub">nightclub</option>
                            <option value="museum & culture">museum &amp; culture</option>
                            <option value="hotel">hotel</option>
                        </Input>
                    </Row>
                    <Row>
                    <div className="input-field col m6">
                        <textarea className="materialize-textarea" style={{"width": 600}} rows="4" onChange={this.updateDescription} value={this.state.description} id="description"/>
                        <label for="description">Description</label>
                    </div>
                    </Row>
                <br />
                <br />
                <button className="btn btn-default" onClick={this.handleSubmit}>Add Reck</button>&nbsp;&nbsp;&nbsp;
                <Link to={`/places/${this.props.match.params.cityurl}`}><button className="btn btn-default">Return to Recks</button></ Link>
                </div>
            </div>
        )
    }
}


export default ReckForm;