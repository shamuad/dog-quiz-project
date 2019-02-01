export const SET_QUESTION = 'SET_QUESTION'

export function SetCurrentQuestion(breed, image) {
    return {
        type: SET_QUESTION,
        payload: {
            breed,
            image
        },
    }

}

export const SET_INCORRECTANSWERS = 'SET_INCORRECTANSWERS'

export function SetIncorrectAnswers(breed) {

    return {
        type: SET_INCORRECTANSWERS,
        payload: {
            breed: breed

        },
    }

}