import {
  all,
  call,
  fork,
  put,
  takeLatest,
  select,
  take,
  delay,
} from '@redux-saga/core/effects';
import axiosInstance from '@utils/axiosInstance';

const getPageNumber = state => state.products.page;

function* loadProducts() {
  try {
    const page = yield select(getPageNumber);
    yield delay(3000);
    // API get Products data
    const res = yield call(
      axiosInstance.get,
      `660/products?_page=${page}&_limit=5`,
    );
    yield put({type: 'LOAD_PRODUCTS_SUCCESS', payload: res.data});
  } catch (error) {
    yield put({type: 'LOAD_PRODUCTS_FAIL', payload: error});
  }
}

function* loadProductsRequest() {
  yield takeLatest('LOAD_PRODUCTS_REQUEST', loadProducts);
}

function* loadMoreProducts() {
  yield takeLatest('INCREASE_PAGE', loadProducts);
}

function* refreshProducts() {
  yield takeLatest('RESET_PAGE', loadProducts);
}

export default function* rootProducts() {
  yield all([
    fork(loadProductsRequest),
    fork(loadMoreProducts),
    fork(refreshProducts),
  ]);
}
