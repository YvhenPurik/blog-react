import {
    put,
    takeEvery,
    all,
    call,
    delay,
    takeLatest,
    select,
    take,
    fork
  } from 'redux-saga/effects';
  
  export function* helloSaga() {
    console.log('hello world');
  }
  
  export function* incrementAsync() {
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
  }
  
  export function* watchIncrementAsync() {
    yield takeLatest('INCREMENT_ASYNNC', incrementAsync);
  }
  
  export function* test() {
    while (true) {
      console.log('enter');
      const state = yield select(state => state);
      console.log(state, ' before take');
      yield take('log_out');
      console.log(state, 'after take');
    }
  }
  
  export default function* rootSaga() {
    // yield all([helloSaga(), watchIncrementAsync()]);
    // yield fork(test);
  
    yield fork(helloSaga);
    yield fork(watchIncrementAsync);
    yield fork(test);
  }