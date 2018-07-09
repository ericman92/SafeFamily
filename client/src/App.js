import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Landing from './Landing';
import Home from './Home';
import './Styling/Locate.css';

import Locate from './Locate';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
      this.state = {
        username: ''
      };
  }

loginUser = (username) => {
  this.setState({
      username: username
  })
}

  render() {
    return (
      <div className="mainbody">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to ='/' > Safe Family </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>
              <Link to ='/' > Sign Out </Link>
            </NavItem>
          </Nav>
        </Navbar>;
          
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
