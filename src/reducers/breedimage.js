import { SET_DOGBREED} from '../actions/setDogBreed';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case SET_DOGBREED: 
        return [
        ...state,
        action.payload
        ]
       
        default:
            return state
    }
    
}

export default reducer