import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './main.scss';

import Navbar from './components/elements/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import PrivateRoute from './components/elements/PrivateRoute';
import { getUser, loginCheck, logout } from 'actions/auth';
import { store } from './store';



function App({ isAuthenticated, token }) {

  useEffect(() => {
    store.dispatch(getUser());
    store.dispatch(loginCheck());
  }, [token])



  return (
    <Router>
      <Navbar authenticated={isAuthenticated} username="username" logout={() => store.dispatch(logout())} />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token
})

export default connect(mapStateToProps, {})(App);
