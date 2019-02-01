import { SET_QUESTION } from '../actions/currentQuestion'
import { SET_INCORRECTANSWERS } from '../actions/currentQuestion'

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case SET_QUESTION:
            return {
                ...state,
                correctAnswer: {
                    breed: action.payload.breed,
                    image: action.payload.image
                }
            }
        case SET_INCORRECTANSWERS:
            return {
                ...state,
                incorrectAnswers: [...action.payload.breed]
            }
        default:
            return state
    }
}


const initialState = {
    correctAnswer: {
        breed: "Start",
        image: "http://loftopia.com/wp-content/uploads/2013/09/cute-dog-funny-puppy-Favim.com-215827-300x300-300x300.jpg"
    },
    incorrectAnswers: [{
        breed: "Start"
    }, {
        breed: "Start"
    }]
}