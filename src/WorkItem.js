import './WorkItem.css'
import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';
import { ItemTypes }  from './Constants'
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

/**
 * Implements the drag source contract.
 */
const workItemSource = {
    beginDrag(props) {
      return {workItem:props.workItem};
    }
  };
  
  /**
   * Specifies the props to inject into your component.
   */
  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
  }
  
  const propTypes = {
    workItem: PropTypes.object.isRequired,
    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  };

class WorkItem extends Component {
    constructor(props){
        super(props);
   
        this.InputChanged = this.InputChanged.bind(this);
      }
    InputChanged(newVal){}

    render(){
        const { isDragging, connectDragSource, workItem } = this.props;
        return connectDragSource(
            <div className="work-item" style={{opacity: isDragging ? 0.5 : 1}}>
                <div className="primary">{isDragging} - {workItem.displayName}</div>
                <div className="secondary">
                    <div className="remaining-hrs">
                        <EditableLabel text={workItem.remainingHrs + ''}
                        inputWidth='1rem'
                        inputHeight='1.2rem'
                        inputMaxLength={2}
                        onFocusOut={this.InputChanged}/>
                    </div>
                </div>
            </div>);
    }
}

WorkItem.propTypes = propTypes;

export default DragSource(ItemTypes.WORK_ITEM, workItemSource, collect)(WorkItem);