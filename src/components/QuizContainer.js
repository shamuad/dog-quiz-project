import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement } from '../actions/buttoncounter'
import { buttonIncorrect } from '../actions/buttonIncorrect'



var shuffle = require('shuffle-array')
let shuffler = shuffle.pick([1, 2, 3], { 'picks': 3 })



class QuizContainer extends Component {

    sendCurrentBreedToState = () => {
        const currentBreed =  shuffle.pick([this.props.breeds], { 'picks': 3 })

       
    }

    state = {correctAnswerIndex: shuffle.pick([1, 2, 3])}

    incrementCounter = (event) => {
        const correctAnswer = this.props.breeds[this.state.correctAnswerIndex].breed

        console.log(event.target.value, correctAnswer)
        if (event.target.value === correctAnswer) {
            return this.props.buttonIncrement(), this.nextQuestion()
        }
        else return this.props.buttonIncorrect(), this.nextQuestion()
    }


    displayScore = () => {
        const { correct, incorrect } = this.props.score;
        const currentScore = Math.floor((correct * 100) / (correct + incorrect))
        console.log(this.props)
        if (isNaN(currentScore)) {
            return 0
        }
        return currentScore
    }

    


    nextQuestion = () => {
       this.setState({correctAnswerIndex: shuffle.pick([1, 2, 3])})
    }


    render() {
      
        
        
        
        if (this.props.breeds.length < 87) return 'Loading...'
        
        return (<div>

            <div className='score'>Score: {this.displayScore()}%</div>

            <img className="dogImage" value={this.props.breeds[this.state.correctAnswerIndex].breed} src={this.props.breeds[this.state.correctAnswerIndex].image} alt="Dog" className="Image"></img>

            <h1>What breed is this?</h1>

            <Quiz value={this.props.breeds[shuffler[2]].breed} content={this.props.breeds[shuffler[2]].breed} test={this.incrementCounter} question={this.nextQuestion} />
            <Quiz value={this.props.breeds[shuffler[0]].breed} content={this.props.breeds[shuffler[0]].breed} test={this.incrementCounter} question={this.nextQuestion}/>
            <Quiz value={this.props.breeds[shuffler[1]].breed} content={this.props.breeds[shuffler[1]].breed} test={this.incrementCounter} question={this.nextQuestion}/>

        </div>)

    }
}



const mapStateToProps = (state) => {
    return {
        score: state.score,
        breeds: state.breeds,
    }
}


export default connect(mapStateToProps, { buttonIncrement, buttonIncorrect })(QuizContainer)




