import React, { Component } from 'react';
import './DropPlan.css'

class DropPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {onlyShowSummary: false};

    // This binding is necessary to make `this` work in the callback
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }
  handleDoubleClick(e){
    this.setState(function(prevState, props) { return {
      onlyShowSummary: prevState ? !prevState.onlyShowSummary : true
    }});
  }
  render() {
    window.onscroll = handleScroll;
    function handleScroll(e){
      const windowScrollingElement = document.documentElement;
      const headerScrollingElement = document.getElementById('header-top');
      headerScrollingElement.style.left = (-1 * windowScrollingElement.scrollLeft) + 'px';
    }

    function summary(){
      return (
        <div className="tasks">
          <div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
        </div>);
    }
    function details(){
      return (
        <div className="tasks">
          <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
        </div>);
    }
    
    return (
      <div>
        <div id="header-top">
          <div className="drop-plan">
              <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
          </div>
        </div>
        <div className="main-content">
          <div className="person">
            <div className="title">
                <div onDoubleClick={this.handleDoubleClick}>Person</div>
            </div>
            {this.state.onlyShowSummary ? summary() : details()}
          </div>
          <div className="person">
            <div className="title">
                <div onDoubleClick={this.handleDoubleClick}>Person</div>
            </div>
            {this.state.onlyShowSummary ? summary() : details()}
          </div>
          <div className="person">
            <div className="title">
                <div onDoubleClick={this.handleDoubleClick}>Person</div>
            </div>
            {this.state.onlyShowSummary ? summary() : details()}
          </div>
        </div>
      </div>);
  }
}

export default DropPlan