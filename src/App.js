import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import CitiesPage from './pages/CitiesPage';
import CityPage from './pages/CityPage';
import LandingPage from './pages/LandingPage';
import ReckedBoard from './pages/ReckedBoard';
import ReckedList from './pages/ReckedList';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        cities: [],
        city: {},
        user: null
    };
  }

  setCity = (idx) => {
      this.setState({city: this.state.cities[idx]})
  }

  setFetchedCity = (city) => {
    this.setState({city});
  }

  setCities = (cities) => {
      this.setState({cities})
  }


  componentDidMount() {
    fetch('/api/me', {
      method: 'get',
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(user => this.setState({user}))
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) =>
              <LandingPage 
                user={this.state.user}
                setCities={this.setCities}
                {...props}/>
            }/>
            <Route path='/places' render={() =>
              <CitiesPage 
                user={this.state.user}
                setCity={this.setCity}
                setFetchedCity={this.setFetchedCity}
                setCities={this.setCities}
                cities={this.state.cities}
                city={this.state.city}/>
            }/>
            <Route exact path='/reckedlists' render={() =>
              <ReckedBoard />
            }/>
            <Route exact path='/reckedlists/:id' render={() =>
              <ReckedList />
            }/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
