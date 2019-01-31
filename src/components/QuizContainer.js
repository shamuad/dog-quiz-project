import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement, buttonIncorrect } from '../actions/score'

var shuffle = require('shuffle-array')
let shuffler = shuffle.pick([1, 2, 3], { 'picks': 3 })



class QuizContainer extends Component {

    sendCurrentBreedToState = () => {
        const currentBreed =  shuffle.pick([this.props.breeds], { 'picks': 3 })

       
    }

    state = {correctAnswerIndex: shuffle.pick([1, 2, 3])}

    incrementCounter = (event) => {
        const correctAnswer = this.props.breeds[this.state.correctAnswerIndex].breed
        if (event.target.value === correctAnswer) {
            return this.props.buttonIncrement(), this.nextQuestion()
        }
        else return this.props.buttonIncorrect(), this.nextQuestion()
    }


    displayScore = () => {
        const { correct, incorrect } = this.props.score;
        const currentScore = Math.floor((correct * 100) / (correct + incorrect))
        if (isNaN(currentScore)) {
            return 0
        }
        return currentScore
    }

    nextQuestion = () => {
       this.setState({correctAnswerIndex: shuffle.pick([1, 2, 3])})
    }


    render() { 
        const { currentQuestion, score} = this.props

        return (<div>

            <div className='score'>Score: {this.displayScore()}%</div>

            <img className="dogImage" value={currentQuestion.correctAnswer.image} src={currentQuestion.correctAnswer.image} alt="Dog" className="Image"></img>

            <h1>What breed is this?</h1>

            <Quiz currentQuestion={currentQuestion} score={score} test={this.props.buttonIncrement}/>
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


export default connect(mapStateToProps, { buttonIncrement, buttonIncorrect })(QuizContainer)




 /* <Quiz value={currentQuestion.correctAnswer.breed} content={currentQuestion.correctAnswer.breed} test={this.incrementCounter} question={this.nextQuestion} />
            <Quiz value={currentQuestion.incorrectAnswers[0].breed} content={currentQuestion.incorrectAnswers[0].breed} test={this.incrementCounter} question={this.nextQuestion}/>
            <Quiz value={currentQuestion.incorrectAnswers[1].breed} content={currentQuestion.incorrectAnswers[1].breed} test={this.incrementCounter} question={this.nextQuestion}/> */
            