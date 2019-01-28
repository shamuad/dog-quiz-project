import React, { Component } from 'react';
import './App.css';
import QuestionContainer from './components/QuestionContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <QuestionContainer />
        </header>
      </div>
    );
  }
}

export default App;
