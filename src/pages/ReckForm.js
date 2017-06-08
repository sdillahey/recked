import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        }).then(res => {
            this.props.history.push(`/places/${this.props.match.params.cityurl}`);
        }).catch(err => {
            console.log('err ', err)
        })
    }


    render() {
        return (
            <div className="container">
                <h3>Name:</h3>
                <input type="text" onChange={this.updateName} value={this.state.name}/>
                <h3>Address:</h3>
                <input type="text" onChange={this.updateAddress} value={this.state.address}/>
                <h3>Type:</h3>
                <select value={this.state.type} onChange={this.handleType} id="type">
                    <option value="activity">activity</option>
                    <option value="restaurant">restaurant</option>
                    <option value="bar">bar</option>
                    <option value="nightclub">nightclub</option>
                    <option value="museum & culture">museum &amp; culture</option>
                    <option value="hotel">hotel</option>
                </select>
                <h3>Description:</h3>
                <textarea className="form-control" style={{"width": 300}} rows="4" onChange={this.updateDescription} value={this.state.description}/>
                <br />
                <br />
                <button className="btn btn-default" onClick={this.handleSubmit}>Add Reck</button>
                <br />
                <Link to={`/places/${this.props.match.params.cityurl}`}>Return to Recks</ Link>
            </div>
        )
    }
}


export default ReckForm;