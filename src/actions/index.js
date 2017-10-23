import axios from "axios";


import {
  GET_POSTS,
  GET_POST,
  GET_BY_CATEGORY,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE,
  DOWN_VOTE,
  GET_ALL_CATEGORY,
  GET_COMMENT,
  GET_COMMENTS,
  GET_COMMENT_DETAIL,
  GET_POST_EDIT,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,

} from './types';

const ROOT_URL = 'http://localhost:3001';
const headers = { headers: { 'Authorization': 'ohboyidontlikeredux' } };

export function getPosts() {
  const request = axios.get(`${ROOT_URL}/posts`, headers);
  return {
    type: GET_POSTS,
    payload: request
  };
}


export function getPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`, headers);
  return {
    type: GET_POST,
    payload: request
  };
}

export function getPostEdit(id,callback) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`, headers)
  return {
    type: GET_POST_EDIT,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts`, values, headers)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  axios.delete(`${ROOT_URL}/posts/${id}`, headers)
  .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}

export function editPost(id, values, callback) {
  const request = axios.put(`${ROOT_URL}/posts/${id}`, values, headers)
    .then(() => callback());
  return {
    type: EDIT_POST,
    payload: request
  };
}

export function getAllCategory() {
  const request = axios.get(`${ROOT_URL}/categories`, headers)
  return {
    type: GET_ALL_CATEGORY,
    payload: request
  };
}


export function getByCategory(category) {
  const request = axios.get(`${ROOT_URL}/${category}/posts`, headers)

  return {
    type: GET_BY_CATEGORY,
    payload: request
  };
}

export function upVote(id) {
  const request = axios.post(`${ROOT_URL}/posts/${id}`, { option: "upVote" }, headers);
  return {
    type: UP_VOTE,
    payload: request
  };
}

export function downVote(id) {
  const request = axios.post(`${ROOT_URL}/posts/${id}`, { option: "downVote" }, headers);
  return {
    type: DOWN_VOTE,
    payload: request
  };
}

export function voteComment(id,option) {
  const request = axios.post(`${ROOT_URL}/comments/${id}`, { option }, headers);
  return {
    type: VOTE_COMMENT,
    payload: request
  };
}

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
