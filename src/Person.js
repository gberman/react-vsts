import React, { Component } from 'react';
import PersonHeader from './PersonHeader'
import WorkItem from './WorkItem'
import './Person.css'

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {onlyShowSummary: false};

    this.TaskCountRender = this.TaskCountRender.bind(this);
    this.OneDaysTasks = this.OneDaysTasks.bind(this);
    this.ToggleDisplay = this.ToggleDisplay.bind(this);
  }
  ToggleDisplay(){
    this.setState(function(prevState, props) { return {
      onlyShowSummary: prevState ? !prevState.onlyShowSummary : true
    }});
  }
  GetNumberOfTasksInADay(date){
    return this.props.tasks.filter(wi => {
      return wi.start <= date  && wi.end >= date;
    }).length;
  }
  TaskCountRender(tC){
    return (<div key={tC.date} className="grid-column">{this.GetNumberOfTasksInADay(tC.date)}</div>);
  }
  OneDaysTasks(date){
    let tasks = this.props.tasks.filter(wi => Math.abs(wi.start - date) < 64800000); // within one hour
    return (<div key={date} className="grid-column">{tasks.map(this.OneWorkItemRender)}</div>);
  }
  OneWorkItemRender(wi){
    return <WorkItem workItem={wi} key={wi.id}/>;
  }
  Summary(){
    return (
      <div className="work-items">
        {this.props.taskCount.map(this.TaskCountRender)}
      </div>);
  }
  Details(){
    return (
      <div className="work-items">
        {this.props.taskCount.map(tc => tc.date).map(this.OneDaysTasks)}
      </div>);
  }
  render() {
    return (
      <div className="person">
        <PersonHeader person={this.props.person} toggle={this.ToggleDisplay} />
        {this.state.onlyShowSummary ? this.Summary() : this.Details()}
      </div>);
  }
}

export default Person