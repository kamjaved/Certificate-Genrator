import React, { Fragment, useEffect } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from './utils/PrivateRoute'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./_actions/authAction";
import setAuthToken from "./utils/setAuthToken";

import './App.css';
import Alert from "./components/UI/Alert";
import Navbar from './components/UI/navbar';
import Register from './components/UI/Register';
import Login from './components/UI/Login';


import Dashboard from './components/UI/Dashboard';
import landing from './components/UI/landing';
import Template from './components/FormTemplate/temp1Form';
import { Template1 } from './components/Templates/Template1';
import Template2 from './components/Templates/Template2';
import Profile from './components/UI/Profile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/certificate/template1" component={Template} />
            <PrivateRoute path="/certificate/view-template1" component={Template1} />
            <PrivateRoute path="/certificate/view-template2" component={Template2} />
            <PrivateRoute path="/admin/your_profile" component={Profile} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={landing} />
            <Route exact path="/register" component={Register} />

          </Switch>
        </Fragment>
      </Router>
    </Provider >

  );
}

export default App;
