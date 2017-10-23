import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Categories from './Categories';
import * as actions from '../actions/posts';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.getPosts();
//    this.props.getComments();

  }

  postDelete(id) {
      this.props.deletePost(id, () => {
      })
    }
  

  renderPosts() {

    return _.map(this.props.posts, post => {
      const {
        title,
        author,
        timestamp,
        id,
        voteScore,
        category,
        deleted
      } = post

      const time = new Date(timestamp).toLocaleDateString()
      const comments = this.props.comments
        ? this.props.comments[id]
        : null
      const noOfComments = comments
        ? comments.length
        : 0

      if (!deleted) {
        return (
          <div className="read-detail" key={id}>
            <div className="select right"></div>
            <div className="edit-post">
              <span className="glyphicon glyphicon-pencil">
                <Link to={`/post/${id}/edit`}>edit</Link>
              </span>
            </div>
            <Link to={`/${category}/${id}`}>
              <h3>Title:{title}</h3>
            </Link>

            <p className="lead">
              <span className="glyphicon glyphicon-user margin-right:10px">
                {author}</span>
            </p>

            <ul className="li-bundle">

              <li>
                <span className="glyphicon glyphicon-time">{time}</span>
              </li>
              <li>
                <Link to={`/${category}/posts`}>
                  {category}</Link>
              </li>
              <li>
                <span className="glyphicon glyphicon-comment">
                  {noOfComments}</span>
              </li>
              <li>
                <span className="glyphicon glyphicon-star-empty"></span>
                {voteScore}</li>
              <li onClick={() => this.props.upVote(id)}>
                <span className="glyphicon glyphicon glyphicon-thumbs-up cursor">VOTE UP</span>
              </li>
              <li onClick={() => this.props.downVote(id)}>
                VOTE DOWN<span className="glyphicon	glyphicon glyphicon-thumbs-down cursor"></span>
              </li>
              <li onClick={() => this.postDelete(id)}>
		
                <span className="glyphicon glyphicon-remove-sign cursor"><strong>DELETE</strong></span>
              </li>
            </ul>
          </div>
        );
      }
    });
  };

  render() {

    return (
      <div className="row">
        <div className="add-post">
          <Link className="btn btn-primary navigate-button" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <div className="col-md-8">
          <h2 className="posts">Posts</h2>
          {this.renderPosts()}
        </div>
        <div className="col-md-4">

          <h2 className="posts">Category</h2>
          <Categories/>
        </div>

      </div>
    );
  };
}

function mapStateToProps({posts}) {

  return {posts}
  //return {posts, comments}
};

export default connect(mapStateToProps, actions
)(PostsIndex);
