import _ from "lodash";
import { FETCH_POSTS } from "../actions";
import {FETCH_BY_CATEGORY, DELETE_POST, FETCH_POST } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
         return _.omit(state, action.payload);
    case FETCH_BY_CATEGORY:
         return action.payload.data
    default:
      return state;
  }
}
