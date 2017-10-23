import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  upVote,
  downVote,
  getComments,
  deletePost,
  getByCategory
} from '../actions';
import _ from 'lodash';

class PostsCategory extends Component {
  componentDidMount() {
   if (this.props.bycategory) {
    this.props.getComments();
      const  category  = this.props.match.params.categories;
      this.props.getByCategory(category);
     this.props.getComments();
  }
  }

  postDelete(id) {
      this.props.deletePost(id, () => {
        this.props.history.push('/');
      });
  }

  renderPosts() {
    return _.map(this.props.bycategory, post => {
      const {
        title,
        author,
        timestamp,
        id,
        voteScore,
        category,
        deleted
      } = post; 
      const time = new Date(timestamp).toLocaleDateString();
      const comments = this.props.comments ? this.props.comments[id] : null;
      const num_of_comments = comments ? comments.length : 0;

      if (!deleted && post) {
        return (
          <div className="read-detail" key={id}>
            <div className="edit-post">
              <span className="glyphicon glyphicon-pencil">
                <Link to={`/post/${id}/edit`}>edit</Link>
              </span>
            </div>
            <Link to={`/${category}/${id}`}>
              <h3>
                Title: {title}
              </h3>
            </Link>

            <p className="lead">
              <span className="glyphicon glyphicon-user margin-right:10px">
                Author: {' '}{author}
              </span>
            </p>

            <ul className="li-bundle">
              <li>
                <span className="glyphicon glyphicon-time">
                  {time}
                </span>
              </li>
              <li>
                <Link to={`/${category}/posts`}>
                  {' '}{category}
                </Link>
              </li>
              <li>
                <span className="glyphicon glyphicon-comment">
                comments:  {' '}{num_of_comments}
                </span>
              </li>
              <li>
              </li>
              <li onClick={() => this.postDelete({id})}>
                <span className="glyphicon glyphicon-remove-sign cursor" />
              </li>
            </ul>
          </div>
        );
      } else {
        <h1> JALIL No Post</h1>;
      }
    });
  }


  render() {
    return (
      <div className="row">
		blah
              {this.renderPosts()}
      </div>
    );
  }

}

function mapStateToProps({ bycategory,comments}) {
  return { bycategory, comments };
}

export default connect(mapStateToProps, {
  getByCategory,
  upVote,
  downVote,
  getComments,
  deletePost,
})(PostsCategory);
