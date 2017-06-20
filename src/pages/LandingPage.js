import React from 'react';
import SideNav from '../components/SideNav';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    let topnav = props.user ? 
        <nav className="main-nav">
            <ul className="right">
                <li><a className="stampnav" href="#">My ReckLists</a></li>
            </ul>
        </nav> :
    <nav className="main-nav">
        <ul className="right">
            <li><a className="stampnav" href="/auth/google">
                <img src="./img/stamp.png"/>
            </a></li>
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
            </Link>
        </div>
    );
};

export default LandingPage;