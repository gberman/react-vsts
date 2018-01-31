import './PersonHeader.css'
import React, { Component } from 'react';

export default class PersonHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {onlyShowSummary: false};
    
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
        if (this.props.toggle) this.props.toggle();
    }
    handleScroll(e){
      const titleElement = this.refs.fitToScreenSize;
      titleElement.style['padding-left'] = (document.documentElement.scrollLeft) + 'px';
    }
    render(){
        return (
            <div className="title" onDoubleClick={this.handleDoubleClick} ref="title">
                <div ref="fitToScreenSize">
                    <span className="left">{this.props.person.displayName}</span>
                    <span className="right" ref="right">{this.props.person.remainingCapacity} of {this.props.person.totalRemainingCapacity} hours</span>
                </div>
            </div>);
    }
}