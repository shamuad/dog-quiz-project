import React from 'react'

function Answer(props) {

  return (<div>
    <p className="answers">{props.content}</p>
    <button>click</button>
    </div>)
}

// Question.propTypes = {
//   content: React.PropTypes.string.isRequired
// };

export default Answer
