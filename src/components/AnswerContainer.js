import React, { Component } from 'react';
import Answer from './Answer';
import { connect } from 'react-redux'
import { buttonIncrement } from '../actions/buttoncounter'

class AnswerContainer extends Component {

  incrementCounter = () => {
    this.props.buttonIncrement()
  }
  
  render() {   
    return (
      <div className="Answer">
        <Answer content='Answer 1' test={this.incrementCounter}/>
        <Answer content='Answer 2' test={this.incrementCounter}/>
        <Answer content='Answer 3' test={this.incrementCounter}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numClicked: state.numClicked ,
    state
  }
 }


export default connect (mapStateToProps, { buttonIncrement }) (AnswerContainer)
