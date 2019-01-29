import React, { Component } from 'react';
import Answer from './Answer';
import { connect } from 'react-redux'

class AnswerContainer extends Component {
  status = {
  }

  render() {
   
    return (
      <div className="Answer">
        <Answer content={this.props.dogbreeds[0].breedname} />
        <Answer content={this.props.dogbreeds[2].breedname} />
        <Answer content={this.props.dogbreeds[3].breedname} />
      </div>
    )
  }
}

const mapStateToProps = state => {

  return state
  }


export default connect(mapStateToProps)(AnswerContainer)

//   connect(mapStateToProps)