import { combineReducers } from "redux";
import PostReducer from "./reducer_posts";
import CommentReducer from "./reducer_comments";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    posts: PostReducer,
    comments: CommentReducer,
    form: formReducer
});
