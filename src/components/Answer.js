import React from 'react'
// import { buttonIncrement } from './actions/buttoncounter'


function Answer(props) {

  incrementCounter = () => {
    this.props.buttonIncrement
  }

  return (<div>
    <h2 className="answer">{props.content}</h2>
    <button onClick={this.props.incrementCounter} >click</button>
    </div>)
}

// Question.propTypes = {
//   content: React.PropTypes.string.isRequired
// };

export default Answer
