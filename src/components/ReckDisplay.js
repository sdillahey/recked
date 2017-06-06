import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class ReckDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.recks.map((reck)=> (
                    <div className="col-sm-12 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>{reck.name}</h3>
                                <p>{reck.description}</p>
                                <div style={{"text-align": "center"}}><span onClick="">&nbsp;&dArr;&nbsp;&nbsp;</span>{reck.votecount}<span onClick="">&nbsp;&nbsp;&uArr;&nbsp;</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ReckDisplay;