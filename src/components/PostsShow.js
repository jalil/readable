import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import Post404 from './Posts404';
import {
  getPost,
  deletePost,
  getPosts,
  upVote,
  downVote,
  getComments
} from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const {id} = this.props.match.params;
      this.props.getPost(id)
      this.props.getComments();
    }
  }

  postDelete(id) {
      this.props.deletePost(id, () => {
        this.props.history.push('/')
      })
  }

  render() {
    const {post} = this.props;
    const {id} = this.props.match.params;
    const comments = this.props.comments
      ? this.props.comments[id]
      : null
    const num_of_comments = comments
      ? comments.length
      : 0

   if (!post) {
      return <Post404 />
    }

    return (
      <div>
        <div className="navigate-button">
          <Link to="/" className="btn btn-danger">Go back</Link>
        </div>
        <div className="col-md-8 col-md-offset-2">
          <div className="read-detail">
            <div className="edit-post">
              <span className="glyphicon glyphicon-pencil">
                <Link to={`/post/${post.id}/edit`}>edit</Link>
              </span>
            </div>
            <h3>Title: {post.title}</h3>
            <div className="post-body">
              <h3>{post.body}</h3>
            </div>

            <p className="lead">
              <span className="glyphicon glyphicon-user margin-right:10px">
                {post.author}</span>
            </p>

            <ul className="li-bundle">

              <li>
                <span className="glyphicon glyphicon-time">
                  {new Date(post.timestamp).toLocaleDateString()}</span>
              </li>
              <li>
                  {post.category}
              </li>
              <li>
                <span className="glyphicon glyphicon-comment">
                  {num_of_comments}</span>
              </li>
              <li>
                <span className="glyphicon glyphicon-star-empty"></span>
                {post.voteScore}</li>
              <li onClick={() => this.props.upVote(post.id)}>
                <span className="glyphicon glyphicon glyphicon-thumbs-up cursor"> UPVOTE</span>
              </li>
              <li onClick={() => this.props.downVote(post.id)}>
                <span className="glyphicon 	glyphicon glyphicon-thumbs-down cursor">DOWNVOTE</span>
              </li>
              <li onClick={() => this.postDelete(post.id)}>
                <span className="glyphicon glyphicon-remove-sign cursor">
		 <Link className="btn btn-primary navigate-button" to="/">
            DELETE
          </Link></span>
              </li>
            </ul>

          </div>

          <h2>Comments</h2>
          <Link className="btn btn-primary navigate-button" to={`/new/comment/${post.id}`}>
            Add a Comment
          </Link>

          <div>
	    JALIL COMMEN
            <Comments id={id}/>
          </div>
        </div>
      </div>

    );
  };
}

function mapStateToProps({
  posts,
  comments
}, ownProps) {

  const post = (posts[ownProps.match.params.id])
  console.log(posts);

  return {post, comments};
};

export default connect(mapStateToProps, {
  getPost,
  deletePost,
  getPosts,
  upVote,
  downVote,
  getComments
})(PostsShow);
