import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StackGrid, { easings } from 'react-stack-grid';
import './ReckDisplay.css'

class ReckDisplay extends Component {
    constructor(props) {
        super(props);
    }



    upVote = (idx) => {
        let currentCount = this.props.recks[idx].votecount;
        let newCount = ++currentCount;
        let updatedRecks = this.props.recks.slice();
        updatedRecks[idx].votecount = newCount;
        fetch(`/api/cities/${this.props.match.params.cityurl}`, {
            method: 'PUT',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(updatedRecks)
        }).then(data => {
           return data.json()
            
        }).then(city =>
            this.props.setFetchedCity(city))
        .catch(err => {
            console.log('err', err);
        })
    }

    downVote = (idx) => {
        let currentCount = this.props.recks[idx].votecount
        let newCount = --currentCount;
        let updatedRecks = this.props.recks.slice();
        updatedRecks[idx].votecount = newCount;
        fetch(`/api/cities/${this.props.match.params.cityurl}`, {
            method: 'PUT',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(updatedRecks)
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
                            <div className="thumbnail" key={idx}>
                                <div className="caption">
                                    <h2>{reck.name}</h2>
                                    <p>{reck.description}</p>
                                    <div style={{"text-align": "center"}}><span style={{'cursor': 's-resize'}} onClick={() => this.downVote(idx)}>&nbsp;&dArr;&nbsp;&nbsp;</span>{reck.votecount}<span style={{'cursor': 'n-resize'}} onClick={() => this.upVote(idx)}>&nbsp;&nbsp;&uArr;&nbsp;</span></div>
                                </div>
                            </div>
                    ))}
                </StackGrid>
            </div>
        )
    }
}

export default ReckDisplay;