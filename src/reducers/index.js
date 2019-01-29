import { combineReducers } from 'redux'
import buttonreducer from './buttonreducer'

export default combineReducers({
    numClicked: buttonreducer
})
