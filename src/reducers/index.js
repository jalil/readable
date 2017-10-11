import { combineReducers } from "redux";
import PostReducer from "./reducer_posts";
import CommentReducer from "./reducer_comments";
import CategoryReducer from "./reducer_categories";
import ByCategoryReducer from "./reducer_by_category";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    posts: PostReducer,
    comments: CommentReducer,
    categories: CategoryReducer,
    bycategory: ByCategoryReducer,
    form: formReducer
});
