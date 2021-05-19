import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import publisherReducer from './reducers/publisherReducer';


import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(publisherReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
