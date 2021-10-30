import {
  all,
  call,
  fork,
  put,
  select,
  takeLatest,
} from '@redux-saga/core/effects';
import axiosInstance from '@utils/axiosInstance';

const cartData = state => state.cart.data;

function* loadCart() {
  try {
    console.warn('loadCart');

    // API get Products data
    const res = yield call(axiosInstance.get, '660/cart');
    yield put({type: 'LOAD_CART_SUCCESS', payload: res.data});
  } catch (error) {
    yield put({type: 'LOAD_CART_FAIL', payload: error});
  }
}

function* addToCart({payload}) {
  try {
    console.warn(payload.quantity);

    const cart = yield select(cartData);
    const isItemExist = cart.some(x => x.id === payload.id);
    console.warn('isItemExist', isItemExist);

    let res = null;
    if (isItemExist) {
      if (payload.quantity <= 0) {
        yield call(axiosInstance.delete, `660/cart/${payload.id}`);
        res = {data: payload};
      } else {
        res = yield call(axiosInstance.put, `660/cart/${payload.id}`, payload);
      }
    } else {
      res = yield call(axiosInstance.post, '660/cart', payload);
    }
    yield put({type: 'ADD_TO_CART_SUCCESS', payload: res?.data});
  } catch (error) {
    yield put({type: 'ADD_TO_CART_FAIL', payload: error});
  }
}

function* loadCartRequest() {
  yield takeLatest('LOAD_CART_REQUEST', loadCart);
}

function* addToCartRequest() {
  yield takeLatest('ADD_TO_CART_REQUEST', addToCart);
}

export default function* rootCart() {
  yield all([fork(loadCartRequest), fork(addToCartRequest)]);
}
