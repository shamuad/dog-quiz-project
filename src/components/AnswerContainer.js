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
        <Answer content={this.props.dogbreeds[0].breedname} test={this.incrementCounter}/>
        <Answer content={this.props.dogbreeds[2].breedname} test={this.incrementCounter}/>
        <Answer content={this.props.dogbreeds[3].breedname} test={this.incrementCounter}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { numClicked: state.numClicked}
  state
 }


export default connect (mapStateToProps, { buttonIncrement }) (AnswerContainer)
