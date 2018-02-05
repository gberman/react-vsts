import './PersonHeader.css'
import React, { Component } from 'react';

export default class PersonHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {onlyShowSummary: false};
    
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
      }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        this.handleScroll();
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize(){
        this.refs.right.style.paddingRight = (this.refs.title.clientWidth - window.visualViewport.width - document.documentElement.scrollLeft)  + 'px';
    }
    handleDoubleClick(e){
        if (this.props.toggle) this.props.toggle();
    }
    handleScroll(e){
      const titleElement = this.refs.fitToScreenSize;
      this.refs.left.style.paddingLeft = (document.documentElement.scrollLeft) + 'px';
      this.handleResize();
    }
    render(){
        return (
            <div className="title" onDoubleClick={this.handleDoubleClick} ref="title">
                <div ref="fitToScreenSize">
                    <span className="left" ref="left">{this.props.person.displayName}</span>
                    <span className="right" ref="right">{this.props.person.remainingCapacity} of {this.props.person.totalRemainingCapacity} hours</span>
                </div>
            </div>);
    }
}