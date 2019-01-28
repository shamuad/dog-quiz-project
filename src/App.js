import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Dog Quiz App</h1>
        
        </header>
        <side>
        <div className ="score">
            <p>Score:</p>
            <p>50%</p>
            </div>


        </side>
        <main>
          <div className="quiz">

            <div className="start-container">
              <div className="start-content">
              <h1>Welcome to our page</h1>
              <button>Continue</button>
              </div>
            </div>

            <div className="question-container">
              <h2>What kind of dog is this?</h2>
              <div className="questionImage">
                <img className="dogImage" src="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg" alt="logo"/>
              </div>

              <div className="asnwer">
                    <div className="answers">
                        <p>Option 1</p>
                        <p>Option 2</p>
                        <p>Option 3</p>
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

export default App;
