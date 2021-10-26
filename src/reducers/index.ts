import {combineReducers} from 'redux';
import user from './userReducer';
import products from './productsReducer';

export default combineReducers({
  products,
  user,
});
