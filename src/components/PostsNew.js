import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, editPost, getPostEdit } from '../actions';

class PostsNew extends Component {
  componentDidMount() {
  console.log(this.props.posts);
    if (this.props.posts) {
      const { id } = this.props.match.params;
      this.props.getPostEdit(id).then(() => {
        this.handleInitialize();
      });
    }
  }

  handleInitialize() {
    const initData = {
      title: this.props.posts.title,
      category: this.props.posts.category,
      author: this.props.posts.author,
      body: this.props.posts.body
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
    const { id } = this.props.match.params;
    if (id) {
      values['timestamp'] = new Date();
      this.props.editPost(id, values, () => {
        this.props.history.push('/');
      });
    } else {
      values['id'] = Math.random().toString(36).substr(-8);
      values['timestamp'] = new Date();
      this.props.createPost(values, () => {
        this.props.history.push('/');
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.posts);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h5 className="bold">Category</h5>
        <Field label="Category" name="category" component="select">
          <option disabled />
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="udacity">Udacity</option>
        </Field>
        <Field
          label="Title For Post"
          name="title"
          type="input"
          component={this.renderField}
        />
        <Field
          label="Author"
          name="author"
          type="input"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="body"
          type="textarea"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary submit">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.author) {
    errors.author = 'Enter an author';
  }
  if (!values.category) {
    errors.category = 'Enter an category';
  }
  if (!values.body) {
    errors.body = 'Enter some content please';
  }

  return errors;
}

const practice = { breathe: 1, inhale: 'exhale' };

const { breathe, inhale } = practice;

console.log(inhale);

const state = { posts: [ 1, 2, 3 ] }


const { posts, meta } = state;


Array.isArray(meta) == false

function mapStateToProps({ posts }) {
  return { posts };
}

export default reduxForm({
  validate,
  form: 'PostsForm'
})(
  connect(mapStateToProps, { createPost, editPost, getPostEdit })(PostsNew)
);

