import _ from "lodash";

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const  FETCH_ALL_CATEGORY= 'FETCH_ALL_CATEGORY';
export const FETCH_BY_CATEGORY = 'FETCH_BY_CATEGORY';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST'
export const UP_VOTE = "UP_VOTE";
export const DOWN_VOTE = "DOWN_VOTE";
export const FETCH_COMMENT = "FETCH_COMMENT"
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const EDIT_COMMENT ="EDIT_COMMENT"
export const FETCH_COMMENT_DETAIL = 'FETCH_COMMENTS_DETAIL';
export const FETCH_POST_EDIT = "FETCH_POST_EDIT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";


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
      return action.payload.data;

    case UP_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case DOWN_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
