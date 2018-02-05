import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const workItemTarget = {
  drop(props) {
    debugger;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class SummaryWorkItems extends Component {
  constructor(props) {
    super(props);
    this.state = {onlyShowSummary: false};

    this.TaskCountRender = this.TaskCountRender.bind(this);
  }
  GetNumberOfTasksInADay(date){
    return this.props.tasks.filter(wi => {
      return wi.start <= date  && wi.end >= date;
    }).length;
  }
  TaskCountRender(tC){
    return (<div key={tC.date} className="grid-column">{this.GetNumberOfTasksInADay(tC.date)}</div>);
  }
  
  render() { 
    return this.props.connectDropTarget(
        <div className="work-items">
        {this.props.taskCount.map(this.TaskCountRender)}
      </div>);
  }
}

SummaryWorkItems.propTypes = {
  person:PropTypes.object.isRequired,
  daysOff:PropTypes.object.isRequired,
  tasks:PropTypes.array.isRequired,
  taskCount:PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

export default DropTarget(ItemTypes.WORK_ITEM, workItemTarget, collect)(SummaryWorkItems);