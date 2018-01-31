import React, { Component } from 'react';
import Person from './Person'
import DayLabels from './DayLabels'
import './DropPlan.css'

class DropPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { id: '123', displayName: 'Greg',    order: 1, totalRemainingCapacity: 40, remainingCapacity: 30 },
        { id: '234', displayName: 'Diana',   order: 3, totalRemainingCapacity: 40, remainingCapacity: 30 },
        { id: '345', displayName: 'Pogo',    order: 2, totalRemainingCapacity: 40, remainingCapacity: 30 },
        { id: '456', displayName: 'Hop-Hop', order: 4, totalRemainingCapacity: 40, remainingCapacity: 30 }
      ],
      current_person_id: '123',
      daysOff: {
        workingDays: [1,2,3,4,5],
        team: [{start: "2018-01-05T00:00:00Z", end: "2018-01-05T00:00:00Z"}],
        people:[
          { id: '123', days: [{start: "2018-01-10T00:00:00Z", end: "2018-01-10T00:00:00Z"}]}, 
          { id: '234', days: []}, 
          { id: '345', days: []}, 
          { id: '456', days: []}
        ]
      },
      tasks: {
        '123': [{workItemType:'Task', state: 'To Do', start: new Date('2018-01-04T00:00:00.000Z'),end: new Date('2018-01-04T00:00:00.000Z'),id:'task1', remainingHrs: 3, displayName:'[DEV] Task 1 xxxxx xxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxx', assignedTo: '123'}],
        '234': [{workItemType:'Task', state: 'To Do', start: new Date('2018-01-05T00:00:00.000Z'),end: new Date('2018-01-05T00:00:00.000Z'),id:'task1', remainingHrs: 4, displayName:'[DEV] Task 2', assignedTo: '234'}],
        '345': [{workItemType:'Task', state: 'To Do', start: new Date('2018-01-06T00:00:00.000Z'),end: new Date('2018-01-09T00:00:00.000Z'),id:'task1', remainingHrs: 5, displayName:'[DEV] Task 3', assignedTo: '345'}],
        '456': [{workItemType:'Task', state: 'To Do', start: new Date('2018-01-07T00:00:00.000Z'),end: new Date('2018-01-07T00:00:00.000Z'),id:'task1', remainingHrs: 6, displayName:'[DEV] Task 4', assignedTo: '456'}]
      },
      taskCount: [
        {date:new Date('2018-01-04T00:00:00.000Z'), count: 1},
        {date:new Date('2018-01-05T00:00:00.000Z'), count: 1},
        {date:new Date('2018-01-06T00:00:00.000Z'), count: 0},
        {date:new Date('2018-01-07T00:00:00.000Z'), count: 0},
        {date:new Date('2018-01-08T00:00:00.000Z'), count: 1},
        {date:new Date('2018-01-09T00:00:00.000Z'), count: 1},
        {date:new Date('2018-01-10T00:00:00.000Z'), count: 1}
      ]
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.renderPerson = this.renderPerson.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    const windowScrollingElement = document.documentElement;
    const headerScrollingElement = document.getElementById('header-top');
    headerScrollingElement.style.left = (-1 * windowScrollingElement.scrollLeft) + 'px';
  }

  sortBy(a, b){
    if (this.props.showCurrentUserFirst){
      if (a.id === this.state.current_person_id) return  0;
      if (b.id === this.state.current_person_id) return 1;
    }
    if (a.order && b.order) return a.order - b.order;
    return a.displayName < b.displayName ? -1 : 1;
  }

  renderPerson(item){
    let tasks = this.state.tasks[item.id];
    return (<Person key={item.id} person={item} daysOff={this.state.daysOff} tasks={tasks} taskCount={this.state.taskCount} />);
  }
  render() {
    return (
      <div>
        <div id="header-top">
          <DayLabels taskCount={this.state.taskCount} daysOff={this.state.daysOff}/>
        </div>
        <div className="main-content">
          {this.state.people.sort(this.sortBy).map(this.renderPerson)}
        </div>
      </div>);
  }
}

export default DropPlan