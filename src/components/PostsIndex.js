import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      const { title,deleted, author, timestamp, body, id, voteScore, category } = post;
      console.log(this.props.posts);

      const time = new Date(timestamp);
      const formatted = time.toLocaleDateString();
      const comments = this.props.comments ? this.props.comments[id] : null;
      const num_of_comments = comments ? comments.length : 0;
      if(!deleted) {
      return (
        <li className="list-group-item" key={id}>
          <Link to={`/posts/${post.id}`}>{title}</Link>
          <br />
          <div className="comments">
            {voteScore} points by {author} {formatted} | 
            <Link to={`/posts/${post.id}/comments`}> {num_of_comments}{" "} comments</Link>
          </div>
        </li>
      );
      }
    });
  }
  render() {
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

function mapStateToProps({ posts }) {
  return {
    posts
  };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
