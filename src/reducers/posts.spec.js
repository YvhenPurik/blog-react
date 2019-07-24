import reducer from './posts';
import * as types from '../actions/types';
import expect from 'expect';

describe('Posts reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            authorName: '',
            data: [],
            users: [],
            currentPost: {},
        });
    });

    it('should handle POST_FILTER_UPDATE', () => {
        const startAction = {
            type: types.POST_FILTER_UPDATE,
            payload: 'Test'
        };

        expect(reducer({}, startAction)).toEqual({
            authorName: 'Test'
        });
    });

    it('should handle POST_LIST_FETCH_START', () => {
        const startAction = {
            type: types.POST_LIST_FETCH_START
        };

        expect(reducer({}, startAction)).toEqual({
            data: [],
            error: undefined,
            loadingList: true
        });
    });

    it('should handle POST_LIST_FETCH_FAIL', () => {
        const startAction = {
            type: types.POST_LIST_FETCH_FAIL,
            payload: {
                message: 'error'
            }
        };

        expect(reducer({}, startAction)).toEqual({
            data: [],
            error: {
                message: 'error'
            },
            loadingList: true
        });
    });

    it('should handle POST_LIST_FETCH_SUCCESS', () => {
        const startAction = {
            type: types.POST_LIST_FETCH_SUCCESS,
            payload: {
                posts: [{id: 1, userId: 1, title: 'Title'}],
                users: [{id: 1, name: 'User'}]
            }
        };

        expect(reducer({}, startAction)).toEqual({
            data: [{author: 'User', id: 1, userId: 1, title: 'Title'}],
            users: [{id: 1, name: 'User'}],
            error: {},
            loadingList: false
        });
    });

    it('should handle POST_DETAILS_FETCH_START', () => {
        const startAction = {
            type: types.POST_DETAILS_FETCH_START
        };

        expect(reducer({}, startAction)).toEqual({
            loadingPost: true,
            currentPost: {}
        });
    });

    it('should handle POST_DETAILS_FETCH_FAIL', () => {
        const startAction = {
            type: types.POST_DETAILS_FETCH_FAIL
        };

        expect(reducer({}, startAction)).toEqual({
            currentPost: {},
            loadingPost: true,
        });
    });

    it('should handle POST_DETAILS_FETCH_SUCCESS', () => {
        const startAction = {
            type: types.POST_DETAILS_FETCH_SUCCESS,
            payload: {
                post: {
                    id: 1, userId: 1, title: 'Title'
                },
                comments: [
                    {id: 1, postId: '1', body: 'Comment'}
                ]
            }
        };

        expect(reducer({users: [{id: 1, name: 'User'}]}, startAction)).toEqual({
            users: [{id: 1, name: 'User'}],
            loadingPost: false,
            currentPost: {
                author: 'User',
                comments: [
                    {id: 1, postId: '1', body: 'Comment'}
                ],
                id: 1, userId: 1, title: 'Title'
            }
        });
    });

    it('should handle POST_COMMENT_ADD_SUCCESS', () => {
        const startAction = {
            type: types.POST_COMMENT_ADD_SUCCESS,
            payload: {
                id: 2, postId: '1', body: 'Comment 2'
            }
        };

        expect(reducer({
            users: [{id: 1, name: 'User'}],
            currentPost: {
                author: 'User',
                comments: [
                    {id: 1, postId: '1', body: 'Comment'}
                ],
                id: 1, userId: 1, title: 'Title'
            }
        }, startAction)).toEqual({
            users: [{id: 1, name: 'User'}],
            currentPost: {
                author: 'User',
                comments: [
                    {id: 1, postId: '1', body: 'Comment'},
                    {id: 2, postId: '1', body: 'Comment 2'}
                ],
                id: 1, userId: 1, title: 'Title'
            }
        });
    });

    it('should handle POST_COMMENT_DELETE_SUCCESS', () => {
        const startAction = {
            type: types.POST_COMMENT_DELETE_SUCCESS,
            payload: 1
        };

        expect(reducer({
            currentPost: {
                author: 'User',
                comments: [
                    {id: 1, postId: '1', body: 'Comment'}
                ],
                id: 1, userId: 1, title: 'Title'
            }
        }, startAction)).toEqual({
            currentPost: {
                author: 'User',
                comments: [],
                id: 1, userId: 1, title: 'Title'
            }
        });
    });

});