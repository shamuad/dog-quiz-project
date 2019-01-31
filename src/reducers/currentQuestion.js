import {SET_QUESTION} from '../actions/currentQuestion'

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTION:
            return {...state, correctAnswer: {...action.payload}, incorrectAnswers: [{breed:action.payload.breed}, {breed:action.payload.breed}]}
        default:
            return state
    }
}

const initialState = {
    correctAnswer: {breed:"spaniel", image: "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1091.jpg"}, 
    incorrectAnswers: [{breed:"test"}, {breed:"snoop"}]
}

// correctAnswer: {breed: '', image: ''}, incorrectAnswers:[]