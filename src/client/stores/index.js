import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import defaultState from './defaultState';

const reducer = combineReducers({
  routing: routerReducer
});

const routingMiddleware = routerMiddleware(browserHistory);

const store = createStore(reducer, defaultState, compose(
  applyMiddleware(thunk, routingMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// window.store = store;
export default store;
