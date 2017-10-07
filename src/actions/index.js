import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_BY_CATEGORY = "FETCH_BY_CATEGORY";
export const FETCH_POST = "FETCH_POST";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENT = "SENTINAL_FETCH_COMMENT";
export const FETCH_COMMENT_DETAILS = "FETCH_COMMENT_DETAILS";
export const CREATE_POST = "CREATE_POSTS";
export const DELETE_POST = "DELETE_POST";

const ROOT_URL = "http://localhost:3001";
const headers = { headers: { Authorization: "reactiveohmygod" } };

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`, headers);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchCategories() {
  const request = axios.get(`${ROOT_URL}/categories`, headers);
  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function fetchByCategory(category) {
  const request = axios.get(`${ROOT_URL}/${category}/posts`, headers);
  console.log("inside action index",request);
  return {
    type: FETCH_BY_CATEGORY,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts`, values, headers)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`, headers);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}`, headers)
      .then( () => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}

export function fetchComments() {
return dispatch => { 
   axios.get(`${ROOT_URL}/posts`, headers)
     .then(response => { 
const post_ids = response.data.map(post =>post.id);

post_ids.map(p =>{ axios.get(`${ROOT_URL}/posts/${p}/comments`, headers)
   .then(response => { 
     dispatch({ 
        type: FETCH_COMMENTS,
        comments: response.data,
         postId: p
           })
        })
    })
  });
 };
}

export function fetchComment(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}/comments`, headers);
  return {
    type: FETCH_COMMENT,
    payload: request
  };
}

export function fetchCommentDetails(id) {
  const request = axios.get(`${ROOT_URL}/comments/${id}`, headers);
  return {
    type: FETCH_COMMENT_DETAILS,
    payload: request
  };
}

