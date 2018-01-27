import React, { Component } from 'react';
import Person from './Person'
import './DropPlan.css'

class DropPlan extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    const windowScrollingElement = document.documentElement;
      const headerScrollingElement = document.getElementById('header-top');
      headerScrollingElement.style.left = (-1 * windowScrollingElement.scrollLeft) + 'px';
  }

  render() {
    return (
      <div>
        <div id="header-top">
          <div className="drop-plan">
              <div>Day 1 (tuesday)</div><div>Day 2 (wednesday)</div><div>Day 3 (thursday)</div><div>Day 4 (friday)</div><div>Day 7 (monday)</div><div>6</div>
          </div>
        </div>
        <div className="main-content">
          <Person name="Greg" />
          <Person name="Diana" />
          <Person name="Pogo" />
          <Person name="Hop-Hop" />
        </div>
      </div>);
  }
}

export default DropPlan