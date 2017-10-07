import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../actions";

class Categories extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

renderCategory() {
    return this.props.categories.map((category) => {
      return (
        <div className="read-detail" key={category.name}>
          <h3>
            <Link to={`/${category.name}/posts`}>{category.name}</Link>
          </h3>
        </div>

      );
    });
  }
  render() {
      console.log(typeof(this.props.categories));
    return (
      <div>
        {this.renderCategory()}
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps, { fetchCategories })(Categories);
