import * as actionTypes from './types';

export const fetchPosts = () => {
    return {
        type: actionTypes.POST_LIST_FETCH_START,
    };
};

export const updateAuthorFilter = (author) => {
    return {
        type: actionTypes.POST_FILTER_UPDATE,
        payload: author
    };
};

export const fetchPostDetails = (id) => {
    return {
        type: actionTypes.POST_DETAILS_FETCH_START,
        payload: id
    };
};

export const addComment = (comment) => {
    return {
        type: actionTypes.POST_COMMENT_ADD_START,
        payload: comment
    };
};

export  const deleteComment = (id) => {
    return {
        type: actionTypes.POST_COMMENT_DELETE_START,
        payload: id
    };
};