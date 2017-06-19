import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StackGrid, { easings } from 'react-stack-grid';
import './ReckDisplay.css'

class ReckDisplay extends Component {
    constructor(props) {
        super(props);
    }

    upVote = (id) => {
        if (!this.props.user) return window.location.pathname='/auth/google';
        fetch(`/api/cities/${this.props.match.params.cityurl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({upvote: true, user: this.props.user._id}),
            headers: new Headers({'Content-Type': 'application/json'}),
        }).then(data => {
           return data.json()
            
        }).then(city =>
            this.props.setFetchedCity(city))
        .catch(err => {
            console.log('err', err);
        })
    }

    downVote = (id) => {
        if (!this.props.user) return window.location.pathname='/auth/google';
        fetch(`/api/cities/${this.props.match.params.cityurl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({upvote: false, user: this.props.user._id}),
            headers: new Headers({'Content-Type': 'application/json'}),
        }).then(data => {
           return data.json()
            
        }).then(city =>
            this.props.setFetchedCity(city))
        .catch(err => {
            console.log('err', err);
        })
    }



    render() {
        return (
            <div>
                <StackGrid columnWidth={300} gutterWidth={25} easing={easings.quadOut}>
                    {this.props.recks.map((reck, idx)=> (
                            <div className="card" key={idx}>
                                <div className="card-content">
                                    <span className="card-title">{reck.name}</span>
                                    <p>{reck.description}</p>
                                    <div style={{"text-align": "center"}}><span style={{'cursor': 's-resize'}} onClick={() => this.downVote(reck._id)}>&nbsp;&dArr;&nbsp;&nbsp;</span>{reck.votecount}<span style={{'cursor': 'n-resize'}} onClick={() => this.upVote(reck._id)}>&nbsp;&nbsp;&uArr;&nbsp;</span></div>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                            </div>
                    ))}
                </StackGrid>
            </div>
        )
    }
}

export default ReckDisplay;