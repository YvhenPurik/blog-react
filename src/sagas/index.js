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
  import * as actionType from '../actions/types';
  import { fetchPostsSaga, fetchPostDetailsSaga, addCommentSaga, deleteCommentSaga }  from './posts';
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
  
  


function* watchPosts() {
    yield takeLatest(actionType.POST_LIST_FETCH_START, fetchPostsSaga);
}

function* watchPostDetails() {
    yield takeLatest(actionType.POST_DETAILS_FETCH_START, fetchPostDetailsSaga);
}

function* watchCommentAdd() {
    yield takeLatest(actionType.POST_COMMENT_ADD_START, addCommentSaga);
}

function* watchCommentDelete() {
    yield takeLatest(actionType.POST_COMMENT_DELETE_START, deleteCommentSaga);
}

export function* rootSaga() {
    yield all([
        watchPosts(),
        watchPostDetails(),
        watchCommentAdd(),
        watchCommentDelete(),
    ])
}