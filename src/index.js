import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import App from './App';

// Refactor for Redux if time - must wrap BrowserRouter with Provider store
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers/index';

// const store = createStore(reducer);

ReactDOM.render((
        <App />
    ), document.getElementById('root'));
