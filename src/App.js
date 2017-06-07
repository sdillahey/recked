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
        city: {}
    };
  }

  setCity = (idx) => {
      this.setState({city: this.state.cities[idx]})
  }

  setCities = (cities) => {
      this.setState({cities})
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() =>
              <LandingPage />
            }/>
            <Route path='/places' render={() =>
              <CitiesPage 
                setCity={this.setCity}
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
