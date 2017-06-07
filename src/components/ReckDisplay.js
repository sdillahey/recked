import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StackGrid, { easings } from 'react-stack-grid';

class ReckDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <StackGrid columnWidth={300} gutterWidth={25} easing={easings.quadOut}>
                    {this.props.recks.map((reck)=> (
                            <div className="thumbnail">
                                <div className="caption">
                                    <h3>{reck.name}</h3>
                                    <p>{reck.description}</p>
                                    <div style={{"text-align": "center"}}><span onClick="">&nbsp;&dArr;&nbsp;&nbsp;</span>{reck.votecount}<span onClick="">&nbsp;&nbsp;&uArr;&nbsp;</span></div>
                                </div>
                            </div>
                    ))}
                </StackGrid>
            </div>
        )
    }
}

export default ReckDisplay;