import {
    SET_QUESTION
} from '../actions/currentQuestion'
import {
    SET_INCORRECTANSWERS
} from '../actions/currentQuestion'

export default (state = initialState, action = {}) => {
    console.log(state, action)
    switch (action.type) {
        case SET_QUESTION:
            return { ...state,
                correctAnswer: {
                    breed: action.payload.breed,
                    image: action.payload.image
                }
            }
        case SET_INCORRECTANSWERS:
            return { ...state,
                incorrectAnswers: [...action.payload.breed]
            }
            // overwrote, the state by firing two actions
        default:
            return state
    }
}






const initialState = {
    correctAnswer: {
        breed: "spaniel",
        image: "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1091.jpg"
    },
    incorrectAnswers: [{
        breed: "test"
    }, {
        breed: "snoop"
    }]
}

// correctAnswer: {breed: '', image: ''}, incorrectAnswers:[]
// correctAnswer: {...action.payload}, incorrectAnswers: [{breed:action.payload.breed}, {breed:action.payload.breed}]