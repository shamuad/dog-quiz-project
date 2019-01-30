import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement } from '../actions/buttoncounter'


class QuizContainer extends Component {

    incrementCounter = () => {
        this.props.buttonIncrement()
    }

    render() {
        return (<div>
            <div className="Question">
            <h1>What is this breed?</h1>
        </div>
            <div className="Answer">
                <Quiz content='Answer 1' test={this.incrementCounter} />
                <Quiz content='Answer 2' test={this.incrementCounter} />
                <Quiz content='Answer 3' test={this.incrementCounter} />
            </div>
            </div >)
    }
}


const mapStateToProps = (state) => {
    return {
        numClicked: state.numClicked,
        state
    }
}


export default connect(mapStateToProps, { buttonIncrement })(QuizContainer)