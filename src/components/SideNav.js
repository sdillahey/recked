import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './SideNav.css';
import { MorphIcon } from 'react-svg-buttons';

/*-- needs pagewrapid and containerwrapid if using scale down --*/

class SideNav extends Component {

  filterCities = (e) => {
    e.preventDefault();
  }

  render () {
    return (
      <Menu pageWrapId={ "page-wrap" } customCrossIcon={<MorphIcon type="crossSparks" size={30} thickness={4} color="#e93737"/>}>
        <h3>Who's Going?</h3>
                <span><input className="searchbox" type="checkbox" name="search-1" value="1"/>
                &nbsp;&nbsp;Girls' Getaway</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="2"/>
                &nbsp;&nbsp;Guys' Trip</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="3"/>
                &nbsp;&nbsp;Squad Deep</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="4"/>
                &nbsp;&nbsp;Baecation</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="5"/>
                &nbsp;&nbsp;Riding Solo</span>
        <h3>Looking For...</h3>
                <span><input className="searchbox" type="checkbox" name="search-1" value="6"/>
                &nbsp;&nbsp;Adventure</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="7"/>
                &nbsp;&nbsp;Beach + Chill</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="8"/>
                &nbsp;&nbsp;Culture</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="9"/>
                &nbsp;&nbsp;Nightlife</span>
        <h3>Anything Else?</h3>
                <span><input className="searchbox" type="checkbox" name="search-1" value="A"/>
                &nbsp;&nbsp;Long Weekend</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="B"/>
                &nbsp;&nbsp;On a Budget</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="C"/>
                &nbsp;&nbsp;Passport Mandatory</span>
                <br />
        <button className="btn btn-default btn-md" onClick={ this.filterCities }>& We're Off</button>
      </Menu>
    );
  }
}

export default SideNav;