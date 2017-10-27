import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createComment, editComment, getCommentDetail } from '../actions';

class CommentsForm extends Component {

<<<<<<< HEAD
=======
  constructor() {
  super();
  this.onSubmit = this.onSubmit.bind(this);
}
>>>>>>> review-2
  componentDidMount() {
    if (this.props.match.params.id) {
      const { id } = this.props.match.params;
      this.props.getCommentDetail(id).then(() => {
        this.handleInitialize();
      });
    }
  }

  handleInitialize() {
    const initData = {
      author: this.props.comments.author,
      body: this.props.comments.body
    };

    this.props.initialize(initData);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>
          {field.label}
        </label>
        <field.type className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    if (this.props.match.params.id) {
      const { id } = this.props.match.params;
      values['timestamp'] = new Date();
      this.props.editComment(id, values, () => {
        this.props.history.push('/');
      });
    } else {
      values['id'] = Math.random().toString(36).substr(-8);
      values['timestamp'] = new Date();
      values['parentId'] = this.props.match.params.parentId;
      this.props.createComment(values, () => {
        this.props.history.push('/');
      });
    }
  }

  render() {

	 const { handleSubmit } = this.props;
    return (
<div>
<<<<<<< HEAD
       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
=======
      <form onSubmit={this.onSubmit(this)}>
>>>>>>> review-2
        <Field
          label="Author"
          name="author"
          type="input"
          component={this.renderField}
        />
        <Field
          label="Comments"
          name="body"
          type="textarea"
          component={this.renderField}
        />
        <button
          type="submit"
          className="btn btn-primary submit sumbmit-comment"
        >
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
</div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.author) {
    errors.author = 'Enter an author';
  }
  if (!values.body) {
    errors.body = 'Enter content ';
  }

  return errors;
}

function mapStateToProps({ comments }) {
  return { comments };
}

export default reduxForm({ validate, form: 'CommentForm' })(
  withRouter(
    connect(mapStateToProps, { createComment, editComment, getCommentDetail })(
      CommentsForm
    )
  )
);
