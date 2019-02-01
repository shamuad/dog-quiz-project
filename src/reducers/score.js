export default (state = {correct: 0, incorrect: 0}, { type }) => {
    switch (type) {
        case 'CORRECT':
            return {...state, correct: state.correct+1}
        case 'INCORRECT':
            return {...state, incorrect: state.incorrect+1}
        default:
            return state
    }
}
