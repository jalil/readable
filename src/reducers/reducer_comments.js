import _ from "lodash";
import { FETCH_COMMENT, FETCH_COMMENT_DETAILS, FETCH_COMMENTS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return Object.assign({}, state, {
        [action.postId]: action.comments
      });
    case FETCH_COMMENT:
      return state;
    case FETCH_COMMENT_DETAILS:
      if (action.payload.data) {
        return action.payload.data;
      } else {
        return state;
      }
    default:
      return state;
  }
}
