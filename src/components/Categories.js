import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllCategory} from '../actions';

class Categories extends Component {
  componentDidMount() {
    this.props.getAllCategory()
  }

  renderCategory() {

    const { categories } = this.props;
    return categories.map((category) => {
     const { name } = category;
      return (
        <div className="read-detail" key={category.name}>
          <h3>
            <Link to={`/${name}/posts`}>{name}</Link>
          </h3>
        </div>

      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCategory()}
      </div>
    )
  }
}

function mapStateToProps({categories}) {

  return {categories}
};

export default connect(mapStateToProps, {getAllCategory})(Categories);
