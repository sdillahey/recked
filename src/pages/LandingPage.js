import React from 'react';
import SideNav from '../components/SideNav';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    let topnav = props.user ? 
        <nav className="navbar">
            <ul className="nav navbar-nav navbar-right">
                <Link to="">
                <li><a className="stampnav" href="#">My ReckLists</a></li>
                </Link>
            </ul>
        </nav> :
    <nav className="navbar">
        <ul className="nav navbar-nav navbar-right">
            <li><a className="stampnav" href="/auth/google">Login</a></li>
        </ul>
    </nav>
    return (
        <div>
            <SideNav {...props} setCities={props.setCities} />
             {topnav}
            <Link to="/">
                <div className="landing-title">
                    recked
                </div>
                <div className="stamp">
                    <img src="https://i.imgur.com/r0FYd6y.png" height="110" width="110"/>
                </div>
            </Link>
        </div>
    );
};

export default LandingPage;