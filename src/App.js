import React, { Component } from 'react';
import './App.css';
import QuestionContainer from './components/QuestionContainer';
import AnswerContainer from './components/AnswerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <QuestionContainer />
        <AnswerContainer />
        </header>
      </div>
    );
  }
}

export default App;
