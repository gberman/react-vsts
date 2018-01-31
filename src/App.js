import React, { Component } from 'react';
import DropPlan from './DropPlan';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropPlan showCurrentUserFirst={true}/>
      </div>
    );
  }
}

export default App;
