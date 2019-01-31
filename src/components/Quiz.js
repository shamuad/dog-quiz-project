import React, { Component } from 'react';

var shuffle = require('shuffle-array')

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

        if (!currentQuestion) return 'Loading'

        const answers = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers]
        let shuffledAnswers = shuffle.pick(answers, { 'picks': 3 })
        
        return (<div>
            <ul>{shuffledAnswers.map(answer => this.renderAnswers(answer))}</ul>
        </div>)
    }
}

export default Quiz