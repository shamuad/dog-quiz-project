import React from 'react'


function Quiz(props) {

    // const { breed, images } = props;


    return (<div>
        <h2 className="newquestion">{props.question}</h2>
        <div>
            <h3 className="answer">{props.content}</h3>
            <button key='button' onClick={props.test}>click</button>
        </div>
        </div>)
}


export default Quiz

