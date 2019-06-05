import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <Route exact path = "/" component = {LandingPage} />
      <Route exact path = "/login" component = {LogIn} />
      <Route exact path = "/signup" component = {SignUp} />
      <Route exact path = "/home" component = {Randomizer} />
      <Route exact path = "/services" component = {Services} />
    )
  }
}
