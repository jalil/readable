import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import PostsIndex from './components/PostsIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2><Header headerText="FakerNews" /></h2>
        </div>
            <PostsIndex />
      </div>
    );
  }
}

export default App;
