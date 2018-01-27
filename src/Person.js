import React, { Component } from 'react';
import './Person.css'

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyShowSummary: false,
      screenWith: '100%'
    };

    // This binding is necessary to make `this` work in the callback
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleDoubleClick(e){
    this.setState(function(prevState, props) { return {
      onlyShowSummary: prevState ? !prevState.onlyShowSummary : true
    }});
  }
  handleScroll(e){
    const titleElement = this.refs.fitToScreenSize;
    titleElement.style['padding-left'] = (document.documentElement.scrollLeft) + 'px';
    titleElement.style.width = window.innerWidth;
  }
  render() {
    function summary(){
      return (
        <div className="work-items">
          <div>3</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>);
    }
    function details(){
      return (
        <div className="work-items">
          <div>
            <div className="work-item">Task 1</div>
            <div className="work-item">Task 2</div>
            <div className="work-item">Task 3</div>
          </div>
          <div>
            <div className="work-item">Task 4</div>
          </div>
          <div>
            <div className="work-item">Task 5</div>
          </div>
          <div>
            <div className="work-item">Task 6</div>
          </div>
          <div>
            <div className="work-item">Task 7</div>
          </div>
        </div>);
    }
    
    return (
      <div className="person">
        <div className="title" onDoubleClick={this.handleDoubleClick}>
          <div ref="fitToScreenSize">
            <span className="left on-screen">{this.props.name}</span>
            <span className="right on-screen">10 of 40 hours</span>
          </div>
        </div>
        {this.state.onlyShowSummary ? summary() : details()}
      </div>);
  }
}

export default Person