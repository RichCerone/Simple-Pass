import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginBox from './components/login/LoginBox';
import NavBar from './components/NavBar';
import SignupBox from './components/signup/SignupBox'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar appName='Simple Pass' />
          <div className="container-fluid">
          <br />
              <div className="d-flex justify-content-center">
                <Route path="/" exact component={LoginBox} />
              </div>

              <Route path="/signup" component={Signup}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

const Signup = () => (
  <Fragment>
    <SignupBox />
  </Fragment>
);

export default App;