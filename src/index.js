import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import App from './components/App';

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));