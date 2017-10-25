import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import PostsIndex from "./components/PostsIndex";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";
import Comments from "./components/Comments";
import CommentsNew from "./components/CommentsNew";
import Categories from "./components/Categories";
import CategoryPosts from "./components/CategoryPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
          <Link  to="/" > FakerNews</Link> 
          </h2>
        </div>
        <div className="container text-center">
          <Switch>
            <Route exact path="/posts/new" component={PostsNew} />
            <Route exact path="/new/comment/:parentId" component={CommentsNew} />
            <Route exact path="/edit/comment/:id" component={CommentsNew} />
            <Route exact path="/post/:id/edit" component={PostsNew} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/:categories/posts" component={CategoryPosts} />
            <Route exact path="/" component={PostsIndex} />
	    <Route exact path="/:category/:id" component={PostsShow}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
