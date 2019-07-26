import {all, call, put} from 'redux-saga/effects';
import *  as actionTypes from '../actions/types';
import Unsplash from 'unsplash-js';

  
let accesKey = '85bc4a08d43b18a585646898105be5f2ff6a6d237d9f95e9dcb4e04176038e24'
const baseUrl = 'https://jsonplaceholder.typicode.com';
const randomImg = `https://api.unsplash.com/`;
const autorization = 'https://unsplash.com/oauth/token'


export function* fetchPostsSaga() {
    try {
        const responses = yield all({
            posts: call(fetch, `${baseUrl}/posts`),
            users: call(fetch, `${baseUrl}/users`),
            access: call(fetch, `${autorization}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                    client_id: '85bc4a08d43b18a585646898105be5f2ff6a6d237d9f95e9dcb4e04176038e24',
                    client_secret:'bd6d5e5900bc7b867f63c6ab5a7895577bdae0ed95d5f3f8e05efaab05f0786b',
                    redirect_uri:'urn:ietf:wg:oauth:2.0:oob',
                
            }),
        });

        yield put({
            type: actionTypes.POST_LIST_FETCH_SUCCESS,
            payload: {
                posts: yield responses.posts.json(),
                users: yield responses.users.json(),
                access: yield responses.access.json()
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