import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement, buttonIncorrect } from '../actions/score'
import { SetCurrentQuestion } from '../actions/currentQuestion'


var shuffle = require('shuffle-array')
// let shuffler = shuffle.pick([1, 2, 3], { 'picks': 3 })

class QuizContainer extends Component {

    state = { correctAnswerIndex: shuffle.pick([1, 2, 3]) }

    scoreCounter = (event) => {
        const { currentQuestion } = this.props
        console.log( currentQuestion )
        if (event.target.value === currentQuestion.correctAnswer.breed) {
            return this.props.buttonIncrement(), this.nextQuestion()
 
        } else {
            return this.props.buttonIncorrect(), this.nextQuestion()
 
        }
    }

    nextQuestion = () => {
        const { SetCurrentQuestion, breeds } = this.props
        let shuffledBreeds = shuffle.pick(breeds, { 'picks': 3 })
        shuffledBreeds.map(breed => {
        return this.props.SetCurrentQuestion(breed.breed, breed.image)})
    }


    displayScore = () => {
        const { correct, incorrect } = this.props.score;
        const currentScore = Math.floor((correct * 100) / (correct + incorrect))
        if (isNaN(currentScore)) {
            return 0
        }
        return currentScore
    }


    render() {
        const { currentQuestion, score } = this.props
        if (this.props.breeds.length < 87) return 'Loading...'
        // console.log(this.nextQuestion())
        return (<div>

            <div className='score'>Score: {this.displayScore()}%</div>

            <img className="dogImage" value={currentQuestion.correctAnswer.image} src={currentQuestion.correctAnswer.image} alt="Dog" className="Image"></img>

            <h1>What breed is this?</h1>

            <Quiz currentQuestion={currentQuestion} score={score} test={this.scoreCounter} nextQuestion={this.nextQuestion} />
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


export default connect(mapStateToProps, { buttonIncrement, buttonIncorrect, SetCurrentQuestion })(QuizContainer)




/* <Quiz value={currentQuestion.correctAnswer.breed} content={currentQuestion.correctAnswer.breed} test={this.incrementCounter} question={this.nextQuestion} />
           <Quiz value={currentQuestion.incorrectAnswers[0].breed} content={currentQuestion.incorrectAnswers[0].breed} test={this.incrementCounter} question={this.nextQuestion}/>
           <Quiz value={currentQuestion.incorrectAnswers[1].breed} content={currentQuestion.incorrectAnswers[1].breed} test={this.incrementCounter} question={this.nextQuestion}/> */
