import React, { Component } from 'react';
import './DayLabels.css'
class DayLabels extends Component {
    render(){
        return (
          <div className="drop-plan">
            {this.props.taskCount.sort().map(function(item, index){return (
              <div key={item.date.toLocaleDateString()} className="grid-column">
                <div>Day {index + 1}</div>
                <div>{item.date.toLocaleDateString()}</div>
              </div>
            );})}
          </div>
        );
    }
}

export default DayLabels;