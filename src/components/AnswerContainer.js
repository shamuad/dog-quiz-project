import React, { Component } from 'react';
import Answer from './Answer';

class AnswerContainer extends Component {
  status = {
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

// const mapStateToProps = state => {
//   return 
//   }
// }

export default AnswerContainer

//   connect(mapStateToProps)