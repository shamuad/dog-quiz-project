import React from 'react'


function Quiz(props) {

    const { dogBreed } = props

    // console.log(props)
    return (<div>

        {/* {!dogBreed && 'Loading...'}
        {dogBreed && dogBreed.map(url => <img key={url} src={url} alt="Dog" />)} */}


        <div>
            <h3 className="answer">Answer: {props.content}</h3>
            <button value={props.content} onClick={props.test}>click</button>
        </div>
    </div>)
}


export default Quiz