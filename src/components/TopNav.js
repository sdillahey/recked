import React, { Component } from 'react';
import API from '../utils/API';
import './TopNav.css';
import { Link } from 'react-router-dom';

class TopNav extends Component {
    constructor() {
        super();
        this.state = {search: ""}
    }

    handleSearchChange = val => this.setState({search: val.toLowerCase()})

    handleSearchResult = (e) => {
        e.preventDefault();
        API.APIsearch(this.state.search)
            .then(cities => {
                this.props.setCities(cities);
                this.setState({search: ""});
                // change 'view' to /places using the history object
            })
    }


    render() {
        let nav = this.props.user ? <li><a href="/reckedlists">My ReckLists</a></li> : 
                    <li><a href="/auth/google">Login</a></li>

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="nav navbar-nav navbar-right">
                        {nav}
                    </div>
                    <form onSubmit={this.handleSearchResult} className="navbar-form navbar-right">
                        <div className="form-group">
                            <input 
                                type="text" 
                                onChange={(e) => this.handleSearchChange(e.target.value)} 
                                className="form-control" 
                                placeholder="Search by City, Country or Region" 
                                value={this.state.search}
                                style={{"width": "300"}} />
                        </div>
                        <button type="submit" className="btn btn-default btn-sm">Search</button>
                    </form>
                </div>
            </nav>
        );
    }

};

export default TopNav;