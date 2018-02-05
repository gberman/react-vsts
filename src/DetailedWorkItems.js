import React, { Component } from 'react';
import WorkItem from './WorkItem'
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

class DetailedWorkItems extends Component {
  constructor(props) {
    super(props);
    this.state = {onlyShowSummary: false};

    this.OneDaysTasks = this.OneDaysTasks.bind(this);
  }
  
  OneDaysTasks(date){
    let tasks = this.props.tasks.filter(wi => Math.abs(wi.start - date) < 64800000); // within one hour
    return (<div key={date} className="grid-column">{tasks.map(this.OneWorkItemRender)}</div>);
  }
  OneWorkItemRender(wi){
    return <WorkItem workItem={wi} key={wi.id}/>;
  }

  render() {
    return this.props.connectDropTarget(
      <div className="work-items">
        {this.props.taskCount.map(tc => tc.date).map(this.OneDaysTasks)}
      </div>);
  }
}

DetailedWorkItems.propTypes = {
  person:PropTypes.object.isRequired,
  daysOff:PropTypes.object.isRequired,
  tasks:PropTypes.array.isRequired,
  taskCount:PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

export default DropTarget(ItemTypes.WORK_ITEM, workItemTarget, collect)(DetailedWorkItems);