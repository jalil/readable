import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import PostsIndex from "./components/PostsIndex";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";
import Comments from "./components/Comments";
import Categories from "./components/Categories";
import CategoryPosts from "./components/CategoryPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <Header headerText="FakerNews" /> 
          </h2>
        </div>
        <div className="container text-center">
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id/comments" component={Comments} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/categories" component={Categories} />
            <Route path="/:categories/posts" component={CategoryPosts} />
            <Route path="/" component={PostsIndex} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
