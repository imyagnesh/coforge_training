import {combineReducers} from 'redux';
import user from './userReducer';
import products from './productsReducer';
import loading from './loadingReducer';
import error from './errorReducer';
import cart from './cartReducer';

export default combineReducers({
  products,
  user,
  loading,
  error,
  cart,
});
