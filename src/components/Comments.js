import React, { Component } from "react";
import {fetchComment,fetchPost, fetchCommentDetails, fetchComments } from "../actions";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

class Comments extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
   this.props.fetchComments(id);
  this.props.fetchComment(id);
  }


 renderComments() {
    return this.props.selectedComments.map(comment => {
      if (comment) {
         console.log("wjhwjhwjw",comment);
        const { author, voteScore, id, body, timestamp } = comment;
        const time = new Date(timestamp);
        const formatted = time.toLocaleDateString();
        return (
          <div className="read-detail" key={id}>
            <div className="edit-post">
              <span className="glyphicon glyphicon-pencil">
                <Link to={`/edit/comment/${id}`}>edit</Link>
              </span>
            </div>
            <h5 className="author-name">
              <span className="glyphicon glyphicon-user margin-right:10px">
                {author}
              </span>
            </h5>
            <h4>
              {body}
            </h4>

            <ul className="li-bundle">
              <li>
                {formatted}
              </li>
            </ul>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  render() {
      console.log("b439939",this.props.selectedComments);
    return (
<div>
        {this.props.selectedComments
          ? <div>
              {this.renderComments()}
            </div>
          : <div>
              <h2>No Comments</h2>
            </div>}
      </div>);
  }
}

function mapStateToProps({ comments }, ownProps) {
 const selectedComments = comments[ownProps.match.params.id];
  return {
selectedComments
  };
}
export default withRouter (
    connect(mapStateToProps, {fetchComment, fetchPost, fetchCommentDetails, fetchComments })(
  Comments));
