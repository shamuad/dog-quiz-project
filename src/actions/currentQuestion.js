export const SET_QUESTION = 'SET_QUESTION'

export function SetCurrentQuestion(breed, image) {
    console.log(breed,image)
    return {
        type: SET_QUESTION,
        payload: {
            breed,
            image
        }
    }
    
}


// export const SetCurrentQuestion = () => {
//     return {
//         type: 'SET_QUESTION'
//     }
// }