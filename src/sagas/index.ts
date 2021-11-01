import {all, fork} from 'redux-saga/effects';
import products from './productsSaga';
import cart from './cartSaga';

export default function* root() {
  yield all([fork(products), fork(cart)]);
}
