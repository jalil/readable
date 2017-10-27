import React, { Component } from "react";
import * as actions from '../actions/comments';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

class Comments extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
   this.props.getComments(id);
  this.props.getComment(id);
  }

 commentDelete(id) {
      this.props.deleteComment(id, () => {
        this.props.history.push('/');
      });
  }


 renderComments() {
    return this.props.selectedComments.map(comment => {
      if (comment) {
        const {category, author, voteScore, id, body, timestamp } = comment;
        const time = new Date(timestamp);
        const formatted = time.toLocaleDateString();
        return (
          <div className="read-detail" key={id}>
            <div className="edit-post">
              <span className="glyphicon glyphicon-pencil">
                <Link to={`/edit/comment/${id}`}>edit</Link>
              </span>
            </div>
              <span className="glyphicon glyphicon-user margin-right:10px">
                {author}
              </span>
                {formatted}
              <br/>
              {body}

	<ul className="li-bundle">
              <li>
                <span className="glyphicon glyphicon-star-empty" />
                {voteScore}
              </li>
              <li onClick={() => this.props.voteComment(id, 'upVote')}>
                <span className="glyphicon glyphicon glyphicon-thumbs-up cursor" />
              </li>
              <li onClick={() => this.props.voteComment(id, 'downVote')}>
                <span className="glyphicon glyphicon glyphicon-thumbs-down cursor" />
              </li>
              <li onClick={() => this.commentDelete(id)}>
                <span className="glyphicon glyphicon-remove-sign cursor" /> DELETE COMMENTO
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
    return (
<div>
            <h3>Comments </h3>
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
    connect(mapStateToProps, actions)(
  Comments));
