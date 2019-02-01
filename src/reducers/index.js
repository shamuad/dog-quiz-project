import { combineReducers } from 'redux'
import score from './score'
import breedimage from './breedimage'
import currentQuestion from './currentQuestion'

export default combineReducers({
    score,
    breeds: breedimage,
    currentQuestion
})
