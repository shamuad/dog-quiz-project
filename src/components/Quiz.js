import React, { Component } from 'react';

class Quiz extends Component {

    renderAnswers(breed) {
        const { test } = this.props
        return <li>
            <button value={breed.breed} onClick={test}>click</button>
            {breed.breed}
        </li>
    }

    render() {
        const { currentQuestion, test } = this.props

        if(!currentQuestion) return 'Loading'

        const answers = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers]
        // const shuffledAnswers = shuffle(answers)

        return (<div>
            
            {/* <ul>
                <li key={currentQuestion.correctAnswer.breed}>
                <button value={currentQuestion.correctAnswer.breed} onClick={test}>click</button>
                {currentQuestion.correctAnswer.breed}</li></ul>

            {
                currentQuestion.incorrectAnswers &&
                <ul>{currentQuestion.incorrectAnswers.map(this.renderAnswers)} </ul>
            } */}
            {answers.map()}

        </div>)
    }
}


export default Quiz



{/* <div>
            <h3 className="answer">Answer: {props.content}</h3>
            <button value={this.props.content} onClick={this.props.test}>click</button>
        </div> */}