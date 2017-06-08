import React from 'react';
import SideNav from '../components/SideNav';

const LandingPage = (props) => {
    return (
        <div >
            <SideNav {...props} setCities={props.setCities} />
            <div id="page-wrap" style={{"text-align": "center"}}>
                Recked
            </div>
        </div>
    );
};

export default LandingPage;