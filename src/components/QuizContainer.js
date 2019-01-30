import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux'
import { buttonIncrement } from '../actions/buttoncounter'




let imageNumber = Math.floor((Math.random() * 10) + 1);
let randomNums = []
// const otherOptions = if(imageNumber = otherOptions)

class QuizContainer extends Component {

    incrementCounter = () => {
        this.props.buttonIncrement()
    }

    // randomNum = (min, max) => {
    //     for (var i = 0; i < 3; i++) {
    //         randomNums.push(Math.floor(Math.random() * max) + min);
    //     }
    //     return randomNums;
    // }


    render() {
        if (this.props.breeds.length < 87) return 'Testing...'
        // console.log(this.chooseMines(3))
        return (<div>

            <img className="dogImage" key={this.props.breeds[randomNums[2]].image} src={this.props.breeds[randomNums[2]].image} alt="Dog" className="Image"></img>

            <h1>What breed is this?</h1>

            <Quiz content={this.props.breeds[randomNums[2]].breed} test={this.incrementCounter} />
            <Quiz content={this.props.breeds[randomNums[0]].breed} test={this.incrementCounter} />
            <Quiz content={this.props.breeds[randomNums[1]].breed} test={this.incrementCounter} />

        </div>)

    }
}

console.log(randomNums)


const mapStateToProps = (state) => {
    return {
        numClicked: state.numClicked,
        breeds: state.breeds,
        state
    }
}


export default connect(mapStateToProps, { buttonIncrement })(QuizContainer)

        // const { dogBreeds } = this.props
        // // console.log(this.props)

        // return (<div>
        //     {/* {!dogBreeds && 'Loading...'}

        //     {console.log(this.props.breeds)} */}


        //     <div>
        //         <div className="Question">
        //             <h1>What is this breed?</h1>
        //         </div>
        //         <div className="Answer">
        //             <Quiz content={ this.props.breeds[2] } test={this.incrementCounter} />
        //             {/* <Quiz content='Answer 2' test={this.incrementCounter} />
        //             <Quiz content='Answer 3' test={this.incrementCounter} /> */}
        //         </div>
        //     </div >
        // </div>)


    // chooseMines = (num) => {
    //     var num = num || 100;
    //     var currentNum = 0;
    //     for (var i = 0; i < 10; i++) {
    //         do {
    //             currentNum = Math.ceil(Math.random() * num);
    //         } while(randomNums.includes(currentNum))
    //         randomNums.push(currentNum);
    //     }
    //     return randomNums;
    // }