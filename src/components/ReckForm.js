import React, { Component } from 'react';

class ReckForm extends Component {
    constructor() {
        super();
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

    handleSubmit = () => {
        let newReck = {};
        newReck.name = this.state.name;
        newReck.address = this.state.address;
        newReck.description = this.state.description;
    }

    return (
      <div>
        <h3>Name:</h3>
        <input type="text" onChange={this.updateName} value={this.state.name}/>
        <h3>Address:</h3>
        <input type="text" onChange={this.updateName} value={this.state.name}/>
        <h3>Description:</h3>
        <input type="textarea" onChange={this.updateName} value={this.state.name}/>
          
        <button onClick={this.handleSubmit}>Add Reck</button>
      )
    )
  },
});