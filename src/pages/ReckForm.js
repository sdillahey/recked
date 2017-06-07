import React, { Component } from 'react';

class ReckForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
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

    handleSubmit = (e) => {
        e.preventDefault();
        let newReck = {};
        newReck.name = this.state.name;
        newReck.address = this.state.address;
        newReck.type = //HOW
        newReck.description = this.state.description;
        //push the newReck into the props.city.data.recks array
    }


    render() {
        return (
            <div>
                <h3>Name:</h3>
                <input type="text" onChange={this.updateName} value={this.state.name}/>
                <h3>Address:</h3>
                <input type="text" onChange={this.updateAddress} value={this.state.address}/>
                <h3>Type:</h3>
                <select  id="type">
                    <option>activity</option>
                    <option>restaurant</option>
                    <option>bar</option>
                    <option>nightclub</option>
                    <option>museum &amp; culture</option>
                    <option>hotel</option>
                </select>
                <h3>Description:</h3>
                <textarea className="form-control" style={{"width": 300}} rows="4" onChange={this.updateDescription} value={this.state.description}/>
                <br />
                <br />
                <button className="btn btn-default" onClick={this.handleSubmit}>Add Reck</button>
            </div>
        )
    }
}


export default ReckForm;