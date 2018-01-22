import React, { Component } from 'react';
import DropPlan from './DropPlan';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropPlan />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="grid-container">
          <DropPlan />
        </div> */}
      </div>
    );
  }
}

export default App;
