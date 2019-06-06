import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './Components/Guests/LandingPage';

export default class App extends Component {
  render() {
    return (
      <Route exact path = "/" component = {LandingPage} />
    )
  }
}
