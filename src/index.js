import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ), document.getElementById('root'));
