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
          <h1 className="App-header">Welcome to Woofers</h1>
          <DogsImagesContainer />
        </header>
        <div className="answers">
          <QuizContainer />
        </div>

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
