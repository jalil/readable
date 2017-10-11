import _ from "lodash";
import {
  GET_POSTS,
  GET_BY_CATEGORY,
  GET_POST,
  CREATE_POST,
  UP_VOTE,
  DOWN_VOTE,
  EDIT_POST,
  DELETE_POST,
  GET_POST_EDIT
} from '../actions/';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case GET_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case GET_POST_EDIT:
      return action.payload.data;

    case CREATE_POST:
      return state;

    case EDIT_POST:
      return state;

    case DELETE_POST:
      return _.omit(state, action.payload);

    case GET_BY_CATEGORY:
      return action.payload

    case UP_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case DOWN_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
