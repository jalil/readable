import React, { Component } from "react";
import { Field,initialize, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
    componentDidMount() {
//         this.initializeData();
    }

        initializeData () {
            const initData = {
              title: this.props.posts.title,
              category: this.props.posts.category,
              author: this.props.posts.author,
              body: this.props.posts.body
            };
        this.props.initializeData(initData);
        }

  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error
      ? "has-danger"
      : ""}`;
    return (
      <div className={className}>
        <label> {field.label} </label>
        <input className="form-control" type="text" {...field.input} />

        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
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
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" label="Title" component={this.renderField} />
           <h6 className="bold">Category</h6>
          <Field name="category" label="Category" component="select">
            option disabled />
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
            </Field>
          <Field
            name="Author"
            label="author"
            type="input"
            component={this.renderField}
          />
          <Field
            name="Post Content"
            label="body"
            type="textarea"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit{" "}
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

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.category) {
    errors.category = "Enter a categorys";
  }
  if (!values.author) {
    errors.author = "Enter a author";
  }
  if (!values.body) {
    errors.body = "Enter some content please";
  }

  return errors;
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
