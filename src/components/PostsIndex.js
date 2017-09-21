import React, {Component} from 'react';
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import _ from "lodash";

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
    return _.map(this.props.posts, post => {
      const {
        title,
        author,
        timestamp,
        body,
        id,
        voteScore,
        category,
      } = post;

      const time = new Date(timestamp);
      const formatted = time.toLocaleDateString();
      const comments = this.props.comments
        ? this.props.comments[id]
        : null
      const num_of_comments = comments
        ? comments.length
        : 0
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{title}</Link>
          <br />
          <div className="comments">
              {voteScore} points by {author} {formatted}  | {num_of_comments} <Link to={`/posts/${post.id}/comments`}>comments</Link>
          </div>
        </li>

      );
    });
  }
    render () {
 return (
      <div>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
    }
}

function mapStateToProps({posts}) {
 return {
    posts
 }
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
