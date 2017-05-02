import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../src/client/reducers';
import defaultState from './defaultState';

const reducer = combineReducers({
  productList: reducers.productList,
  product: reducers.product,
  currentProduct: reducers.currentProduct
});

const store = createStore(reducer, defaultState, compose(
  applyMiddleware(thunk)
));

export default store;
