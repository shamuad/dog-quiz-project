import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement } from '../actions/buttoncounter'
import { buttonIncorrect } from '../actions/buttonIncorrect'



var shuffle = require('shuffle-array')
let shuffler = shuffle.pick([1, 2, 3], { 'picks': 3 })


class QuizContainer extends Component {


    incrementCounter = (event) => {
        const correctAnswer = this.props.breeds[shuffler[2]].breed

        console.log(event.target.value)
        if (event.target.value === correctAnswer) {
            return this.props.buttonIncrement(), this.props.buttonIncorrect(), this.nextQuestion()
        }
        else return this.props.buttonIncorrect(), this.nextQuestion()
    }


    displayScore = (currentScore) => {
        if (isNaN(currentScore)) {
            return 0
        }
        return currentScore
    }

    // nextQuestion = () => {
    //     if (this.props.totalAnswers === this.props.totalAnswers) {
    //         return shuffle.pick([1, 2, 3], { 'picks': 3 })
    //     }
    // }

    nextQuestion = () => {
        return shuffler = shuffle.pick([1, 2, 3], { 'picks': 3 })
    }


    render() {
        const currentScore = Math.floor(((this.props.correctAnswers * 100) / this.props.totalAnswers))
        // console.log(shuffler)
        // console.log(this.nextQuestion())
        
        if (this.props.breeds.length < 87) return 'Loading...'
        
        return (<div>

            <div className='score'>Score: {this.displayScore(currentScore)}%</div>

            <img className="dogImage" value={this.props.breeds[shuffler[2]].breed} src={this.props.breeds[shuffler[2]].image} alt="Dog" className="Image"></img>

            <h1>What breed is this?</h1>

            <Quiz value={this.props.breeds[shuffler[2]].breed} content={this.props.breeds[shuffler[2]].breed} test={this.incrementCounter} question={this.nextQuestion} />
            <Quiz value={this.props.breeds[shuffler[0]].breed} content={this.props.breeds[shuffler[0]].breed} test={this.incrementCounter} question={this.nextQuestion}/>
            <Quiz value={this.props.breeds[shuffler[1]].breed} content={this.props.breeds[shuffler[1]].breed} test={this.incrementCounter} question={this.nextQuestion}/>

        </div>)

    }
}



const mapStateToProps = (state) => {
    return {
        totalAnswers: state.totalAnswers,
        correctAnswers: state.correctAnswers,
        breeds: state.breeds,
        state
    }
}


export default connect(mapStateToProps, { buttonIncrement, buttonIncorrect })(QuizContainer)




