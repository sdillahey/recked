import React, { Component } from 'react';

class TopNav extends Component {
    constructor() {
        super();
        this.state = {search: ""}
    }

    handleSearchChange = val => this.setState({search: val.toLowerCase()})

   //NEED TO CHANGE
    handleSearchResult = () => {
        return this.state.search;
    }


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="nav navbar-nav navbar-right">
                        <li><a href="/auth/google">Login</a></li>
                    </div>
                    <form className="navbar-form navbar-right">
                        <div className="form-group">
                            <input type="text" onChange={(e) => this.handleSearchChange(e.target.value)} className="form-control" placeholder="Search City, Country or Region" />
                        </div>
                    </form>
                </div>
            </nav>
        );
    }

};

export default TopNav;