import { combineReducers } from 'redux'
import score from './score'
import breedimage from './breedimage'

  


// const reducer = (state = initialstate, action = {}) => {
//     switch (action.type) {
//         // case SELECT:
//         // console.log(SELECT)
//         //   return [...state, action.payload]
//         default:
//             // console.log(state)
//             return state
//     }
// }


export default combineReducers({
    score,
    breeds: breedimage
})
