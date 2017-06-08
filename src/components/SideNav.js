import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './SideNav.css';
import { MorphIcon } from 'react-svg-buttons';
import API from '../utils/API';
import { Link } from 'react-router-dom';

/*-- needs pagewrapid and containerwrapid if using scale down --*/

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      checked: []
    }
  }

  toggleCheck = (e) => {
    var prevState = this.state.checked.slice();
    if (e.target.checked) {
      prevState.push(e.target.value);
      var newState = prevState;
    } else {
      prevState.splice(prevState.indexOf(e.target.value), 1);
      var newState = prevState;
    }
    this.setState({checked: newState})
  }

  filterCities = (e) => {
    e.preventDefault();
    API.APIfilter(this.state.checked)
        .then(cities => {
            this.props.setCities(cities);
            this.setState({checked: []});
            this.props.history.push('/places');
        })
  }
    


  render () {
    return (
      <Menu pageWrapId={ "page-wrap" } customCrossIcon={<MorphIcon type="crossSparks" size={30} thickness={4} color="#e93737"/>}>
        <h3>Who's Going?</h3>
                <span><input className="searchbox" type="checkbox" name="search-1" value="1" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Girls' Getaway</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="2" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Guys' Trip</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="3" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Squad Deep</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="4" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Baecation</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="5" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Riding Solo</span>
        <h3>Looking For...</h3>
                <span><input className="searchbox" type="checkbox" name="search-1" value="6" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Adventure</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="7" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Beach + Chill</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="8" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Culture</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="9" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Nightlife</span>
        <h3>Anything Else?</h3>
                <span><input className="searchbox" type="checkbox" name="search-1" value="A" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Long Weekend</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="B" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;On a Budget</span>
                <span><input className="searchbox" type="checkbox" name="search-1" value="C" onClick={this.toggleCheck}/>
                &nbsp;&nbsp;Passport Mandatory</span>
                <br />
          <div className="btn btn-default btn-md" onClick={ this.filterCities }>&amp; We're Off</div>
      </Menu>
    );
  }
}

export default SideNav;