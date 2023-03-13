import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import App from './App';
import LoginPage from './LoginPage';
import './App.css';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/dashboard" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
