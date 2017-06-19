import React, { Component } from 'react';
import API from '../utils/API';
import './TopNav.css';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

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
        let navlink = this.props.user ? <NavItem href="/reckedlists">My ReckLists</NavItem> : 
                    <NavItem href="/auth/google">Login</NavItem>

        return (
            <Navbar right className="topnav">
                <div className="row rightnav">
                    <div className="col s7">
                        <form onSubmit={this.handleSearchResult}>
                            <div className="input-field">
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <input
                                    required 
                                    id="search"
                                    type="search" 
                                    onChange={(e) => this.handleSearchChange(e.target.value)} 
                                    value={this.state.search}
                                    />
                            </div>
                        </form>
                    </div>
                    <div className="col s5">
                        {navlink}
                    </div>
                </div>
            </Navbar>
        );
    }
};

export default TopNav;