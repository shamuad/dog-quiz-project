import React, { Component } from 'react';
import Answer from './Answer';
import { connect } from 'react-redux'
import { buttonIncrement } from '../actions/buttoncounter'

class AnswerContainer extends Component {

  incrementCounter = () => {
    this.props.buttonIncrement()
  }
  
  render() {
    // console.log(this.incrementCounter());

    return (
      <div className="Answer">
        <Answer content="Answer 1" test={this.incrementCounter} />
        <Answer content="Answer 2" />
        <Answer content="Answer 3" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { numClicked: state.numClicked}
 }

export default connect (mapStateToProps, { buttonIncrement }) (AnswerContainer)
