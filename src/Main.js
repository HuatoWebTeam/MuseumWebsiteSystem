import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {  } from 'react-router'
import App from './pages/App/App';
import './Main.css';

class Main extends Component {
  state = {  }
  render() {
    // console.log(this.props)
    return <BrowserRouter>
        <Switch>
          <Route exact to="/" component={App} />
          {/* <Redirect path="/" to={'/Home'} /> */}
        </Switch>
      </BrowserRouter>;
  }
}

export default Main;
