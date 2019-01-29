import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import QuestionContainer from './components/QuestionContainer';
import AnswerContainer from './components/AnswerContainer';
import { buttonIncrement } from './actions/buttoncounter'



class App extends Component {

  render() {
    console.log(this.props.numClicked)
    return (
      <div className="App">
        <header className="App-header">
        <QuestionContainer />
        <AnswerContainer/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
 
  return {
    numClicked: state.numClicked,
  }
}

export default connect(mapStateToProps, { buttonIncrement })(App)


// , {buttonIncrement})