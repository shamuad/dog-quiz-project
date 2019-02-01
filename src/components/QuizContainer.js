import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement, buttonIncorrect } from '../actions/score'
import { SetCurrentQuestion, SetIncorrectAnswers } from '../actions/currentQuestion'

var shuffle = require('shuffle-array')

class QuizContainer extends Component {

    scoreCounter = (event) => {
        const { currentQuestion } = this.props
        if (event.target.value === currentQuestion.correctAnswer.breed) {
            return this.props.buttonIncrement() && setTimeout(() => this.nextQuestion(), 2000)

        } else {
            return this.props.buttonIncorrect() && setTimeout(() => this.nextQuestion(), 2000)

        }
    }

    nextQuestion = () => {
        const { breeds } = this.props
        let shuffledBreeds = shuffle.pick(breeds, { 'picks': 3 })
        let correctAnswer = shuffledBreeds[0]
        this.props.SetIncorrectAnswers(shuffledBreeds.splice(1, 2))
        return this.props.SetCurrentQuestion(correctAnswer.breed, correctAnswer.image)
    }

    displayScore = () => {
        const { correct, incorrect } = this.props.score;
        const currentScore = Math.floor((correct * 100) / (correct + incorrect))
        if (isNaN(currentScore)) {
            return 0
        }
        return currentScore
    }


    // Could not figure out final logic
    // displayStreak = () => {
    //     const { correct, incorrect } = this.props.score;
    //     let streak = 0
    //     console.log(correct)
    //     if (correct === +1) {
    //         streak += 1 
    //     } else {
    //         streak = 0
    //     }
    //     return streak
    // }

        render() {
            const { currentQuestion, score } = this.props

            if (this.props.breeds.length < 87) return 'Loading...'

        return (<div>
            <div className='score'>Score: {this.displayScore()}%</div>
            <img value={currentQuestion.correctAnswer.image} src={currentQuestion.correctAnswer.image} alt="Dog" className="Image"></img>
            <h2 >What breed is this?</h2>
            <Quiz className="question" currentQuestion={currentQuestion} score={score} test={this.scoreCounter} nextQuestion={this.nextQuestion} />
        </div>)
}
}

const mapStateToProps = (state) => {
    return {
        score: state.score,
        breeds: state.breeds,
        currentQuestion: state.currentQuestion
    }
}

export default connect(mapStateToProps, { buttonIncrement, buttonIncorrect, SetCurrentQuestion, SetIncorrectAnswers })(QuizContainer)

