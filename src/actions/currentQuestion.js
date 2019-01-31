export const SET_QUESTION = 'SET_QUESTION'

export function SetCurrentQuestion(breed, image) {
    
    return {
        type: SET_QUESTION,
        payload: {
            breed,
            image
        }
    }
    
}
