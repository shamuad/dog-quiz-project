import React, { Component } from 'react';
import Question from './Question';

class QuestionContainer extends Component {
  status = {
  }

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

// const mapStateToProps = state => {
//   return 
//   }
// }

export default QuestionContainer

//   connect(mapStateToProps)