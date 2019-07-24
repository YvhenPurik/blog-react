import {all, call, put} from 'redux-saga/effects';
import *  as actionTypes from '../actions/types';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export function* fetchPostsSaga() {
    try {
        const responses = yield all({
            posts: call(fetch, `${baseUrl}/posts`),
            users: call(fetch, `${baseUrl}/users`),
        });

        yield put({
            type: actionTypes.POST_LIST_FETCH_SUCCESS,
            payload: {
                posts: yield responses.posts.json(),
                users: yield responses.users.json()
            }
        });
    } catch (e) {
        yield put({
            type: actionTypes.POST_LIST_FETCH_FAIL,
            payload: e
        });
    }
}

export function* fetchPostDetailsSaga(action) {
    try {
        const responses = yield all({
            post: call(fetch, `${baseUrl}/posts/${action.payload}`),
            comments: call(fetch, `${baseUrl}/comments?postId=${action.payload}`),
        });

        yield put({
            type: actionTypes.POST_DETAILS_FETCH_SUCCESS,
            payload: {
                post: yield responses.post.json(),
                comments: yield responses.comments.json(),
            }
        });
    } catch (e) {
        yield put({
            type: actionTypes.POST_DETAILS_FETCH_FAIL,
            payload: e
        });
    }
}

export function* addCommentSaga(action) {
    try {
        const response = yield call(fetch, `${baseUrl}/comments`, {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        yield put({
            type: actionTypes.POST_COMMENT_ADD_SUCCESS,
            payload: yield response.json()
        });
    } catch (e) {
        yield put({
            type: actionTypes.POST_COMMENT_ADD_FAIL,
            payload: e
        });
    }
}

export function* deleteCommentSaga(action) {
    try {
        yield call(fetch, `${baseUrl}/comments/${action.payload}`, {
            method: 'DELETE'
        });

        yield put({
            type: actionTypes.POST_COMMENT_DELETE_SUCCESS,
            payload: action.payload
        });
    } catch (e) {
        yield put({
            type: actionTypes.POST_COMMENT_DELETE_FAIL,
            payload: e
        });
    }
}