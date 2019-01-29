import React, { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux'

class QuestionContainer extends Component {

  render() {
    return (
      <div className="Question">
          <div className="Question-header">
            <h1>Dog Quizz</h1>
          </div>
          <Question content= "What is this breed?"/>
      </div>
    )}
}


const mapStateToProps = (state) => { 
  return  {state}
}


export default connect(mapStateToProps)(QuestionContainer)