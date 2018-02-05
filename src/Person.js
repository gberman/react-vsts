import React, { Component } from 'react';
import PersonHeader from './PersonHeader'
import WorkItem from './WorkItem'
import './Person.css'
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import SummaryWorkItems from './SummaryWorkItems';
import DetailedWorkItems from './DetailedWorkItems';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {onlyShowSummary: false};

    this.ToggleDisplay = this.ToggleDisplay.bind(this);
  }
  ToggleDisplay(){
    this.setState(function(prevState, props) { return {
      onlyShowSummary: prevState ? !prevState.onlyShowSummary : true
    }});
  }

  render() {    
    return (
      <div className="person">
        <PersonHeader person={this.props.person} toggle={this.ToggleDisplay} />
        {this.state.onlyShowSummary ?
          <SummaryWorkItems 
            person={this.props.person}
            daysOff={this.props.daysOff}
            tasks={this.props.tasks}
            taskCount={this.props.taskCount}/> :
          <DetailedWorkItems
            person={this.props.person}
            daysOff={this.props.daysOff}
            tasks={this.props.tasks}
            taskCount={this.props.taskCount}/>}
      </div>);
  }
}

export default Person;