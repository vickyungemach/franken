import React, { useEffect, useState } from 'react';
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
import Groups from 'pages/Groups';
import GroupDetail from 'components/groups/GroupDetail';
import Upload from 'pages/Upload';
import Modal from 'components/elements/Modal';



function App({ isAuthenticated, token, progress }) {
  
  const [modal, setModal] = useState(false);

  useEffect(() => {
    store.dispatch(getUser());
    store.dispatch(loginCheck());
  }, [token])

  useEffect(() => {
    if(progress.number) {
      setModal(true)
    } else {
      setModal(false)
    }
  }, [progress])

  return (
    <Router>
      <Navbar authenticated={isAuthenticated} username="username" logout={() => store.dispatch(logout())} />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/groups' component={Groups} />
        <PrivateRoute exact path='/groups/:id' component={GroupDetail} />
        <Route exact path='/upload' component={Upload} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
      <Modal
        modal={modal}
        setModal={setModal}
        title="Uploading images..."
        width="30%"
      >
        uploading { progress.number } of { progress.total }
      </Modal>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  progress: state.images.progress
})

export default connect(mapStateToProps, {})(App);
