import React, { Component } from 'react';
import LoginBox from './components/Login/LoginBox';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar appName='Simple Pass' />
        <div className="container-fluid">
          <br />
          <div className="d-flex justify-content-center">
            <LoginBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;