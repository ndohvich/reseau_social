import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';

export class index extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profil" exact component={Profil} />
            <Route path="/trending" exact component={Trending} />
            <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}

export default index