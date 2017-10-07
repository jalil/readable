import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {fetchByCategory} from "../actions";

class CategoryPosts extends Component {
    componentDidMount() {
        const {category} = this.props.match.params;
        console.log(this.props.fetchByCategory("8xf0y6ziyjabvozdd253nd"));
    }

  render() {
    return (
      <div>
        category POSTS
      </div>
    );
  }
}

function mapStateToProps({ posts,comments }) {
  return { posts, comments };
}

export default connect(mapStateToProps, { fetchByCategory })(CategoryPosts);
