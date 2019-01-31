export default (state = initialState, action) => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

const initialState = {
    correctAnswer: {breed:"spaniel", image: "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1091.jpg"},
    incorrectAnswers: [{breed:"test"}, {breed:"snoop"}]
}
