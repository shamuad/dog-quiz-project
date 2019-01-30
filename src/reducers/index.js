import { combineReducers } from 'redux'
import buttonreducer from './buttonreducer'
  


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
    numClicked: buttonreducer,
})
