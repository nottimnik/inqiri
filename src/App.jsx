import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Explore from "./pages/Explore/Explore";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/wiki/:id" component={Blog} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
