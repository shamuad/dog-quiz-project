import React from 'react'

function Answer(props) {

  return (<div>
    <h2 className="answer">{props.content}</h2>
    <button>click</button>
    </div>)
}

// Question.propTypes = {
//   content: React.PropTypes.string.isRequired
// };

export default Answer
