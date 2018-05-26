import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from './Landing';
import Home from './Home';
import Locate from './users/RegisterUser';

class App extends Component {
  render() {
    return (
      <div className="mainbody">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/map" component={Locate} />
        </Switch>
      </div>
    );
  }
}

export default App;
