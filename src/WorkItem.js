import './WorkItem.css'
import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';

export default class WorkItem extends Component {
    constructor(props){
        super(props);
   
        this.InputChanged = this.InputChanged.bind(this);
      }
    InputChanged(newVal){}
    render(){
        return (
            <div className="work-item">
                <div className="primary">{this.props.workItem.displayName}</div>
                <div className="secondary">
                    <div className="remaining-hrs">
                        <EditableLabel text={this.props.workItem.remainingHrs + ''}
                        inputWidth='1rem'
                        inputHeight='1.2rem'
                        inputMaxLength={2}
                        onFocusOut={this.InputChanged}/>
                    </div>
                </div>
            </div>);
    }
}