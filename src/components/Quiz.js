import React, { Component } from 'react';

var shuffle = require('shuffle-array')

class Quiz extends Component {
    renderAnswers(breed) {
        const { test } = this.props
        return <p>
            <button className={this.placeholder} value={breed.breed} onClick={test}>{breed.breed}</button>
        </p>
    }

    render() {
        const { currentQuestion } = this.props

        if (!currentQuestion) return 'Loading'

        const answers = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers]
        let shuffledAnswers = shuffle.pick(answers, { 'picks': 3 })

        return (<div className="img">
            {shuffledAnswers.map(answer => this.renderAnswers(answer))}
        </div>)
    }
}

export default Quiz