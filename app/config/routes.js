import React, { Component } from 'react'
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
import { MainContainer } from '../containers'

class Routes extends Component {
  render () {
    return (
      <Router>
        <Route exact path='/' component={MainContainer} />
      </Router>
    )
  }
}

export default Routes;
