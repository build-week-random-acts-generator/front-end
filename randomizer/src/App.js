import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './Components/Guests/LandingPage';

export default class App extends Component {
  render() {
    return (
      <Route exact path = "/" component = {LandingPage} />
    )
  }
}
