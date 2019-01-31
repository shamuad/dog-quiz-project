import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import QuizContainer from './components/QuizContainer';
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
              
              <div className="questionImage">
              </div>

              <div className="asnwer">
                <div className="answers">
                <QuizContainer />
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

export default connect(mapStateToProps, { SetDogBreed })(App)
