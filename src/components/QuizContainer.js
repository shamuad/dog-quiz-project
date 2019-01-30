import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement } from '../actions/buttoncounter'


var shuffle = require('shuffle-array')


const shuffler = shuffle.pick([1,2,3], { 'picks': 3 })


class QuizContainer extends Component {

    incrementCounter = () => {
        this.props.buttonIncrement()
    }

    render() {
        if (this.props.breeds.length < 87) return 'Testing...'

        return (<div>

            <img className="dogImage" key={this.props.breeds[shuffler[2]].breed} src={this.props.breeds[shuffler[2]].image} alt="Dog" className="Image"></img>

            <h1>What breed is this?</h1>

            <Quiz key={this.props.breeds[shuffler[2]].breed} content={this.props.breeds[shuffler[2]].breed} test={this.incrementCounter} />
            <Quiz key={this.props.breeds[shuffler[0]].breed} content={this.props.breeds[shuffler[0]].breed} test={this.incrementCounter} />
            <Quiz key={this.props.breeds[shuffler[1]].breed} content={this.props.breeds[shuffler[1]].breed} test={this.incrementCounter} />

        </div>)

    }
}



const mapStateToProps = (state) => {
    return {
        numClicked: state.numClicked,
        breeds: state.breeds,
        state
    }
}


export default connect(mapStateToProps, { buttonIncrement })(QuizContainer)




