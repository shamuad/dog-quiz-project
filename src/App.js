import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import QuestionContainer from './components/QuestionContainer';
import AnswerContainer from './components/AnswerContainer';
import { buttonIncrement } from './actions/buttoncounter'
import { SetDogBreed } from './actions/setDogBreed'
import DogsImagesContainer from './components/DogImageContainer';

class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dog Quiz App</h1>

        <DogsImagesContainer />
        </header>
        <div className="Side">
          <div className="score">
            <p>Score:</p>
            <p>50%</p>
          </div>


        </div>
        <main>
          <div className="quiz">

            <div className="start-container">
              <div className="start-content">
                <h1>Welcome to our page</h1>
                <button>Continue</button>
              </div>
            </div>

            <div className="question-container">
              <QuestionContainer />
              <div className="questionImage">
                <img className="dogImage" src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg" alt="logo" />
              </div>

              <div className="asnwer">
                <div className="answers">
                <AnswerContainer />
                </div>
              </div>
            </div>




          </div>
        </main>
        <footer>
          <p>Created with love</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
 
  return {
    numClicked: state.numClicked,
    breeds: state.breeds
  }
}

export default connect(mapStateToProps,{ buttonIncrement, SetDogBreed })(App)


// export default connect(mapStateToProps,{ buttonIncrement, AnswerContainer, QuestionContainer })(App)
