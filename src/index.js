import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import publishersReducer from './reducers/publishersReducer';
import gamesReducer from './reducers/gamesReducer';


import App from './App';

const rootReducer = combineReducers({
  publishers: publishersReducer,
  games: gamesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
console.log(store.getState());
ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
