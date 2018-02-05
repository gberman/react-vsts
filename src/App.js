import React, { Component } from 'react';
import DropPlan from './DropPlan';
import './App.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DropPlan showCurrentUserFirst={true}/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);