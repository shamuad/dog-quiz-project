import React from 'react'


function Answer(props) {
  

  return (<div>
    <h2 className="answer">{props.content}</h2>
    <button onClick={props.test}>click</button>
  </div>)
}

export default Answer
