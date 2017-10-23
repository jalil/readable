import axios from "axios";

import {
  GET_COMMENT,
  GET_COMMENTS,
  GET_COMMENT_DETAIL,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
} from './types';

const ROOT_URL = 'http://localhost:3001';
const headers = { headers: { 'Authorization': 'ohboyidontlikeredux' } };


export function createComment(values,callback) {
  const request = axios.post(`${ROOT_URL}/comments`, values, headers)
  .then(() => callback());
  return {
    type: CREATE_COMMENT,
    payload: request
    };
}

export function editComment(id,values,callback) {
  const request = axios.put(`${ROOT_URL}/comments/${id}`, values, headers)
   .then(() => callback());
  return {
    type: EDIT_COMMENT,
    payload: request
    };
}




export function deleteComment(id,callback) {
  const request = axios.delete(`${ROOT_URL}/comments/${id}`,headers)
  return {
    type: DELETE_COMMENT,
    payload: request
    };
}




export function getComment(id) {
 const request = axios.get(`${ROOT_URL}/posts/${id}/comments`, headers)
  return {
     type:GET_COMMENT,
     payload: request

  };
}

export function getCommentDetail(id) {
  const request = axios.get(`${ROOT_URL}/comments/${id}`, headers)
   return {
      type:GET_COMMENT_DETAIL,
      payload: request
   };
 }

export const getComments = function () {
  return dispatch => {
    axios.get(`${ROOT_URL}/posts`, headers).then(response => {
      const postIds = response.data.map(post => post.id)

      postIds.reverse().forEach(id => {
        axios.get(`${ROOT_URL}/posts/${id}/comments`, headers).then(response => {
          dispatch({
            type: GET_COMMENTS,
            comments: response.data,
            postId: id
          })
        })
      })

    });
  };
};

export function voteComment(id,option) {
  const request = axios.post(`${ROOT_URL}/comments/${id}`, { option }, headers);
  return {
    type: VOTE_COMMENT,
    payload: request
  };
}
