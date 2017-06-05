import React, { Component } from 'react';

class TopNav extends Component {


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="nav navbar-nav navbar-right">
                        <li><a href="/auth/google">Login</a></li>
                    </div>
                    <form className="navbar-form navbar-right">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search City, Country or Region" />
                        </div>
                    </form>
                </div>
            </nav>
        );
    }

};

export default TopNav;