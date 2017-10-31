import React from 'react'
import {Link} from 'react-router-dom';

const Post404 = () => {
  return (
  <div>
    <h1>
       This Post has been deleted
    </h1>
    <Link to="/" className="btn btn-danger">
      Cancel
    </Link>
  </div>
  );
}

 export default Post404;
