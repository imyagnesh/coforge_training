import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// Middleware
// Async Programing
// Redux-Thunk
// Redux-Saga
// Redux-Observable

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export default store;
