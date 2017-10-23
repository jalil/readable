import axios from "axios";


import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  GET_POST_EDIT,
  DOWN_VOTE,
  UP_VOTE,

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
