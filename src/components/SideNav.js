import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './SideNav.css';
import { MorphIcon } from 'react-svg-buttons';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Input } from 'react-materialize';

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
      <Menu className="sidenav" customCrossIcon={<MorphIcon type="crossSparks" size={30} thickness={4} color="#e93737"/>}>
        <h3>Who's Going?</h3>
          <Input type="checkbox" className="filled-in" label="Girls' Getaway" value="1" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Guys' Trip" value="2" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Squad Deep" value="3" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Baecation" value="4" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Riding Solo" value="5" onClick={this.toggleCheck} />
        <h3>Looking For...</h3>
          <Input type="checkbox" className="filled-in" label="Adventure" value="6" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Beach + Chill" value="7" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Culture" value="8" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Nightlife" value="9" onClick={this.toggleCheck} />
        <h3>Anything Else?</h3>
          <Input type="checkbox" className="filled-in" label="Long Weekend" value="A" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="On a Budget" value="B" onClick={this.toggleCheck} />
          <Input type="checkbox" className="filled-in" label="Passport Mandatory" value="C" onClick={this.toggleCheck} />
          <div className="btn btn-default btn-md" onClick={ this.filterCities }>&amp; We're Off</div>
      </Menu>
    );
  }
}

export default SideNav;