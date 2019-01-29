import React, { Component } from 'react';
import Answer from './Answer';


class AnswerContainer extends Component {
  incrementCounter = () => {
    this.props.buttonIncrement()
  }
  
  render() {
    return (
      <div className="Answer">
        <Answer content="Answer 1" />
        <Answer content="Answer 2" />
        <Answer content="Answer 3" />
      </div>
    )
  }
}



export default AnswerContainer

