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

import Template1Form from './components/FormTemplate/temp1Form';
import Template2Form from './components/FormTemplate/temp2Form';
import Template3Form from './components/FormTemplate/temp3Form';

import ViewTemplate1 from './components/Templates/Template1';
import ViewTemplate2 from './components/Templates/Template2';
import ViewTemplate3 from './components/Templates/Template3';

import Profile from './components/UI/Profile';
import AddStudent from './components/student&course/addStudent';
import AddCourse from './components/student&course/addCourse';
import viewCourse from './components/student&course/viewCourse';
import viewStudent from './components/student&course/viewStudent';
import editCourse from './components/student&course/editCourse';
import editStudent from './components/student&course/editStudent';
import viewCertificate from './components/certificateGenrated/viewCertificate';


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
            <PrivateRoute path="/certificate/template1" component={Template1Form} />
            <PrivateRoute path="/certificate/template2" component={Template2Form} />
            <PrivateRoute path="/certificate/template3" component={Template3Form} />
            <PrivateRoute path="/certificate/view-template1" component={ViewTemplate1} />
            <PrivateRoute path="/certificate/view-template2" component={ViewTemplate2} />
            <PrivateRoute path="/certificate/view-template3" component={ViewTemplate3} />

            <PrivateRoute path="/admin/your_profile" component={Profile} />
            <PrivateRoute path="/student/addstudent" component={AddStudent} />
            <PrivateRoute path="/student/editStudent/:id" component={editStudent} />
            <PrivateRoute path="/course/addcourse" component={AddCourse} />
            <PrivateRoute path="/course/view-course" component={viewCourse} />
            <PrivateRoute path={`/course/editCourse/:id`} component={editCourse} />
            <PrivateRoute path="/student/view-student" component={viewStudent} />
            <PrivateRoute path="/admin/issued_certificate" component={viewCertificate} />

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
