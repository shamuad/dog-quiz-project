import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import QuestionContainer from './components/QuestionContainer';
import AnswerContainer from './components/AnswerContainer';
import { buttonIncrement } from './actions/buttoncounter'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <QuestionContainer />
        <AnswerContainer buttonIncrement={buttonIncrement}/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buttoncounter: state.buttoncounter,
  
  }
}

export default connect(mapStateToProps, { buttonIncrement })(App)


// , {buttonIncrement})