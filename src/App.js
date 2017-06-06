import React, { Component } from 'react';
import TopNav from './components/TopNav';
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

  render() {
    return (
      <div>
        <TopNav />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() =>
              <LandingPage />
            }/>
            <Route path='/places' render={() =>
              <CitiesPage />
            }/>
            <Route exact path='/reckedlists' render={() =>
              <ReckedBoard />
            }/>
            <Route exact path='/reckedlists/:id' render={() =>
              <ReckedList />
            }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
