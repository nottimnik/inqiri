import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Explore from "./pages/Explore/Explore";
import About from "./pages/About";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/wiki/:id" component={Blog} />
        <Route path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
