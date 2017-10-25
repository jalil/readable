import _ from "lodash";
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UP_VOTE,
  DOWN_VOTE,
  EDIT_POST,
  DELETE_POST,
  GET_POST_EDIT,
SORT_POSTS_BY_DATE,
SORT_POSTS_BY_VOTE
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case GET_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case GET_POST_EDIT:
       console.log(action.payload.data)
      return action.payload.data;

    case CREATE_POST:
      return state;

    case EDIT_POST:
      return state;

    case DELETE_POST:
      return _.omit(state, action.payload);

    case UP_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case DOWN_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

	
    case SORT_POSTS_BY_DATE:
      const postsDate = _.sortBy(action.payload.data, 'timestamp').reverse();
      return _.mapKeys(postsDate, 'id');

    case SORT_POSTS_BY_VOTE:
      const postsVote = _.sortBy(action.payload.data, 'voteScore').reverse();
      return _.mapKeys(postsVote, 'id');

    default:
      return state;
  }
}
