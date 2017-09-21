import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_URL = "http://localhost:5001";
const headers = { headers: { Authorization: "Javascript" } };

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`, headers);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
