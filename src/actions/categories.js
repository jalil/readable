import axios from "axios";

import {
  GET_BY_CATEGORY,
  GET_ALL_CATEGORY,
} from './types';

const ROOT_URL = 'http://localhost:3001';
const headers = { headers: { 'Authorization': 'ohboyidontlikeredux' } };


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


